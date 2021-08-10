import axios from "axios";
import {FormDataType} from "../Components/Login/Login";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd5ee63b2-b8ea-4e76-b89c-c960812b3f51'
    }
});

export const UsersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
}

export const FollowAPI = {
    unfollowUser: (id: number) => {
        return instance.delete(`follow/${id}`,).then(response => response.data)
    },
    followUser: (id: number) => {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
}

export const ProfileAPI = {
    getProfileInfo: (userId: string) => {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus: (userId: string) => {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {
            status: status
        })
    },
}

export const AuthorizeAPI = {
    authorizeUser: () => {
        return instance.get(`auth/me`).then(response => response.data)
    },

    loginUser: (formData: FormDataType) => {
        return instance.post('auth/login', formData)
    },
    logoutUser: () => {
        return instance.delete('auth/login')
    }
}