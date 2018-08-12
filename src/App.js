import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
// components
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';
import Gallery from './components/Layout/Gallery/Gallery';
import SearchForm from './components/Layout/SearchForm';
import Modal from './components/UI/Modal/Modal';
import ModalImage from './components/UI/ModalImage/ModalImage';
import FileNotFound from './components/UI/FileNotFound';

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={ () => <SearchForm getImagesHandler={this.getImages}/> }/>
          <Route path="/gallery" render={ () => <Gallery 
                                                  images={this.state.images} 
                                                  isLoading={this.state.isLoading} 
                                                  showModalHandler={this.showModalHandler} 
                                                  getImagesHandler={this.getImages}/>}/>
          <Route component={FileNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
