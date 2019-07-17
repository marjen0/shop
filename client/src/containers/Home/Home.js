import React from 'react';
import banner from '../../assets/images/banner.jpg';

class Home extends React.Component {
    render() { 
        
        return (
            <div>
                <h1>populiariausios prekės</h1>
                <img style={{width:'100%'}} src={banner} alt='banner'/>
            </div>
            
        );
    }
}

export default Home;