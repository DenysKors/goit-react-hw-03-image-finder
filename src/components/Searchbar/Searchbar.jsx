import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Head, Form, Button, Search, Input } from './Searchbar.styled';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  inputChange = evt => {
    const { value } = evt.target;
    this.setState({ query: value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      return toast.info('Enter request to search');
    }
    this.props.onSubmit(this.state.query);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <Head>
        <Form onSubmit={this.onFormSubmit}>
          <Button type="submit">
            <Search>Search</Search>
          </Button>

          <Input
            type="text"
            autocomplete="off"
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.inputChange}
          />
        </Form>
      </Head>
    );
  }
}