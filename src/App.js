
function App() {
  return (
    <div className="wrapper clear">
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
                    <span className="mr-30">1205 руб.</span>
                </li>
                <li>
                    <img src="/img/user.svg"/>
                </li>
            </ul>
        </header>
        <div className="content p-40">
            <h1 className="mb-40">Все кроссовки</h1>

         <div className="sneakers">
             <div className="card">
                 <img src="/img/1.jpg" alt="sneakers1"/>
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
                 <img src="/img/2.jpg" alt="sneakers1"/>
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
                 <img src="/img/3.jpg" alt="sneakers1"/>
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
                 <img src="/img/4.jpg" alt="sneakers1"/>
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
