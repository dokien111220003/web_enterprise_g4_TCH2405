import React, { useState } from 'react';
import { Button, Form, Space } from 'antd'
import { useNavigate } from 'react-router-dom';
// import './FacultyAdmin.css';
import search_icon from '../Assets/search.png';
import { useSelector } from 'react-redux'
import * as FacultyService from '../../services/FacultyService';
import { useRef } from 'react'
import { useMutationHooks } from '../../hooks/useMutationHook'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { DeleteOutlined, EditOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import * as message from '../Message/Message'
import { getBase64, getItem } from '../../utilis'
import TableComponent from '../TableComponent/TableComponent'
import DrawerComponent from '../DrawerComponent/DrawerComponent'
import ModalComponent from '../ModalComponent/ModalComponent'
import Loading from '../LoadingComponent/Loading'
import { Select } from 'antd';

  const FacultyAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowSelected, setRowSelected] = useState('')
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
    const user = useSelector((state) => state?.user)
    const searchInput = useRef(null);
    const inittial = () => ({
      name: '',
      description: '',

    })
  
    const getAllFaculty = async () => {
      const res = await FacultyService.getAllFaculty()
      return res
    }
  
    const { Option } = Select;
  
    const [stateFacultyDetails, setStateFacultyDetails] = useState({
      name: '',
      description: '',
    })
    const [stateProduct, setStateProduct] = useState(inittial())
    const [stateProductDetails, setStateProductDetails] = useState(inittial())
  
    const [form] = Form.useForm();

    
  const mutation = useMutationHooks(
    (data) => {
      const { name,
        description,
        } = data
      const res = FacultyService.createFaculty({
        name,
        description,
      })
      return res
    }
  )
  
    const mutationUpdate = useMutationHooks(
      (data) => {
        const { id,
          token,
          ...rests } = data
        const res = FacultyService.updateFaculty(
          id,
          { ...rests }, token)
        return res
      },
    )
  
    const mutationDeletedMany = useMutationHooks(
      (data) => {
        const { token, ...ids
        } = data
        const res = FacultyService.deleteManyFaculty( 
          ids,
          token)
        return res
      },
    )
  
    const handleDelteManyFaculties = (ids) => {
      mutationDeletedMany.mutate({ ids: ids, token: user?.access_token }, {
        onSettled: () => {
          queryFaculty.refetch()
        }
      })
    }
  
    const mutationDeleted = useMutationHooks(
      (data) => {
        const { id,
          token,
        } = data
        const res = FacultyService.deleteFaculty(
          id,
          token)
        return res
      },
    )
  
    const fetchGetDetailsFaculty = async (rowSelected) => {
      const res = await FacultyService.getDetailsFaculty(rowSelected)
      if (res?.data) {
        setStateFacultyDetails({
          name: res?.data?.name,
          description: res?.data?.description,
        })
      }
      setIsLoadingUpdate(false)
    }

    const onFinish = () => {
      const params = {
        name: stateProduct.name,
        description: stateProduct.description,
      }
      mutation.mutate(params, {
        onSettled: () => {
          queryFaculty.refetch()
        }
      })
    }

    const handleChangeSelect = (value) => {
      setStateProduct({
        ...stateProduct,
        type: value
      })
  }
  
    useEffect(() => {
      form.setFieldsValue(stateFacultyDetails)
    }, [form, stateFacultyDetails])
  
    useEffect(() => {
      if (rowSelected && isOpenDrawer) {
        setIsLoadingUpdate(true)
        fetchGetDetailsFaculty(rowSelected)
      }
    }, [rowSelected, isOpenDrawer])
  
    const handleDetailsProduct = () => {
      setIsOpenDrawer(true)
    }
  
    const { data, isLoading, isSuccess, isError } = mutation
    const { data: dataUpdated, isLoading: isLoadingUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
    const { data: dataDeleted, isLoading: isLoadingDeleted, isSuccess: isSuccessDelected, isError: isErrorDeleted } = mutationDeleted
    const { data: dataDeletedMany, isLoading: isLoadingDeletedMany, isSuccess: isSuccessDelectedMany, isError: isErrorDeletedMany } = mutationDeletedMany
  
    const queryFaculty = useQuery({ queryKey: ['faculties'], queryFn: getAllFaculty })
    const { isLoading: isLoadingFaculties, data: faculties } = queryFaculty
    const renderAction = () => {
      return (
        <div>
          <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)} />
          <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} onClick={handleDetailsProduct} />
        </div>
      )
    }
  
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      // setSearchText(selectedKeys[0]);
      // setSearchedColumn(dataIndex);
    };
  
    const handleReset = (clearFilters) => {
      clearFilters();
      // setSearchText('');
    };
  
    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div
          style={{
            padding: 8,
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <InputComponent
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
            }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{
                width: 90,
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1890ff' : undefined,
          }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      // render: (text) =>
      //   searchedColumn === dataIndex ? (
      //     // <Highlighter
      //     //   highlightStyle={{
      //     //     backgroundColor: '#ffc069',
      //     //     padding: 0,
      //     //   }}
      //     //   searchWords={[searchText]}
      //     //   autoEscape
      //     //   textToHighlight={text ? text.toString() : ''}
      //     // />
      //   ) : (
      //     text
      //   ),
    });
  
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        ...getColumnSearchProps('name')
      },
      {
        title: 'Description',
        dataIndex: 'description',
        sorter: (a, b) => a.description.length - b.description.length,
        ...getColumnSearchProps('description')
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render: renderAction
      },
    ];
  
    const dataTable = faculties?.data?.length && faculties?.data?.map((faculty) => {
      return { ...faculty, key: faculty._id}
    })
  
    useEffect(() => {
      if (isSuccessDelected && dataDeleted?.status === 'OK') {
        message.success()
        handleCancelDelete()
      } else if (isErrorDeleted) {
        message.error()
      }
    }, [isSuccessDelected])
  
    const handleCancelDelete = () => {
      setIsModalOpenDelete(false)
    }
  
      const handleCloseDrawer = () => {
      setIsOpenDrawer(false);
      setStateFacultyDetails({
        name: '',
        description: '',
      })
      form.resetFields()
    };

    useEffect(() => {
      if(!isModalOpen) {
        form.setFieldsValue(stateProductDetails)
      }else {
        form.setFieldsValue(inittial())
      }
    }, [form, stateProductDetails, isModalOpen])
  
    useEffect(() => {
      if (isSuccessDelectedMany && dataDeletedMany?.status === 'OK') {
        message.success()
      } else if (isErrorDeletedMany) {
        message.error()
      }
    }, [isSuccessDelectedMany])
  
    useEffect(() => {
      if (isSuccessUpdated && dataUpdated?.status === 'OK') {
        message.success()
        handleCloseDrawer()
      } else if (isErrorUpdated) {
        message.error()
      }
    }, [isSuccessUpdated])
  
    const handleDeleteFaculty = () => {
      mutationDeleted.mutate({ id: rowSelected, token: user?.access_token }, {
        onSettled: () => {
          queryFaculty.refetch()
        }
      })
    }
  
    const handleOnchangeDetails = (e) => {
      setStateFacultyDetails({
        ...stateFacultyDetails,
        [e.target.name]: e.target.value
      })
    }
   
  
    const onUpdateFaculty = () => {
      mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateFacultyDetails }, {
        onSettled: () => {
          queryFaculty.refetch()
        }
      })
    }

    const handleCancel = () => {
      setIsModalOpen(false);
      setStateProduct({
        name: '',
        description: '',
      })
      form.resetFields()
    };
  
  
    const handleOnchange = (e) => {
      setStateProduct({
        ...stateProduct,
        [e.target.name]: e.target.value
      })
    }

    return (
      <div className="faculty-admin">
        <div className="page-content-header">
          <h1>Faculty Management Page</h1>
        </div>
      <div style={{ marginTop: '10px' }}>
        <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }} onClick={() => setIsModalOpen(true)}><PlusOutlined style={{ fontSize: '60px' }} /></Button>
      </div>
        <div style={{ marginTop: '20px' }}>
        <TableComponent handleDelteMany={handleDelteManyFaculties} columns={columns} isLoading={isLoadingFaculties} data={dataTable} onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setRowSelected(record._id)
            }
          };
        }} />
    </div>
    <ModalComponent forceRender title="Create faculty" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Loading isLoading={isLoading}>

          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <InputComponent value={stateProduct['name']} onChange={handleOnchange} name="name" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input your count description!' }]}
            >
              <InputComponent value={stateProduct.description} onChange={handleOnchange} name="description" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </ModalComponent>
    <DrawerComponent title='Faculty information' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>

          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={onUpdateFaculty}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input name!' }]}
            >
              <InputComponent value={stateFacultyDetails['name']} onChange={handleOnchangeDetails} name="name" />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input description!' }]}
            >
              <InputComponent value={stateFacultyDetails['description']} onChange={handleOnchangeDetails} name="description" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>
      <ModalComponent title="Delete faculty" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteFaculty}>
        <Loading isLoading={isLoadingDeleted}>
          <div>Do you want to delete this faculty?</div>
        </Loading>
      </ModalComponent>
      </div>
    );
  };

  export default FacultyAdmin;
