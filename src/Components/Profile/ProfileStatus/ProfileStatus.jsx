import React, {useEffect, useState} from 'react';
import style from './ProfileStatus.module.css'

const ProfileStatus = ({statusOuter,updateStatus}) => {

    let [editMode, setEditMode] = useState(true)
    let [status, setStatus] = useState(statusOuter)

    useEffect(() => {
        setStatus(statusOuter)
    }, [statusOuter]);
    let activateEditMode = () => {
        setEditMode(editMode = true)
    }
    let deactivateEditMode = () => {
        setEditMode(editMode = false)
        updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(status = e.currentTarget.value)
    }


    return (
        <>  {!editMode
            ?
            <div className={style.div} onClick={() => activateEditMode()}>{status.length === 0 ? 'Пусто' : status}</div>
            : <input autoFocus={true} onBlur={() => deactivateEditMode()}
                     onChange={(e) => onStatusChange(e)} value={status}/>}
            {/*без автофокуса не сработает onBlur(выход из фокуса) так как ему нужен фокус)*/}
        </>
    );
}

export default ProfileStatus;