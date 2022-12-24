import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {
    id: '',
    webformatURL: '',
    largeImageURL: '',
  };

  render() {
    return (
      <>
        <Searchbar />
      </>
    );
  }
}
