import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { LoadButton } from 'components/Button/Button';
import { InfinitySpin } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';

const KEY = '31271672-bfb0d2ac7c61ea0216be79fb4';

export class ImageGallery extends Component {
  state = {
    responseData: [],
    page: 1,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ page: 1, loading: true });
      try {
        const responceQuery = await fetch(
          `https://pixabay.com/api/?key=${KEY}&q=${this.props.query}&page=1&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`
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
          `https://pixabay.com/api/?key=${KEY}&q=${this.props.query}&page=1&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`
        );
        const data = await responceQuery.json();
        this.setState({ responseData: data.hits });
      } catch (error) {
        toast.warn('Something weird happend. Please try your request again');
      } finally {
        this.setState({ loading: false });
      }
    }
    console.log(this.state.responseData);
  }

  handleLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { responseData, loading } = this.state;
    return (
      <>
        {loading && <InfinitySpin />}
        {responseData.length > 0 && (
          <Gallery>
            <ImageGalleryItem responseData={responseData} />
          </Gallery>
        )}
        {responseData.length > 0 && <LoadButton onBtnClick={this.handleLoad} />}
      </>
    );
  }
}
