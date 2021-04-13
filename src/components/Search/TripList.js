import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";

class TripList extends Component {

    render() {
        const useStyles = makeStyles((theme) => ({
            root: {
                width: '80%',
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
                padding: '20px',
            },
        }));
        const classes = useStyles;

        return (
            <div className="trip-list">
                <Grid item xs={12}>
                <Typography variant="h5">My trips</Typography>
                <Divider />
                <div className={classes.root}>
                    <List component="nav" aria-label="triplist">
                        <ListItem button>
                            <ListItemText primary="Trip1" secondary="1 day"/>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button divider>
                            <ListItemText primary="Trip2" secondary="2 days"/>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button>
                            <ListItemText primary="Trip3" secondary="3 days"/>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button>
                            <ListItemText primary="Trip4" secondary="4 days"/>
                        </ListItem>
                    </List>
                </div>
                </Grid>
            </div>
        );
    }
}

export default TripList;