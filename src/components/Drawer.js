function Drawer() {
    return (
        <div style={{display:"none"}} className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between ">Корзина<img src="/img/cartdelete.svg" alt="remove" className="cu-p"/></h2>
                <div className="items">
                    <div className="cart__item d-flex align-center justify-between mb-20">
                        <img height="70px" width="70px" src="/img/2.jpg" alt="" className="mr-10"/>

                        <div>
                           <span className="mb-5">
                               Мужские Кроссовки Nike Air Max 270
                           </span>
                            <br/>
                            <b>
                                12 999 руб.
                            </b>
                        </div>
                        <img src="/img/cartdelete.svg" alt="remove" className="cartremove"/>
                    </div>
                    <div className="cart__item d-flex align-center justify-between mb-20">
                        <img height="70px" width="70px" src="/img/2.jpg" alt="" className="mr-10"/>

                        <div>
                           <span className="mb-5">
                               Мужские Кроссовки Nike Air Max 270
                           </span>
                            <br/>
                            <b>
                                12 999 руб.
                            </b>
                        </div>
                        <img src="/img/cartdelete.svg" alt="remove" className="cartremove"/>
                    </div>
                    <div className="cart__item d-flex align-center justify-between mb-20">
                        <img height="70px" width="70px" src="/img/2.jpg" alt="" className="mr-10"/>

                        <div>
                           <span className="mb-5">
                               Мужские Кроссовки Nike Air Max 270
                           </span>
                            <br/>
                            <b>
                                12 999 руб.
                            </b>
                        </div>
                        <img src="/img/cartdelete.svg" alt="remove" className="cartremove"/>
                    </div>
                </div>
                <div className="cardTotalBlock">
                    <ul>
                        <li className="d-flex justify-between">
                            <span>Итого: </span>
                            <div className="border__bottom mr-10 ml-10"></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="d-flex justify-between">
                            <span>Налог 5%: </span>
                            <div className="border__bottom mr-10 ml-10"></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenbutton">
                        Оформить заказ
                        <img src="/img/arrow.svg" alt="->" className="ml-45"/>
                    </button>
                </div>


            </div>
        </div>
    );
}
export default Drawer;