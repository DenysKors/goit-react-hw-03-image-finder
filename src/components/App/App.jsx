import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from 'react-loader-spinner';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadButton } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Box } from './App.styled';

const KEY = '31271672-bfb0d2ac7c61ea0216be79fb4';

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
        const responceQuery = await fetch(
          `https://pixabay.com/api/?key=${KEY}&q=${this.state.query}&page=1&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`
        );
        const data = await responceQuery.json();
        this.setState({ responseData: data.hits });
      } catch (error) {
        toast.warn('Something weird happend. Please try your request again');
      } finally {
        this.setState({ loading: false });
      }
    } else if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      try {
        const responceQuery = await fetch(
          `https://pixabay.com/api/?key=${KEY}&q=${this.state.query}&page=1&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`
        );
        const data = await responceQuery.json();
        this.setState(prevState => ({
          responseData: [...prevState.responseData, ...data.hits],
        }));
        console.log(data);
      } catch (error) {
        toast.warn('Something weird happend. Please try your request again');
      } finally {
        this.setState({ loading: false });
      }
    }
    console.log(this.state.responseData);
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

  getImageUrl = (url, tags) => {
    this.setState({ url, tags });
    this.openModal();
    console.log(url);
    console.log(tags);
  };

  render() {
    const { responseData, loading, isModalOpen, url, tags } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.searchQuery} />
        {loading && <InfinitySpin />}
        {responseData.length > 0 && (
          <ImageGallery
            responseData={responseData}
            getImageData={this.getImageUrl}
          />
        )}
        {responseData.length > 0 && <LoadButton onBtnClick={this.handleLoad} />}
        {/* <button onClick={this.openModal}>modal</button> */}
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
