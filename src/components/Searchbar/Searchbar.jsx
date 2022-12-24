import React, { Component } from 'react';
import { Head, Form, Button, Search, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  inputChange = evt => {
    const { value } = evt.target;
    this.setState({ query: value });
  };
  render() {
    return (
      <Head>
        <Form>
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
