import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
  };

  searchQuery = query => {
    const normalizedQuery = query.toLowerCase().trim();
    this.setState({ query: normalizedQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />
        <ImageGallery query={this.state.query} />
        <ToastContainer position="top-left" theme="dark" autoClose={3000} />
      </>
    );
  }
}
