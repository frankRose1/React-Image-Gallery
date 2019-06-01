import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import apiKey from '../config';
import axios from 'axios';
import Loading from './Loading';
import NoResults from './NoResults';
import Modal from './Modal';
import Image from './Image';
import ErrorMessage from './ErrorMessage';
// material UI refactor
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const limit = 24; // number of results from flickr

class Images extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    showModal: false,
    modalImage: {
      link: '',
      title: ''
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

  hideModalHandler = () => {
    const updatedModalImg = { ...this.state.modalImage };
    updatedModalImg.link = '';
    updatedModalImg.title = '';
    this.setState({ showModal: false, modalImage: updatedModalImg });
  };

  showModalHandler = (link, title) => {
    const updatedModalImg = { ...this.state.modalImage };
    updatedModalImg.link = link;
    updatedModalImg.title = title;
    this.setState({ showModal: true, modalImage: updatedModalImg });
  };

  makeRandomCol = () => Math.floor(Math.random() * 2) + 1;

  fetchImages = query => {
    this.setState({ loading: true });
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${limit}&format=json&nojsoncallback=1`;
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
    const { images, loading, error, showModal, modalImage } = this.state;

    if (loading) {
      return <Loading />;
    } else if (images.length === 0) {
      return <NoResults />;
    } else if (error) {
      return <ErrorMessage error={error} />;
    } else {
      return (
        <div className='photo-container'>
          <Modal
            imgLink={modalImage.link}
            imgTitle={modalImage.title}
            hideModalHandler={this.hideModalHandler}
            show={showModal}
          />

          <h2>{searchQuery}</h2>
          <div className={classes.root}>
            <GridList cellHeight={180} cols={3} className={classes.gridList}>
              {/* TODO: maybe remove the title?? */}
              {/* <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
                <ListSubheader component='h2'>{searchQuery}</ListSubheader>
              </GridListTile> */}
              {images.map(image => (
                <GridListTile key={image.id} cols={image.col}>
                  <img
                    src={`https://farm${image.farm}.staticflickr.com/${
                      image.server
                    }/${image.id}_${image.secret}.jpg`}
                    alt={image.title}
                  />
                  <GridListTileBar
                    title={image.title}
                    subtitle={<span>by: {image.owner} </span>}
                    actionIcon={
                      <IconButton className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
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
  // gridList: {
  //   width: 500,
  //   height: 450
  // },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
});

Images.propTypes = {
  searchQuery: PropTypes.string.isRequired
};

export default withStyles(styles)(Images);

/**
 * Original Images List
 *           <ul className="photo-gallery">
            {images.map( img => (
              <Image
                key={img.id}
                imgTitle={img.title}
                imgLink={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                showModalHandler={this.showModalHandler}/>
            ))}
          </ul>
 */
