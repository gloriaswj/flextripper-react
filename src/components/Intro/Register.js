import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import {makeStyles, withStyles} from '@material-ui/core/styles';

class Register extends Component {
    render() {
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
                    <form className={classes.root} noValidate autoComplete="off">
                        <Grid container alignItems="center" justify="center" direction="column">
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First name"
                                    variant="outlined"
                                />
                                </Paper>
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Last name"
                                    variant="outlined"
                                />
                            </Paper>
                        </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        variant="outlined"
                                    />
                                </Paper>
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                />
                                </Paper>
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <StyledButton variant="contained">
                                        Sign up now!
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

export default Register;