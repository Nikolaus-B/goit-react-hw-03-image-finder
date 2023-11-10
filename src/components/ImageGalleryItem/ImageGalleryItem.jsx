import { Component } from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import { ModalImage } from 'components/ModalImage/ModalImage';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { img, largeImg, tag } = this.props;

    return (
      <GalleryItem>
        <GalleryImage onClick={this.openModal} src={img} alt={tag} />
        <ModalImage
          modalIsOpen={isModalOpen}
          closeModal={this.closeModal}
          largeImg={largeImg}
          topic={tag}
        />
      </GalleryItem>
    );
  }
}

// export const ImageGalleryItem = ({ img, largeImg, tags }) => {
//   return (
// <GalleryItem>
//   <GalleryImage src={img} alt={tags} />
// </GalleryItem>
//   );
// };
