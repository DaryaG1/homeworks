import React from 'react'
import {AffairType, deleteAffair} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.someClass}>
            {props.affair.name} ----
            {props.affair.priority}
            <SuperButton onClick={deleteCallback} className={s.btn}>X</SuperButton>
        </div>
    )
}

export default Affair
