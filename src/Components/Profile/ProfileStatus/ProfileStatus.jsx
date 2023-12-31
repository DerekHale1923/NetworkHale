import React, {useEffect, useState} from 'react';
import style from './ProfileStatus.module.css'

const ProfileStatus = ({statusOuter,updateStatus,userId}) => {

    let [editMode, setEditMode] = useState(true)
    let [status, setStatus] = useState(statusOuter)

    useEffect(() => {
        setStatus(statusOuter)
    }, [statusOuter]);

    let activateEditMode = () => {
        setEditMode(editMode = false)
    }
    let deactivateEditMode = () => {
        setEditMode(editMode = true)
        updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(status = e.currentTarget.value)
    }


    return (
        <>  {editMode
            ? <>
                {!userId
                    ? <div className={style.div} onClick={() => activateEditMode()}>{status.length === 0 ? 'Пусто' : status}</div>
                    : <div className={style.div}>{status.length === 0 ? 'Пусто' : status}</div>
                }
                </>
            : <input autoFocus={true} onBlur={() => deactivateEditMode()}
                     onChange={(e) => onStatusChange(e)} value={status}/>}
            {/*без автофокуса не сработает onBlur(выход из фокуса) так как ему нужен фокус)*/}
        </>
    );
}

export default ProfileStatus;