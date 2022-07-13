import Index from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
    {title : 'Мужские Кроссовки Nike Blazer Mid Suede',price: 12999,imageURL :'./img/1.jpg'},
    {title : 'Мужские Кроссовки Nike Air Max 270',price: 15999,imageURL :'./img/2.jpg'},
    {title : 'Мужские Кроссовки Nike Blazer Mid Suede',price: 8000,imageURL :'./img/3.jpg'},
    {title : 'Кроссовки Puma X Aka Boku Future Rider',price: 8999,imageURL :'./img/4.jpg'},

]

function App() {
  return (
    <div className="wrapper clear">
         <Drawer/>
        <Header/>
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1 className="">Все кроссовки</h1>
                <div className="search__block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>
         <div className="sneakers">
             {arr.map((obj)=>(<Index title={obj.title} imageURL={obj.imageURL} price={obj.price}/>))}
         </div>
        </div>
    </div>
  );
}

export default App;
