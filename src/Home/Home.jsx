import './Home.css'
const Home = () => {
    return (
        <div className="component">

        <div className="component_image"></div>

        <div className="component_data">
            <h1 className="title">Get <span className="accent">insights</span> that help your business grow.</h1>
            <p className="info">Discover the benefits of data analystics make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div className="data">
                <div className="item">
                    <p className="stats item_info">10K+</p>
                    <p className="item_info">COMPANIES</p>
                </div>
                <div className="item">
                    <p className="stats item_info">314</p>
                    <p className="item_info">TEMPLATES</p>
                </div>
                <div className="item">
                    <p className="stats item_info">12M+</p>
                    <p className="item_info">QUERIES</p>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Home
