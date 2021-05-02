import React, {Fragment} from 'react';
import {Paper, Tabs, Tab} from "@material-ui/core";
import {Route, Link} from "react-router-dom";


const MovieTabs = () => {

  return (
    <Paper square>
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
                <Tab label="Popular" value="/" component={Link} to="/" />
                <Tab label="Trending" value="/trending" component={Link} to="/trending" />
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