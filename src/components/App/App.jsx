import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
  };

  searchQuery = query => {
    console.log(query);
    const normalizedQuery = query.toLowerCase().trim();
    this.setState({ query: normalizedQuery });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />
        <ToastContainer position="top-left" theme="dark" autoClose={3000} />
      </>
    );
  }
}
