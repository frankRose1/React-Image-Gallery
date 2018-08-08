import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import Layout from './components/Layout/Layout';
import NotFound from './components/UI/NotFound'; //404 file not found

class App extends Component {
  /*
    api format https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=KEY&tags=hiking&per_page=24&format=json&nojsoncallback=1
  */
  state = {
    images: [], //holds the response from the flickr API
    isLoading: false
  }

  getImages = (genre) => {
    const limit = 24;
    console.log(genre);
    // axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${genre}&per_page=${limit}&format=json&nojsoncallback=1`)
    //   .then(res => {
    //     this.setState({
    //       images: res.data.photos.photo
    //     });
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
          <Switch>
            <Route exact path="/" render={ () => <Layout images={this.state.images} getImages={this.getImages} />} />
            <Route component={NotFound} />
          </Switch>   
      </div>
    );
  }
}

export default App;
