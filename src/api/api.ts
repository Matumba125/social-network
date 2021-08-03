import axios from "axios";

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
}

export const AuthorizeAPI = {
    authorizeUser: () => {
        return instance.get(`auth/me`).then(response => response.data)
    },
}