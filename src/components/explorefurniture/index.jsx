import "./index.css"
import exploreimg from "../../assets/images/heroimg.png"
import garage from "../../assets/images/garage.png"
import residential from "../../assets/images/residential.png"
import room from "../../assets/images/room.png"

export const Explore = () => {
    return (
        <>
            <section className="explore">
                <div className="container">
                    <div className="explor-inner">
                        <div className="explore-section-1">
                            <div className="explore-texts-1">
                                <h2 className="explore-title-1">
                                    Enjoy a fully furnished space in less than week
                                </h2>
                                <p className="explore-text-2">
                                    Feather furniture is available to be delivered and assembled in New York City, Los Angeles and San Francisco.
                                </p>
                                <ul className="explore-list">
                                    <li className="explore-item">
                                        <a href="#" className="explore-link-1">
                                            Explore Furniture
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <img src={exploreimg} alt="exploreimg" className="explore-img" width={616} height={411} />
                        </div>
                        <div className="explore-section-2">
                            <img src={garage} alt="garage" width={616} height={616} />
                            <div className="explore-texts-2">
                                <h2 className="explore-title-2">
                                    Garage Sale - 40% & Up
                                </h2>
                                <p className="explore-text-2">
                                    Our Garage Sale is open! Savings start at 40% on favorite retired pieces.
                                    Find dressers, sofas, decor, and more to make the year one to remember.
                                </p>
                                <p className="explore-text-3">
                                    Terms and conditions apply. View here.
                                </p>
                                <ul className="explore-list-2">
                                    <li className="explore-item-2">
                                        <a href="#" className="explore-link-2">
                                            Shop Now
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="explore-section-3">
                            <div className="explore-texts-3">
                                <h2 className="explore-title-3">
                                    Furniture for business, made simple.
                                </h2>
                                <p className="explore-text-4">
                                    Say goodbye to cost, complexity, and commitment of furniture.
                                    Feather makes it easy with affordable rental plans, white glove delivery and best-in-class account service.
                                </p>
                                <ul className="explore-list-3">
                                    <li className="explore-item-3">
                                        <a href="#" className="explore-link-3">
                                            Visit Feather For Business
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <img src={residential} alt="residential" width={616} height={411} />
                        </div>
                        <div className="explore-section-4">
                            <img src={room} alt="room" width={616} height={616} />
                            <div className="explore-texts-4">
                                <h2 className="explore-title-4">
                                    Never assemble furniture again.
                                </h2>
                                <p className="explore-text-5">
                                    We move a lot.
                                    There are countless floor plans and roommates (oh, and your evolving tastes) between here and there.
                                    With Feather, furnish your space without breaking a sweat or reaching for a screwdriver.
                                </p>
                                <ul className="explore-list-4">
                                    <li className="explore-item-4">
                                        <a href="#" className="explore-link-4">
                                            How Feather Works
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
