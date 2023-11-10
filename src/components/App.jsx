import { Component } from 'react';
import { Container, GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './api';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: 'cat',
    page: 1,
  };

  async componentDidMount() {
    try {
      const initialImages = await fetchImages(
        this.state.query,
        this.state.page
      );
      this.setState({
        images: initialImages,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { images } = this.state;
    return (
      <Container>
        <Searchbar />
        {images.length > 0 && <ImageGallery images={images} />}
        <Button />
        <GlobalStyle />
      </Container>
    );
  }
}
