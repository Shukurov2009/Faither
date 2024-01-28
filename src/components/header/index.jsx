import "./index.css"
import logo from "../../assets/images/logo.png"
import basket from "../../assets/images/basket.png"

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="bgcolor">
                    <div className="container">
                        <div className="header-inner">
                            <nav className="header-nav-1">
                                <ul className="header-nav-1-list">
                                    <li className="header-nav-1-item-1">
                                        <a href="#" className="header-nav-1-linlk-1">
                                            Furniture
                                        </a>
                                    </li>
                                    <li className="header-nav-1-item-1">
                                        <a href="#" className="header-nav-1-linlk-2">
                                            Why Feather
                                        </a>
                                    </li>
                                    <li className="header-nav-1-item-1">
                                        <a href="#" className="header-nav-1-linlk-3">
                                            Feather for Business
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <ul className="logo-list">
                                <li className="logo-item">
                                    <a href="#" className="logo-link">
                                        <img src={logo} alt="logo" width={115} height={26} />
                                    </a>
                                </li>
                            </ul>
                            <div className="header-navigation-2">
                                <nav className="header-nav-2">
                                    <ul className="header-nav-2-list">
                                        <li className="header-nav-2-item-1">
                                            <a href="#" className="header-nav-2-link-1">
                                                Check if We Deliver
                                            </a>
                                        </li>
                                        <li className="header-nav-2-item-2">
                                            <a href="#" className="header-nav-2-link-2">
                                                Search
                                            </a>
                                        </li>
                                        <li className="header-nav-2-item-3">
                                            <a href="#" className="header-nav-2-link-3">
                                                Account
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <a href="#" className="basket-link">
                                    <img className="basket" src={basket} alt="basket" width={26} height={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
