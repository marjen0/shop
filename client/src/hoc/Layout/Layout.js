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
            showModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
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
    toggleModal() {
        this.setState((prevState) => {
            return {showModal: !prevState.showModal}
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <header>
                    <Header 
                        showModal={this.state.showModal}
                        toggleModal={this.toggleModal}
                    />
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