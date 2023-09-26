import CreateMyPost from "./CreateMyPost";
import {actionAddPost} from "../../../../Redux/ProfilePageReducer";
import {connect} from "react-redux";


let mapStateToProps = (store) => {
    return {
        posts: store.profilePage.posts,
        newText: store.profilePage.newPostText
    }
}

const SuperMyPostContainer = connect(mapStateToProps, {actionAddPost})(CreateMyPost)
//connect(вызывает две эти функции)(и закидывает их в эту компоненту)
/* главная особенность connect он получает контекстные данные! и рендерит! рендерит при изменении*/

export default SuperMyPostContainer;