import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Puff } from 'react-loader-spinner';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'components/Api/imageApi';
import { LoadButton } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Box } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: '',
    responseData: [],
    page: 1,
    loading: false,
    isModalOpen: false,
    url: '',
    tags: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ responseData: [], page: 1, loading: true });
      try {
        const data = await fetchImages(this.state.query, this.state.page);
        this.setState({ responseData: data.hits });
      } catch (error) {
        toast.warn('Something weird happend. Please try your request again');
      } finally {
        this.setState({ loading: false });
      }
    } else if (
      prevState.page !== this.state.page &&
      prevState.query === this.state.query
    ) {
      this.setState({ loading: true });
      try {
        const data = await fetchImages(this.state.query, this.state.page);
        this.setState(prevState => ({
          responseData: [...prevState.responseData, ...data.hits],
        }));
      } catch (error) {
        toast.warn('Something weird happend. Please try your request again');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  searchQuery = query => {
    const normalizedQuery = query.toLowerCase().trim();
    this.setState({ query: normalizedQuery });
  };

  handleLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  getImageData = (url, tags) => {
    this.setState({ url, tags });
    this.openModal();
  };

  render() {
    const { responseData, loading, isModalOpen, url, tags } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.searchQuery} />
        {loading && (
          <Puff
            wrapperStyle={{ display: 'inline-block', textAlign: 'center' }}
          />
        )}
        {responseData.length > 0 && (
          <ImageGallery
            responseData={responseData}
            getImageData={this.getImageData}
          />
        )}
        {responseData.length > 0 && <LoadButton onBtnClick={this.handleLoad} />}
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            {<img src={url} alt={tags} />}
          </Modal>
        )}
        <ToastContainer position="top-left" theme="dark" autoClose={3000} />
      </Box>
    );
  }
}
