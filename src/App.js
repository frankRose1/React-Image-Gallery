import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Gallery from './components/UI/Gallery';
import apiKey from './config';

class App extends Component {

  state = {
    imageGenres: ['Space', 'Hiking', 'Dogs']
  }

  render() {
    return (
      <div className="container">
        <Layout imageGenres={this.state.imageGenres}>
          {/* gallery component will go here
            layout will import the header which will contain the form and nav bar*/}
            <Gallery />
        </Layout>
      </div>
    );
  }
}

export default App;
