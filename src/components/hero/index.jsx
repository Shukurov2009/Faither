import "./index.css"
import heroimg from "../../assets/images/heroimg.png"

export const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="texts">
                            <h1 className="hero-title">
                                Curated and Convenient
                            </h1>
                            <p className="hero-text">
                                We've built our offerings on the principle that everyone deserves high-quality design without the high cost.
                                We offer elevated rental inventory, to transform your space.
                                Reuse and recycle - we make the decision as light as a “feather”
                            </p>
                            <button className="hero-btn">
                                Get Started
                            </button>
                        </div>
                        <div className="image">
                            <img src={heroimg} alt="heroimg" width={628} height={611}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
