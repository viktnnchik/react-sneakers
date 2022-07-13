function Header() {
    return (
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
    );
}
export default Header;