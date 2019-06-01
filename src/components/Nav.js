import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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

function ListItemLink(props) {
  return <ListItem button component={NavLink} {...props} />;
}

const Nav = ({ classes }) => {
  const navLinks = [
    { to: '/gallery', text: 'Gallery', Icon: ImageIcon },
    { to: '/search', text: 'Search', Icon: SearchIcon }
  ];

  return (
    <AppBar position='static'>
      <Toolbar>
        {/* Logo */}
        <div>
          <Link to='/' exact>
            <CameraIcon />
          </Link>
        </div>

        {/* Nav Links */}
        <List>
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

const styles = theme => ({});

{
  /* <nav className="main-nav">
  <ul>
    <li>
      <NavLink to="/gallery">Gallery</NavLink>
    </li>
    <li>
      <NavLink to="/search">Search</NavLink>
    </li>
  </ul>
</nav> */
}

export default withStyles(styles)(Nav);
