import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import {Button, FormHelperText} from "@material-ui/core";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import axios from "axios";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            password: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    renderErrorMessage(field) {
        const error = this.props.errors[field];
        if (error) return <FormHelperText>{error}</FormHelperText>;
    }

    handleInput(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleRegisterClick(e) {
        e.preventDefault();
        const data = JSON.stringify({
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.password,
        });
        axios
            .post("http://localhost:8080/user", data)
            .then(response => this.setState({
                user: response.data,
            }))
            .catch(err => console.log(err));
    };

    render() {
        const { user } = this.props;
        const StyledButton = withStyles({
            root: {
                background: '#fe706b',
                fontSize: 20,
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 40,
                padding: '0 20px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            },
        })(Button);

        const useStyles = makeStyles((theme) => ({
            root: {
                flexGrow: 1,
                '& .MuiTextField-root': {
                    margin: theme.spacing(3),
                    width: '50ch',
                },
                textField: {
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                    width: '25ch',
                },
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }));
        const classes = useStyles;

        return (
            <div className="register">
                <Header />
                <div className="box-container">
                    <form className={classes.root} noValidate autoComplete="off"
                    onSubmit={this.handleRegisterClick}>
                        <Grid container
                              alignItems="center"
                              justify="center"
                              direction="row">
                            <TextField
                                required
                                label="First name"
                                style={{ margin: 10 }}
                                id="firstname"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleInput('firstname')}
                                value={this.state.firstname}
                                error={!this.props.errors.firstname}
                            />
                            {this.renderErrorMessage('firstname')}
                            <TextField
                                required
                                label="Last name"
                                style={{ margin: 10 }}
                                id="lastname"
                                className={classes.textField}
                                variant="outlined"
                                onChange={this.handleInput('lastname')}
                                value={this.state.lastname}
                                error={!this.props.errors.lastname}
                            />
                            {this.renderErrorMessage('lastname')}
                        </Grid>
                        <Grid container
                              alignItems="center"
                              justify="center"
                              direction="row">
                            <TextField
                                required
                                label="Email"
                                style={{ margin: 10 }}
                                id="email"
                                className={classes.textField}
                                variant="outlined"
                                onChange={this.handleInput('email')}
                                value={this.state.email}
                                error={!this.props.errors.email}
                            />
                            {this.renderErrorMessage('email')}
                            <TextField
                                required
                                style={{ margin: 10 }}
                                id="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                onChange={this.handleInput('password')}
                                value={this.state.password}
                                error={!this.props.errors.password}
                            />
                            {this.renderErrorMessage('password')}
                        </Grid>
                        <Grid container alignItems="center" justify="center" direction="row">
                            <StyledButton variant="contained"
                                          style={{ margin: 20 }}
                                          type="submit"
                                          onClick={this.handleRegisterClick}
                                          user={user}
                            >
                                Sign up now!
                            </StyledButton>
                        </Grid>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Register;