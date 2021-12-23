import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization:
            'Client-ID RwaTqozcmx6QZlEUDEXqvEOi4BPXYoHJBpP9-CvZBIo',
        },
      })
      .then((response) => {
        console.log(response.data.results);
      });
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar runOnSearch={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
