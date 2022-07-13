
function App() {
  return (
    <div className="wrapper clear">
       <div className="overlay">
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



        <header className="d-flex justify-between align-center">
         <div className="headerLeft d-flex align-center">
             <img src="/img/logo.png"/>
             <div className="headerInfo">
                 <h3 className="text-uppercase">React Sneakers</h3>
                 <p className="opacity-5">Магазин лучших кроссовок</p>
             </div>
         </div>
            <ul className="HeaderRight d-flex">
                <li>
                    <img className="mr-10" src="/img/cart.svg"/>
                    <span className="mr-20">12005 руб.</span>
                </li>

                <li>
                    <img src="/img/heart.svg" className="mr-30"/>
                </li>
                <li>
                    <img src="/img/user.svg"/>
                </li>
            </ul>
        </header>
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1 className="">Все кроссовки</h1>
                <div className="search__block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>

         <div className="sneakers">
             <div className="card">
                 <div className="favorite">
                     <img src="/img/heart-unliked.svg" alt="Unliked"/>
                 </div>
                 <img height="112px" width="133px" src="/img/1.jpg" alt="sneakers1"/>
                 <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                 <div className="d-flex justify-between mt-15 align-center">
                     <div className="price flex-column">
                         <p>Цена</p>
                         <b>12 999 руб.</b>
                     </div>
                     <button>
                         <img src="/img/plus.svg" alt="plus"/>
                     </button>
                 </div>
             </div>
             <div className="card">
                 <img height="112px" width="133px" src="/img/2.jpg" alt="sneakers1"/>
                 <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                 <div className="d-flex justify-between mt-15 align-center">
                     <div className="price flex-column">
                         <p>Цена</p>
                         <b>12 999 руб.</b>
                     </div>
                     <button>
                         <img src="/img/plus.svg" alt="plus"/>
                     </button>
                 </div>
             </div>
             <div className="card">
                 <img height="112px" width="133px" src="/img/3.jpg" alt="sneakers1"/>
                 <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                 <div className="d-flex justify-between mt-15 align-center">
                     <div className="price flex-column">
                         <p>Цена</p>
                         <b>12 999 руб.</b>
                     </div>
                     <button>
                         <img src="/img/plus.svg" alt="plus"/>
                     </button>
                 </div>
             </div>
             <div className="card">
                 <img height="112px" width="133px" src="/img/4.jpg" alt="sneakers1"/>
                 <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                 <div className="d-flex justify-between mt-15 align-center">
                     <div className="price flex-column">
                         <p>Цена</p>
                         <b>12 999 руб.</b>
                     </div>
                     <button>
                         <img src="/img/plus.svg" alt="plus"/>
                     </button>
                 </div>
             </div>
         </div>


        </div>
    </div>
  );
}

export default App;
