import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import apiKey from '../config';
import axios from 'axios';
import Loading from './Loading';
import NoResults from './NoResults';
import Typography from '@material-ui/core/Typography';
import Image from './Image';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';
// material UI refactor
import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

function Transition(props) {
  return <Slide direction='down' {...props} />;
}

class Images extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    showDialog: false,
    dialogImage: {
      link: '',
      title: '',
      index: null
    }
  };

  componentDidMount() {
    this.fetchImages(this.props.searchQuery);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchQuery !== nextProps.searchQuery) {
      this.fetchImages(nextProps.searchQuery);
    }
  }

  showDialogHandler = (link, title, index) => {
    console.log('clicked');
    const updatedDialogImage = { ...this.state.dialogImage };
    updatedDialogImage.link = link;
    updatedDialogImage.title = title;
    updatedDialogImage.index = index;
    this.setState({ showDialog: true, dialogImage: updatedDialogImage });
  };

  hideDialogHandler = () => {
    const updatedDialogImage = { ...this.state.dialogImage };
    updatedDialogImage.link = '';
    updatedDialogImage.title = '';
    updatedDialogImage.index = null;
    this.setState({ showDialog: false, dialogImage: updatedDialogImage });
  };

  createImageLink = (farm, server, id, secret) =>
    `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

  pageImagesHandler = (currentIndex, direction) => {
    let newDialogImageIndex;
    if (direction === 'prev') {
      newDialogImageIndex = currentIndex - 1;
    } else if (direction === 'next') {
      newDialogImageIndex = currentIndex + 1;
    }
    const image = this.state.images[newDialogImageIndex];
    this.setState({
      dialogImage: {
        index: newDialogImageIndex,
        title: image.title,
        link: this.createImageLink(
          image.farm,
          image.server,
          image.id,
          image.secret
        )
      }
    });
  };

  makeRandomCol = () => Math.floor(Math.random() * 2) + 1;

  fetchImages = query => {
    this.setState({ loading: true });
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${24}&format=json&nojsoncallback=1`;
    axios
      .get(url)
      .then(res => {
        // add a col property to each image. a col span of 2 should never come twice in a row
        const images = res.data.photos.photo;
        for (let i = 0; i < images.length; i++) {
          if (i === 0) {
            images[i].col = this.makeRandomCol();
          } else if (images[i - 1].col === 2) {
            images[i].col = 1;
          } else {
            images[i].col = this.makeRandomCol();
          }
        }

        this.setState({
          images,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: {
            message: 'Experiencing network trouble, please try again later.'
          },
          loading: false
        });
      });
  };

  render() {
    const { searchQuery, classes } = this.props;
    const { images, loading, error, showDialog, dialogImage } = this.state;

    if (loading) {
      return <Loading />;
    } else if (images.length === 0) {
      return <NoResults />;
    } else if (error) {
      return <ErrorMessage error={error} />;
    } else {
      return (
        <div className='photo-container'>
          <h1
            style={{
              fontSize: '2em',
              margin: '52px 0 40px',
              textTransform: 'capitalize'
            }}
          >
            {searchQuery}
          </h1>
          <div className={classes.root}>
            <GridList cellHeight={180} cols={3} className={classes.gridList}>
              {images.map((image, i) => (
                <Image
                  key={image.id}
                  owner={image.owner}
                  imgLink={this.createImageLink(
                    image.farm,
                    image.server,
                    image.id,
                    image.secret
                  )}
                  imgTitle={image.title}
                  colSpan={image.col}
                  index={i}
                  showDialogHandler={this.showDialogHandler}
                />
              ))}
            </GridList>
          </div>

          <Dialog
            TransitionComponent={Transition}
            open={showDialog}
            onBackdropClick={this.hideDialogHandler}
          >
            <DialogTitle>{dialogImage.title}</DialogTitle>
            <DialogContent>
              <img src={dialogImage.link} alt={dialogImage.title} />
              <Pagination
                imageIndex={dialogImage.index}
                pageImages={this.pageImagesHandler}
                numResults={images.length}
              />
            </DialogContent>
          </Dialog>
        </div>
      );
    }
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    maxWidth: '1200px'
  }
});

Images.propTypes = {
  searchQuery: PropTypes.string.isRequired
};

export default withStyles(styles)(Images);

// <GridListTile key={image.id} cols={image.col}>
//   <img
//     src={`https://farm${image.farm}.staticflickr.com/${
//       image.server
//     }/${image.id}_${image.secret}.jpg`}
//     alt={image.title}
//   />
//   <GridListTileBar
//     title={image.title}
//     subtitle={<span>by: {image.owner} </span>}
//     actionIcon={
//       <IconButton
//         className={classes.icon}
//         onClick={this.showDialogHandler}
//       >
//         <InfoIcon />
//       </IconButton>
//     }
//   />
// </GridListTile>
