import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { GalleryItem } from './ImageGalleryItem.styled';
import { GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  // state = {
  //   isModalOpen: false,
  // };

  // openModal = () => {
  //   this.setState({ isModalOpen: true });
  // };

  render() {
    const { responseData } = this.props;
    // const { isModalOpen } = this.state;

    return responseData.map(({ id, webformatURL, largeImageURL, tags }) => (
      <GalleryItem key={id}>
        <GalleryImage src={webformatURL} alt={tags} />
        {/* {isModalOpen && <Modal largeImageURL={largeImageURL} tags={tags} />} */}
      </GalleryItem>
    ));
  }
}
