export const getProfile = (store) => {
    return store.profilePage.profile
}
export const getStatusProfile = (store) => {
    return store.profilePage.status
}
export const getAuthUserId = (store) => {
    return store.auth.id
}
export const getIsAuth = (store) => {
    return store.auth.isAuth
}