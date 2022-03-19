import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={`${d.dialog} ${d.active}`}>
                    <NavLink to='/dialogs/1'>user 1</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to='/dialogs/2'>user 2</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to='/dialogs/3'>user 3</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to='/dialogs/4'>user 4</NavLink>
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.message}> message 1
                </div>
                <div className={d.message}> message 2
                </div>
                <div className={d.message}> message 3
                </div>
            </div>
        </div>
    )
}

export default Dialogs;