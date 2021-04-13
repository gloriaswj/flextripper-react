import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import {Button, FormHelperText} from "@material-ui/core";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper"
import axios from "axios";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    renderErrorMessage(field) {
        const error = this.props.errors[field];
        if (error) return <FormHelperText>{error}</FormHelperText>;
    }

    handleInput(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleLogin(e) {
        e.preventDefault();
        const data = JSON.stringify({
            email: this.state.email,
            password: this.state.password,
        });
        axios
            .get("http://localhost:8080/user", data)
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
            height: 45,
            padding: '0 20px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
    })(Button);

        const useStyles = makeStyles((theme) => ({
            root: {
                '& .MuiTextField-root': {
                    margin: theme.spacing(3),
                    width: '50ch',
                },
            },
        }));
        const classes = useStyles;

        return (
            <div className="login">
                <Header />
                <div className="box-container">
                    <form className={classes.root} noValidate autoComplete="off">
                        <Grid container alignItems="center" justify="center" direction="column">
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <TextField
                                        required
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        onChange={this.handleInput('email')}
                                        value={this.state.email}
                                        error={!this.props.errors.email}
                                    />
                                </Paper>
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <TextField
                                        required
                                        id="password"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        onChange={this.handleInput('password')}
                                        value={this.state.password}
                                        error={!this.props.errors.password}
                                    />
                                </Paper>
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <StyledButton variant="contained"
                                                  type="submit"
                                                  user={user}>
                                        Log in
                                    </StyledButton>
                                </Paper>
                            </Grid>

                        </Grid>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;