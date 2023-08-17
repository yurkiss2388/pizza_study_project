import React from 'react';
import classes from './AddProduct.module.css';
const AddUserForm = (props) => {

    return (
        <div className={classes.box}>
            <div >
                <div className={classes.inputBox} >
                    <input onChange={e => { props.setNameUser(e.target.value) }}
                        value={props.nameUser}
                        className={classes.input}>
                    </input>
                    <input onChange={e => { props.setSurnameUser(e.target.value) }}
                        value={props.surnameUser}
                        className={classes.input}>
                    </input>
                </div>
                <div className={classes.inputBox}>
                    <input onChange={e => { props.setPhoneUser(e.target.value) }}
                        value={props.phoneUser}
                        className={classes.input}>
                    </input>
                    <input onChange={e => { props.setAddressUser(e.target.value) }}
                        value={props.addressUser}
                        className={classes.input}>
                    </input>
                </div>
            </div>
            <div className={classes.contentBox}>
                <div>Фамилия Имя : {props.surnameUser} {props.nameUser} </div>
                <div>Телефон : {props.phoneUser}</div>
                <div>Адрес : {props.addressUser}</div>
            </div>
            <button className={classes.btn}>
                добавить
            </button>
        </div>
    );
};

export default AddUserForm;