import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import Layout from './components/Layout/Layout';
import Gallery from './components/UI/Gallery/Gallery';
import Modal from './components/UI/Modal/Modal';
import ModalImage from './components/UI/ModalImage/ModalImage';
import NotFound from './components/UI/NotFound'; //404 file not found

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

  componentDidMount(){
    this.getImages();
  };

  render() {
    return (
      <div className="container">
            <Layout getImages={this.getImages}
                    isLoading={this.state.isLoading}>
              <Switch>
                {/*Redirect to the first link when the home route is visited*/}
                <Route exact path="/" render={ () => <Redirect to={'/space'}/>} />
                <Route path="/astronomy" render={ () => <Gallery images={this.state.images} showModalHandler={this.showModalHandler} />} />
                <Route path="/hiking" render={ () => <Gallery images={this.state.images} />} />
                <Route path="/puppies" render={ () => <Gallery images={this.state.images} />} />
                <Route path="/:searchQuery" render={ () => <Gallery images={this.state.images} />} />
                <Route component={NotFound} />
              </Switch> 
            </Layout>
            <Modal show={this.state.showModal} hideModalHandler={this.hideModalHandler}>
              <ModalImage imageDesc={this.state.modalImageInfo.imageDesc}
                          imageLink={this.state.modalImageInfo.imageLink}/>
            </Modal>
      </div>
    );
  }
}

export default App;
