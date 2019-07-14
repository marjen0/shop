import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import Container from '../Container/Container';


class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Header/>
                </header>
                <Container>
                    <nav>
                        <Menu/>
                    </nav>
                    <main>
                        {this.props.children}
                    </main>
                </Container>
                <footer>
                    <Footer/>
                </footer>      
            </React.Fragment>
        );
    }
}

export default Layout;