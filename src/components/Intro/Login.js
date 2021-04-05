import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper"

class Login extends Component {
    render() {
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
                                id="outlined-required"
                                label="Username"
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
                                    submit
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