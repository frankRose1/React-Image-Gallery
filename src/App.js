import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
// components
import Layout from './components/Layout/Layout';
import Modal from './components/UI/Modal/Modal';
import ModalImage from './components/UI/ModalImage/ModalImage';
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';
import Gallery from './components/UI/Gallery/Gallery';
import ErrorBoundary from './hoc/ErrorBoundary';

class App extends Component {

  state = {
    images: [], //holds the response from the flickr API
    isLoading: false,
    showModal: false,
    modalImageInfo: {
      imageLink: '',
      imageDesc: ''
    }
  }

  getImages = (genre = 'astronomy') => {
    this.setState({isLoading: true});
    const limit = 24;
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${genre}&per_page=${limit}&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          images: res.data.photos.photo,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  }

  //when an image is clicked show the image in a modal
  showModalHandler = (imgLink, imgDesc) => {
    const updatedImageInfo = {
      ...this.state.modalImageInfo,
    }
    updatedImageInfo.imageDesc = imgDesc;
    updatedImageInfo.imageLink = imgLink;
    this.setState({showModal: true, modalImageInfo: updatedImageInfo});
  }

  //when the overlay is clicked, hide the modal and overlay
  hideModalHandler = () => {
    this.setState({showModal: false});
  }

  // componentDidMount(){
  //   this.getImages();
  // };

  render() {
    return (
      <div className="container">
        <Modal show={this.state.showModal} hideModalHandler={this.hideModalHandler}>
          <ModalImage imageDesc={this.state.modalImageInfo.imageDesc}
                      imageLink={this.state.modalImageInfo.imageLink}/>
        </Modal>
        <Header />
        {/* make nested routes inside of the gallery component and a nested nav bar*/}
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Home}/>
        <Route path="/gallery" render={ () => <Gallery 
                                                images={this.state.images} 
                                                isLoading={this.state.isLoading} 
                                                showModalHandler={this.showModalHandler} 
                                                getImagesHandler={this.getImages}/>}/>
        { /* <Layout 
            getImages={this.getImages}
            isLoading={this.state.isLoading}
            images={this.state.images}
        showModalHandler={this.showModalHandler}/> */}

      </div>
    );
  }
}

export default App;
