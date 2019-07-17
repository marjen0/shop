import React from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import Container from '../Container/Container';


class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            showSideMenu:true
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState({showSideMenu:!this.state.showSideMenu})
    }

    componentDidMount() {
        axios.get('/api/categories')
        .then(res => {
            this.setState({
                categories: res.data.categories
            });
        })
        .catch(err => {console.log(err)});
    }
    
    render() {
        return (
            <React.Fragment>
                <header>
                    <Header/>
                </header>
                <Container>
                    <nav>
                        <Menu 
                            categories={this.state.categories}
                            toggleMenu={this.toggleMenu}
                            show={this.state.showSideMenu}
                        />
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