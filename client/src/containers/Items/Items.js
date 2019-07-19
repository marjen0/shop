import React from 'react';
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';

class Items extends React.Component {
    replaceLetter = (word) => {
        const lith = ['ą','č','ę','ė','į','š','ų','ū'];
        const repl = ['a','c','e','e','i','s','u','u'];
        const wordArr = [...word];
        let newWord = word;
        wordArr.forEach((letter) => {
            lith.find(x => {
                if (x === letter) {
                    let indexInLith = lith.indexOf(x);
                    newWord = newWord.replace(letter, repl[indexInLith]);
                }
                return null;
            });       
        });
        return newWord;
    }
    componentDidMount() {
        const category = this.replaceLetter(this.props.match.params.category);
        this.props.fetchItems(category);
    }
    render() {
        const category = this.props.match.params.category;
        const displayCategory = category.charAt(0).toUpperCase()+category.slice(1).replace('-', ' ');
        return(
            <React.Fragment>
                <h1>
                    {displayCategory}
                </h1>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item._id}>{item.title}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        items: state.items.items
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchItems: (category) => dispatch(actions.fetchItems(category))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Items);