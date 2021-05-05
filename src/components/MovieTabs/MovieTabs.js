import React, {Fragment} from 'react';
import {Paper, Tabs, Tab, makeStyles} from "@material-ui/core";
import {Route, Link} from "react-router-dom";


const MovieTabs = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,

    }
  }));

  const classes = useStyles();

  const tabItems = [
    {
      label: 'Trending',
      value: '/trending',
      path: '/trending'
    },
    {
      label: 'Popular',
      value: '/',
      path: '/'
    },
    {
      label: 'Search',
      value: '/search',
      path: '/search'
    }
  ];

  const noCorrespondingTabFor = (path) => {
    return !tabItems.filter(tab => tab.path === path).length > 0;
  };

  const setValue = (path) => {
    if (noCorrespondingTabFor(path)) return false;
    return path
  };

  return (
    <Paper square className={classes.root}>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs
                value={setValue(location.pathname)}
                indicatorColor="primary"
                textColor="primary"
                aria-label="tabs"
                centered
                style={{ textDecoration: 'none' }}
              >
                {tabItems.map(tab => <Tab style={{ textDecoration: 'none' }} label={tab.label} value={tab.value} component={Link} to={tab.path} />)}
                />
              </Tabs>
            </Fragment>
          )}
        />
      </Paper>
  );
};

export default MovieTabs;