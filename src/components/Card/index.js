import CardStyles from './Card.module.scss'



function Index(props){
    const onClickButton = () =>{
        alert(props.title)
    }
    return (
        <div className={CardStyles.card}>
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img height="112px" width="133px" src={props.imageURL} alt="sneakers1"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between mt-15 align-center">
                <div className="price flex-column">
                    <p>Цена</p>
                    <b>{props.price} руб.</b>
                </div>
                <button onClick={() =>onClickButton()}>
                    <img src="/img/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    );
}
export default Index;