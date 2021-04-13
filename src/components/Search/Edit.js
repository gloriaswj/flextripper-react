import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from "../Footer";
import TripList from "./TripList"
import Search from "./search";
import HeaderSearch from "../HeaderSearch";
import MapDirections from "./MapDirections";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        },
}));

const classes = useStyles;

class Edit extends Component {
    render() {

        return (
            <div className="edit">
                <HeaderSearch/>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Search />
                            <MapDirections />
                        </Grid>
                        <Grid item xs={4}>
                            <TripList/>
                        </Grid>
                    </Grid>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Edit;