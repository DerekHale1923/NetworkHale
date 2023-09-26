import axios from "axios";


const  instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '69f2c097-b639-4559-b0c2-66dc7012bcbf'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    getUsersProfile(userId) {
        console.warn('you use old api, pleas use new api - "profileAPI.getUserProfile"')
        return profileAPI.getUsersProfile(userId)
    },
    usersUnfollow(userId) {
        return instance.delete(`follow/${userId}`)

    },
    usersFollow(userId) {
        return instance.post(`follow/${userId}`)
    }
}

export const profileAPI = {
    getUsersProfile(userId) {
        return instance.get(`profile/${userId}`,)
            .then(res => res.data)
    },
    getStatus(userId ){
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status ){
        return instance.put('profile/status',{status: status} )
    }
}

export const authAPI = {
    Me(){
        return instance.get(`auth/me`,)
    },
    Login(email, password, rememberMe = false){
        return instance.post('/auth/login', {email, password, rememberMe})
    }, //создаем сессию
    Logout(){
        return instance.delete('/auth/login')
    } //удаляем сессию
}

