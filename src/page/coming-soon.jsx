
import { hover } from "@testing-library/user-event/dist/hover";
import { Link } from "react-router-dom";

const title = "Coming Soon!";
const btnText = "Go Back To Home";

const ComingSoonPage = () => {
    return (
        <div className="four-zero-section section-bg" style={{backgroundColor: 'white'}} >
            <div className="container">
                <div className="row align-items-center" style={{ textAlign : 'center', alignContent : 'center' }}>
                    <div style={{height : '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div className="four-zero-content" style={{  marginBottom : '100px' }}>
                            <Link to="/">
                                <img src="assets/fly-assets/mainlogo.png" style={{ width: '300px', height: '90px' , display : 'flex', justifyContent : 'center', alignItems : 'center' }} alt="Main-Logo" />
                            </Link>
                            <h2 className="title">{title}</h2>
                            <p>Stay Tuned!</p>
                            <Link to="/" className="lab-btn" style={{ fontSize : '18px', padding : '10px', borderRadius : '10px' }}><span>{btnText} <i className="icofont-external-link"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComingSoonPage;