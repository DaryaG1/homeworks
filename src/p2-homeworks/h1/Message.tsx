import React from 'react'
import s from './Message.module.css'


type PropsType = {
    avatar:string
    name:string
    message:string
    time:string
}

function Message(props:PropsType) {

    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Roboto+Mono:ital,wght@1,300&family=Ubuntu:ital,wght@1,300&display=swap');
            </style>
            <div className={s.wrapper}>

                <img className={s.avatar} alt={'avatar'} src={props.avatar}/>

                <div className={s.angle}/>

                <div className={s.message}>
                    <p className={s.name}>{props.name}</p>
                    <p className={s.text}>{props.message}</p>
                    <p className={s.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}
export default Message
