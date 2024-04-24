import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    phone: '',
    role: '',
    faculty: '',
    address: '',
    avatar: '',
    email: '',
    access_token: '',
    refreshToken: '',
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
           const { name = '', email = '', access_token = '', address = '', phone = '', avatar = '', _id = '',city= '',refreshToken = '', role='', faculty='' } = action.payload
           state.name = name ? name : state.name;
           state.email = email ? email : state.email;
           state.address = address ? address : state.address;
           state.phone = phone ? phone : state.phone;
           state.role = role ? role : state.role;
           state.faculty = faculty ? faculty : state.faculty;
           state.avatar = avatar ? avatar : state.avatar;
           state.id = _id ? _id : state.id
           state.access_token = access_token ? access_token : state.access_token;
           state.role = role ? role : state.role;
        },
        resetUser: (state) => {
            state.name = '';
            state.email = '';
            state.address = '';
            state.role = '';
            state.faculty = '';
            state.phone = '';
            state.avatar = '';
            state.id = '';
            state.access_token = '';
            state.refreshToken = ''
         },
    },
})

export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer