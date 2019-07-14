import React from 'react';

import Header from '../../components/Header/Header';

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Header/>
                </header>
                <main>
                    {this.props.children}
                </main>       
            </React.Fragment>
        );
    }
}

export default Layout;