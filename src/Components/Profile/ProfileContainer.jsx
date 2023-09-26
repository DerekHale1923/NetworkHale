import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, profilePageThunk, updateStatus} from "../../Redux/ProfilePageReducer";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";
import {getAuthUserId, getIsAuth, getProfile, getStatusProfile} from "../../Redux/ProfileSelector";

export const ProfileContainer = (props) => {

    const {userId} = useParams()

    useEffect(() => {
        let clearHook = false
        if (!clearHook) {
            if (userId) {
                props.profilePageThunk(userId)
                props.getStatusThunk(userId)
            } else {
                props.profilePageThunk(props.authUserId)
                props.getStatusThunk(props.authUserId)
            }
        }
        return function () {
            clearHook = true
        }
    }, [userId, props.authUserId])

    return (
        <>
            <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </>
    )
}


//===== изначальные пропсы <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus} userId={userId}/>

let mapStateToProps = (store) => ({
    profile: getProfile(store),
    status: getStatusProfile(store),
    authUserId: getAuthUserId(store),
    isAuth: getIsAuth(store),
}) // на каждое изменение state запускается функция mapStateToProps и проверяет не изменилось ли что то
// у нас полно изменений в store поэтому очень важно, точечно выбирать данные которые будут закинуты в mapStateToProps
// в react очень дорогая перерисовка!

export default compose(
    connect(mapStateToProps, {profilePageThunk, getStatusThunk, updateStatus}),
    withAuthRedirect
)(ProfileContainer)
//мы оборачиваем ProfileContainer => withAuthRedirect затем результат оборачиваем => connect

