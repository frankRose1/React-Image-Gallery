import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import axios from 'axios';
import apiKey from './config';
// components
import Layout from './components/Layout/Layout';
import Gallery from './components/UI/Gallery/Gallery';
import SearchForm from './components/UI/SearchForm';
import FileNotFound from './components/UI/FileNotFound';
import Modal from './components/UI/Modal/Modal';
import ModalImage from './components/UI/ModalImage/ModalImage';

class App extends Component {

  state = {
    images: [], //holds the response from the flickr API
    results: '',
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
          results: genre,
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

  componentDidMount(){
    this.getImages();
  };

  render() {
    return (
      <div className="container">
        <Modal show={this.state.showModal} hideModalHandler={this.hideModalHandler}>
          <ModalImage imageDesc={this.state.modalImageInfo.imageDesc}
                      imageLink={this.state.modalImageInfo.imageLink}/>
        </Modal>
        <Layout>
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/gallery" />}/>
            <Route path="/gallery" render={ () => <Gallery images={this.state.images} 
                                                        results={this.state.results}
                                                        isLoading={this.state.isLoading} 
                                                        showModalHandler={this.showModalHandler} 
                                                        getImagesHandler={this.getImages} />}/>
            <Route path="/search" render={ () => <SearchForm images={this.state.images} 
                                                            results={this.state.results}
                                                            isLoading={this.state.isLoading} 
                                                            showModalHandler={this.showModalHandler} 
                                                            getImagesHandler={this.getImages}/> }/>
            <Route component={FileNotFound} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
