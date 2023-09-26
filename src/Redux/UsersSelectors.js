//примитивные селекторы можно делать самому, а вот сложные лучше делать через библиотеку 'reselect'  createSelector
import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users
}

/* export const getSelector = createSelector(getUsers, (users) => {
    return users
}) пример селектора из библиотеки, зависимостией может быть больше как и логики в теле функции
*/
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}