import React, { useEffect, useState } from 'react';
import img from '../img/priductImg.png';
import img1 from '../img/delete.svg';
import './ProductCardA.css';


const ProductCardA = (props) => {
    const [counter, setCounter] = useState(0)
    const [animate, setAnimate] = useState(false)


    return (
        <div className='card'>
             <div>
                <button onClick={() => setAnimate(!animate)} className='btn'>  звести пиццу  </button>
            </div>
            <div onClick={() => setAnimate(!animate)} className='col'>
                <img className={`img_3 ${animate ? 'anim' : ''} `} src={img} ></img>
            </div>
            <div onClick={() => setAnimate(!animate)} className='col'>
                <img className={`img ${animate ? 'anim' : ''} `} src={img} ></img>
            </div>
            <div onClick={() => setAnimate(!animate)} className='col'>
                <img className={`img_2 ${animate ? 'anim' : ''} `} src={img} ></img>
            </div>
            <div onClick={() => setAnimate(!animate)} className='col'>
                <img className={`img_3 ${animate ? 'anim' : ''} `} src={img} ></img>
            </div>
            <div onClick={() => setAnimate(!animate)} className='col'>
                <img className={`img ${animate ? 'anim' : ''} `} src={img} ></img>
            </div>
            <div onClick={() => setAnimate(!animate)} className='col'>
                <img className={`img_2 ${animate ? 'anim' : ''} `} src={img} ></img>
            </div>
            <div onClick={() => setAnimate(!animate)} className='col'>
                <img className={`img_3 ${animate ? 'anim' : ''} `} src={img} ></img>
            </div>
        </div>
    );
};

export default ProductCardA;