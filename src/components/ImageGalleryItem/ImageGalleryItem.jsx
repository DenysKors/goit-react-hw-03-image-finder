import React, { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
import { GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { responseData, getImageData } = this.props;

    return responseData.map(({ id, webformatURL, largeImageURL, tags }) => (
      <GalleryItem key={id}>
        <GalleryImage
          onClick={evt =>
            getImageData(evt.target.dataset.source, evt.target.alt)
          }
          data-source={largeImageURL}
          src={webformatURL}
          alt={tags}
        />
      </GalleryItem>
    ));
  }
}

// evt => getImageData(evt.target.dataset.source, evt.target.alt);
