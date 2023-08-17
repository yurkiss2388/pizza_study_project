import React, { useState } from 'react';
import img from '../img/priductImg.png';
import img1 from '../img/delete.svg';
import classes from './ProductCard.module.css';


const ProductCard = (props) => {
    const [counter,setCounter] = useState (0)
    return (
        <div className={classes.card}>
            <div className={classes.col}>
                <img src={img} ></img>
            </div>
            <div className={classes.content__col}>
                <div>{props.nameProduct}</div>
                <div>{props.description}</div>
            </div>
            <div className={classes.col}>
                <div>{props.price}</div>
            </div>
            <div className={classes.col}>
                <div className={classes.counter}>
                    <button onClick={() => setCounter(counter -1)} className={classes.counter__btn}>
                        -
                    </button>
                    <div >
                         {counter}
                    </div>
                    <button onClick={() => setCounter(counter +1)} className={classes.counter__btn}>
                        +
                    </button>
                </div>
            </div>
            <div className={classes.delete}>
                <img src={img1}></img>
            </div>
        </div>
    );
};

export default ProductCard;