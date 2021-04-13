import React, {Component} from 'react';
import HeaderSearch from "../HeaderSearch";
import Footer from "../Footer";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from "./CurrentLocation";
import Header from "../Header"
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';

class search extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {

        const useStyles = makeStyles((theme) => ({
            margin: {
                margin: theme.spacing(1),
            },
        }));

        const mapStyles = {
            width: '50%',
            height: '50%',
        };
        const classes = useStyles;

        return (

            <div key="/">
                <HeaderSearch />
                <br/>
                <br/>
                <div>
                    <Grid container>
                        <Grid item xs={1} />
                        <Grid item xs={6}>
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search location"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <IconButton className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <Box />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <Grid container>
                        <Grid item xs={8}>
                            <CurrentLocation
                                centerAroundCurrentLocation
                                google={this.props.google}
                            >

                                {/*{this.displayMarkers()}*/}
                                <Marker
                                    onClick={this.onMarkerClick}
                                    name={'Current Location!'}
                                />
                                <InfoWindow
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}
                                    onClose={this.onClose}
                                >
                                    <div>
                                        <h4>{this.state.selectedPlace.name}</h4>
                                    </div>
                                    <button>
                                        add me to trip
                                    </button>
                                </InfoWindow>
                            </CurrentLocation>
                        </Grid>
                        <Grid item xs={4}>
                            {/*<br/>*/}
                            {/*<br/>*/}
                            {/*<Grid item xs={12}>*/}
                            {/*    <TextField*/}
                            {/*        id="outlined-multiline-static"*/}
                            {/*        label="Multiline"*/}
                            {/*        multiline*/}
                            {/*        rows={4}*/}
                            {/*        defaultValue="Default Value"*/}
                            {/*        variant="outlined"*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12}> Hello</Grid>*/}
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>


        );
    }
}

//export default search;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyANDVaqBkCJTdSyPjTlsbtQD-2CIwcI8Js'
})(search);