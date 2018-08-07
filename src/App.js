import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Gallery from './components/UI/Gallery/Gallery';
import axios from 'axios';
import apiKey from './config';

class App extends Component {
  /*
    api format https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=KEY&tags=hiking&per_page=24&format=json&nojsoncallback=1
  */
  state = {
    imageGenres: ['Space', 'Hiking', 'Dogs'],
    images: [], //holds the response from the flickr API
    loading: false
  }

  componentDidMount(){
    const limit = 24;
    const tag = 'dogs';

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=${limit}&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          images: res.data.photos.photo
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <Layout imageGenres={this.state.imageGenres}>
            <Gallery images={this.state.images}/>
        </Layout>
      </div>
    );
  }
}

export default App;
