import React from 'react';
import d from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={`${d.dialog} ${d.active}`}>
                    user 1
                </div>
                <div className={d.dialog}>
                    user 2
                </div>
                <div className={d.dialog}>
                    user 3
                </div>
                <div className={d.dialog}>
                    user 4
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