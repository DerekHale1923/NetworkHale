import PanelSendMess from "./PanelSendMess";
import {actionAddMessage} from "../../../Redux/DialogPageReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/AuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessages, getText} from "../../../Redux/DialogsSelector";

let mapStateToProps = (store) => {
    return {
        dialogs: getDialogs(store),
        messages: getMessages(store),
        text: getText(store),
    }
}
export default compose(
    connect(mapStateToProps, {actionAddMessage}),
    withAuthRedirect
)(PanelSendMess)