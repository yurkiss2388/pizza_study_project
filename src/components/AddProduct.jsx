import React from 'react';
import classes from './AddProduct.module.css';
const AddProduct = (props) => {

    return (
        <div className={classes.box}>

            <div className={classes.inputBox}>
                <input onChange={e => { props.setNameProduct(e.target.value) }}
                    value={props.nameProduct}
                    className={classes.input}>
                </input>

                <input onChange={e => { props.setPrice(e.target.value) }}
                    value={props.price}
                    className={classes.input}>
                </input>
            </div>

            <textarea onChange={e => { props.setDescription(e.target.value) }}
                value={props.description}
                className={classes.textarea}>
            </textarea >
            <div className={classes.contentBox} >
                <div>Цена:{props.price}</div>
                <div>Продукт:{props.nameProduct}</div>
                <div>описание продукта:{props.description} </div>
            </div>
            <button className={classes.btn}>
                добавить
            </button>

        </div>
    );
};

export default AddProduct;