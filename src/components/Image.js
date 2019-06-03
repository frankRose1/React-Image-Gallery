import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  img: {
    cursor: 'pointer'
  }
}));

const Image = ({
  imgLink,
  imgTitle,
  showDialogHandler,
  colSpan,
  owner,
  index
}) => {
  const classes = useStyles();

  return (
    <GridListTile cols={colSpan}>
      <img
        className={classes.img}
        src={imgLink}
        alt={imgTitle}
        onClick={() => showDialogHandler(imgLink, imgTitle, index)}
      />
      <GridListTileBar
        title={imgTitle}
        subtitle={<span>by: {owner} </span>}
        actionIcon={
          <IconButton
            className={classes.icon}
            onClick={() => showDialogHandler(imgLink, imgTitle, index)}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

Image.propTypes = {
  imgLink: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired,
  showDialogHandler: PropTypes.func.isRequired,
  colSpan: PropTypes.number.isRequired,
  owner: PropTypes.string
};

export default Image;
