import { Component } from 'react';
import { Container, GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './api';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
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

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const clearQuery = this.state.query.split('/').slice(1)[0];
      try {
        const newImages = await fetchImages(clearQuery, this.state.page);

        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
        }));
      } catch (err) {
        console.log(err);
      }
    }
  }

  onSubmitClick = searchedQuery => {
    this.setState({
      query: `${Date.now()}/${searchedQuery}`,
      page: 1,
      images: [],
    });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images } = this.state;

    return (
      <Container>
        <Searchbar submitClick={this.onSubmitClick} />
        {images.length > 0 && <ImageGallery images={images} />}
        <Button loadMoreBtnClick={this.onLoadMoreClick} />
        <GlobalStyle />
      </Container>
    );
  }
}
