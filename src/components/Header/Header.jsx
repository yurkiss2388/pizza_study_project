import React from 'react';
import imgLogo from '../../img/Logo.svg';
import classes from './Header.module.css';
const Header = () => {
    return (

        <header className={classes.header}>
            <div className={classes.row}>
                <div className={classes.logo}>
                    <img src={imgLogo}
                        className={classes.logoImg} ></img>
                    <div>
                        <h1 className={classes.h1}>YA BAO</h1>
                        <div className={classes.subtitle}>Дух китайской еды</div>
                    </div>

                </div>
                <div className={classes.colDilivery}>
                    <div className={classes.diliveryBox}>
                        <div>Доставка пасты</div>
                        <div className={classes.colDilivery__moscow}>Москва</div>
                    </div>
                    <div className={classes.colDilivery__textv}>Время доставки    от 31 мин</div>
                </div>
                <div className={classes.colContact}>
                    <button className={classes.colContact__btn}>
                        Заказать звонок
                    </button>
                    <div className={classes.colContact__number}>8 800 333-36-62</div>
                </div>
            </div>
            <nav>
                <div className={classes.row}>
                    <div className={classes.navbar}>
                        <div className={classes.link}><a href="#" className={classes.a}>Паста </a></div>
                        <div className={classes.link}><a href="#" className={classes.a} >Супы</a></div>
                        <div className={classes.link}><a href="#" className={classes.a}>Салаты</a></div>
                        <div className={classes.link}><a href="#" className={classes.a}>Антипасти</a></div>
                        <div className={classes.link}><a href="#" className={classes.a}>Напитки</a></div>
                        <div className={classes.link}><a href="#" className={classes.a}>Десерты</a></div>
                        <div className={classes.link}><a href="#" className={classes.a}>Бакалея</a></div>
                        <div className={classes.link}><a href="#" className={classes.a}>Акции</a></div>
                        <div className={classes.link}><a href="#" className={classes.a}>Комбо</a></div>
                        <div className={classes.link}><a href="#" className={classes.a}>Контакты</a></div>
                    </div>
                    <div className={classes.btnBox}>
                        <button className={classes.btnBox__entry}>войти</button>
                        <button className={classes.btnBox__delete}>
                            <div className={classes.btnBox__basket}>Корзина</div>
                            <div className={classes.btnBox__1}>1</div>
                        </button>
                    </div>
                </div>
            </nav>
        </header>

    );
};

export default Header;