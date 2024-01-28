import "./index.css"
import livingroom from "../../assets/images/livingroom.png"
import bedroom from "../../assets/images/bedroom.png"
import homeoffice from "../../assets/images/homeoffice.png"
import diningroom from "../../assets/images/diningroom.png"

export const Shopbyroom = () => {
    return (
        <>
            <section className="shopbyroom">
                <div className="container">
                    <div className="shopbyroom-inner">
                        <h2 className="shopbyroom-title">
                            Shop by Room
                        </h2>
                        <div className="images">
                            <div className="img-1">
                                <img src={livingroom} alt="livingroom" className="livingroom" width={248} height={257}/>
                            </div>
                            <div className="img-2">
                                <img src={bedroom} alt="bedroom" className="bedroom" width={248} height={257}/>
                            </div>
                            <div className="img-3">
                                <img src={homeoffice} alt="homeoffice" className="homeoffice" width={248} height={257}/>
                            </div>
                            <div className="img-4">
                                <img src={diningroom} alt="dining" className="diningroom" width={248} height={257}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
