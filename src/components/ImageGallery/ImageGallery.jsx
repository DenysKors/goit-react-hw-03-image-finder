import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { LoadButton } from 'components/Button/Button';
import 'react-toastify/dist/ReactToastify.css';

const KEY = '31271672-bfb0d2ac7c61ea0216be79fb4';

export class ImageGallery extends Component {
  state = {
    responseData: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      try {
        const responceQuery = await fetch(
          `https://pixabay.com/api/?key=${KEY}&q=${this.props.query}&page=1&image_type=photo&orientation=horizontal&page=1&per_page=12`
        );
        const data = await responceQuery.json();
        this.setState({ responseData: data.hits });
      } catch (error) {
        toast.warn('Something weird happend. Please try your request again');
      }
    }
  }

  render() {
    const { responseData } = this.state;
    return (
      <>
        <Gallery>
          {responseData && <ImageGalleryItem responseData={responseData} />}
        </Gallery>
        {responseData && <LoadButton />}
      </>
    );
  }
}
