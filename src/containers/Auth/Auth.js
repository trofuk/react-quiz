import React, {Component} from 'react'
import classes from './Auth.css'
import Button from '../../components/Ui/Button/Button'
import Input from '../../components/Ui/Input/Input'

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
              value: '',
              type: 'email',
              label: 'Email',
              errorMessage: 'Enter the correct email',
              valid: false,
              touched: false,
              validation: {
                  required: true,
                  email: true
              }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter the correct password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value)
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                   key={controlName + index}
                   type={control.type}
                   value={control.value}
                   valid={control.valid}
                   touched={control.touched}
                   label={control.label}
                   shouldValidate={!!control.validation}
                   errorMessage={control.errorMessage}
                   onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        { this.renderInputs() }

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Log In
                        </Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
       )
   }
}
