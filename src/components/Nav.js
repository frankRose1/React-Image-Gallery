import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/Camera';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  cameraIcon: {
    flexGrow: 1,
    display: 'flex',
    alignSelf: 'flexStart'
  },
  toolBar: {
    width: '90%'
  },
  navLinks: {
    display: 'flex'
  }
}));

function ListItemLink(props) {
  return <ListItem button component={NavLink} {...props} />;
}

const Nav = () => {
  const classes = useStyles();
  const navLinks = [
    { to: '/gallery', text: 'Gallery', Icon: ImageIcon },
    { to: '/search', text: 'Search', Icon: SearchIcon }
  ];

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolBar}>
        {/* Logo */}
        <Link className={classes.cameraIcon} to='/' exact='true'>
          <CameraIcon />
        </Link>

        {/* Nav Links */}
        <List className={classes.navLinks}>
          {navLinks.map(link => (
            <ListItemLink key={link.text} to={link.to}>
              <ListItemIcon>
                <link.Icon />
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemLink>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
