import React from 'react';
import classes from './Register.module.css';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import { register } from '../../../redux/actions/auth';
import { clearErrors } from '../../../redux/actions/error';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'El. pašto adresas'
                },
                value:'',
                label: "Elektroninio pašto adresas"
            },
            password1: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Slaptažodis'
                },
                value: '',
                label: 'Slaptažodis'
            },
            password2: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Pakartokite Slaptažodį'
                },
                value: '',
                label: 'Slaptažodis'
            }
        },
        message: null
    }
    componentDidUpdate(prevProps){
        const error = this.props.error;
        if (error !== prevProps.error) {
            if (error.id === 'REGISTER_FAIL') {
                this.setState({message: error.message.message})
            } else {
                this.setState({message:null})
            }
        }
    }
    inputChangeHandler = (event, controlName) => {
        this.props.clearErrors();
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
            }
        };
        this.setState({controls:updatedControls})
    }
    submitHandler = (event) => {
        event.preventDefault();
        const { email, password1, password2 } = this.state.controls;
        //Create user object
        const user = {
            email: email.value,
            password1: password1.value,
            password2: password2.value
        }
        console.log(user)
        this.props.register(user);
    }
    render(){
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                label={formElement.config.label}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => this.inputChangeHandler(event,formElement.id)}
            />
        ));
        let error = this.state.message? <p>{this.state.message}</p>: null
        let authRedirect = this.props.isAuthenticated? <Redirect to='/'/> : null;
        return (
            
            <div className={classes.Register}>
                {authRedirect}
                {error}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <button>Registruotis</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        error: state.error
    }
}
export default connect(mapStateToProps,{register,clearErrors})(Register);