import React from 'react';

class Items extends React.Component {
    render() {
        const category = this.props.match.params.category;
        const displayCategory = category.charAt(0).toUpperCase()+category.slice(1).replace('-', ' ');
        return(
            <h1>
                {displayCategory}
            </h1>
        );
    }
}

export default Items;