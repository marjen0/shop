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
            itemsCount: null
        }
    }
    getCategories = () => {
        return axios.get('/api/categories');
    }
    getItems = () => {
        return axios.get('/api/items');
    }
    componentWillMount() {
        axios.all([this.getCategories(),this.getItems()])
        .then(axios.spread((categories,items) => {
            this.setState({
                categories: categories.data.categories,
                itemsCount: items.data.items.length
            });
        }));
    }
    
    render() {
        return (
            <React.Fragment>
                <header>
                    <Header itemsCount={this.state.itemsCount}/>
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