import React from 'react';
import style from "./Users.module.css";
import Paginator from "../Common/Paginator";
import User from "./User";


const Users = ({
                   onPageChanged,
                   currentPage,
                   users,
                   totalUsersCount,
                   pageSize,
                   follow,
                   unfollow,
                   followingInProgress
               }) => {

    return (
        <div className={style.wrapper}>
            <Paginator onPageChanged={onPageChanged} currentPage={currentPage} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            {users.map(u => <User key={u.id} user={u} unfollow={unfollow} follow={follow}
                                  followingInProgress={followingInProgress}/>)}
        </div>
    );
};

export default Users;