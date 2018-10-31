import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKey from '../config';
import axios from 'axios';
import Loading from './Loading';
import NoResults from './NoResults';
import Modal from './Modal';
import Image from './Image';
import ErrorMessage from './ErrorMessage';
const limit = 24; // number of results from flickr


class Images extends Component {

  state = {
    images: [],
    loading: false,
    error: null,
    showModal: false,
    modalImage: {
      link: "",
      title: ""
    }
  }

  componentDidMount(){
    this.fetchImages(this.props.searchQuery)
  }

  componentWillReceiveProps(nextProps){
    if (this.props.searchQuery !== nextProps.searchQuery) {
      this.fetchImages(nextProps.searchQuery);
    }
  }

  hideModalHandler = () => {
    const updatedModalImg = {...this.state.modalImage};
    updatedModalImg.link = '';
    updatedModalImg.title = '';
    this.setState({showModal: false, modalImage: updatedModalImg});
  };

  showModalHandler = (link, title) => {
    const updatedModalImg = {...this.state.modalImage};
    updatedModalImg.link = link;
    updatedModalImg.title = title;
    this.setState({showModal: true, modalImage: updatedModalImg});
  };

  fetchImages = query => {
    this.setState({loading: true});
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${limit}&format=json&nojsoncallback=1`;
    axios.get(url)
      .then(res => {
        this.setState({images: res.data.photos.photo, loading: false, error: null});
      })
      .catch(err => {
        this.setState({error: {message: 'Experiencing network trouble, please try again later.'}, loading: false});
      });
  };

  render() {
    const {searchQuery} = this.props;
    const {images, loading, error, showModal, modalImage} = this.state;

    if(loading) {
      return <Loading />
    } else if (images.length === 0) {
      return <NoResults />
    } else if (error) {
      return <ErrorMessage error={error}/>
    } else {
      return (
        <div className="photo-container">
          <Modal
            imgLink={modalImage.link}
            imgTitle={modalImage.title}
            hideModalHandler={this.hideModalHandler}
            show={showModal}/>

          <h2>{searchQuery}</h2>
          <ul className="photo-gallery">
            {images.map( img => (
              <Image
                key={img.id}
                imgTitle={img.title}
                imgLink={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                showModalHandler={this.showModalHandler}/>
            ))}
          </ul>
      </div>
      )
    }
  }
}

Images.propTypes = {
  searchQuery: PropTypes.string.isRequired
};

export default Images;