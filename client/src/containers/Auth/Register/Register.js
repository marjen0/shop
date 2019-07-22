import React from 'react';
import classes from './Register.module.css';
import Input from '../../../components/UI/Input/Input';

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
        }
    }
    inputChangeHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
            }
        };
        console.log(controlName.value)
        this.setState({controls:updatedControls})
    }
    submitHandler = (event) => {
        event.preventDefault();
        const { email, password } = this.state.controls;
        
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
        return (
            
            <div className={classes.Register}>
                {console.log(formElementsArray)}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <button>Registruotis</button>
                </form>
            </div>
        );
    }
}

export default Register;