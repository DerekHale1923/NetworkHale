import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsersThunkCreator,
    toggleFollowingProgress, unfollow,
} from "../../Redux/UserPageReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/UsersSelectors";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    } // если мы ничего не добавляем в конструктор, можно его не писать, так как он пропишется за кадром всеравно


        // вызов этого метода вызовет ререндер компонента
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageChanged) => {
        this.props.getUsersThunkCreator(pageChanged, this.props.pageSize)
    } //создаем обработчик клика в котором меняется кнопка при нажатии и дальше вызывается гет запрос с результатом смены кнопки


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

/*
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
} //все что здесь вписано уходит в пропсы компонента UsersContainer также при изменении state функция вызывается заново
  // более архитектурно правильный вариант будет через селекторы, при изменении, нужно менять только в одном месте и при использовании
  селекторов там можно добавлять еще обработки и вычислительные операции
*/

 let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
} //все что здесь вписано уходит в пропсы компонента UsersContainer также при изменении state функция вызывается заново
 // так как mapStateToProps вызывается на каждое изменение state то и наши селекторы вызываются тоже, пока они легкие это не страшно
// но когда в них будет много данных и вычислений, постоянные вызовы их будут уже серьезным делом, решение = ''


export default connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsersThunkCreator,
})(UsersContainer)


