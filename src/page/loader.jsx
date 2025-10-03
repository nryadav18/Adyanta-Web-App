import React from 'react';
import Lottie from 'lottie-react';
import '../assets/css/loader.css';
// Import your Lottie JSON animation file
import loaderAnimation from '../assets/fly-assets/loader1.json'; // Adjust the path as needed

function Loader() {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection : 'column' }}>
            <Lottie className='loaderStylings' animationData={loaderAnimation} loop={true} />
            <p style={{ fontWeight : 600 }}>Thanks for Choosing us!</p>
            <p style={{ fontWeight : 600, marginBottom : '50px' }}>Adyanta doesn't take Long to Load...</p>
        </div>
    );
}

export default Loader;
