import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Images from './Images';

class Search extends Component {
  state = {
    search: ''
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newPath = `/search/${this.state.search}`;
    this.props.history.push(newPath);
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    const {
      match: { path },
      classes
    } = this.props;
    return (
      <>
        <form className={classes.root} onSubmit={this.handleSubmit}>
          <Button type='submit' className={classes.searchIcon}>
            <SearchIcon />
          </Button>
          <InputBase
            placeholder='Search images!'
            type='search'
            required
            autoFocus={true}
            onChange={this.handleChange}
            value={search}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </form>
        <Route
          path={`${path}/:query`}
          render={({ match }) => <Images searchQuery={match.params.query} />}
        />
      </>
    );
  }
}

const styles = theme => ({
  root: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    margin: '0 auto',
    width: '60%',
    backgroundColor: fade(theme.palette.primary.dark, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.dark, 0.25)
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.light
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    paddingLeft: '15px'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width')
  }
});

export default withStyles(styles)(Search);
