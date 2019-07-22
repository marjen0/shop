import React from 'react';
import banner from '../../assets/images/banner.jpg';
import Category from '../../components/UI/Category/Category';

class Home extends React.Component {
    render() { 
        
        return (
            <React.Fragment>
                <img style={{width:'100%'}} src={banner} alt='banner'/>
                <Category>
                    populiariausios prekės
                </Category>
            </React.Fragment>
            
        );
    }
}

export default Home;