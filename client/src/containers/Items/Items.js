import React from 'react';
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';

class Items extends React.Component {
    componentDidMount() {
        const category = this.props.match.params.category
        this.props.fetchItems(category);
    }
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
const mapStateToProps = state => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchItems: (category) => dispatch(actions.fetchItems(category))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Items);