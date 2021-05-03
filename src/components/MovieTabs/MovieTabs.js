import React, {Fragment} from 'react';
import {Paper, Tabs, Tab, makeStyles} from "@material-ui/core";
import {Route, Link} from "react-router-dom";


const MovieTabs = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <Paper square className={classes.root}>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs
                value={location.pathname}
                indicatorColor="primary"
                textColor="primary"
                aria-label="tabs"
                centered
              >
                <Tab label="Trending" value="/trending" component={Link} to="/trending" />
                <Tab label="Popular" value="/" component={Link} to="/" />
                <Tab value="/search" label="Search" component={Link} to="/search" />
                />
              </Tabs>
            </Fragment>
          )}
        />
      </Paper>
  );
};

export default MovieTabs;