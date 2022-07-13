function Card(){
    return (
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
    );
}
export default Card;