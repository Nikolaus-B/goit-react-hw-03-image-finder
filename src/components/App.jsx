import { Component } from 'react';
import { Container, GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ErrorText } from './ErrorText/ErrorText';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, error: false });

      const initialImages = await fetchImages(
        this.state.query,
        this.state.page
      );
      this.setState({
        images: initialImages,
      });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const clearQuery = this.state.query.split('/').pop();
      try {
        this.setState({ isLoading: true, error: false });

        const newImages = await fetchImages(clearQuery, this.state.page);

        if (newImages.length === 0) {
          toast.error('No more images available');
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...newImages],
          }));
        }
      } catch (err) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
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
    const { images, isLoading, error } = this.state;

    return (
      <Container>
        <Searchbar submitClick={this.onSubmitClick} />
        {error && <ErrorText />}
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Button loadMoreBtnClick={this.onLoadMoreClick} />
        )}
        <GlobalStyle />
        <Toaster />
      </Container>
    );
  }
}
