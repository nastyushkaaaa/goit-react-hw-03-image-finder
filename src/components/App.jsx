import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { FetchImages } from '../services/api';

export class App extends Component {
  state = {
    searchString: '',
    searchResult: [],
    currentPage: 1,
    loading: false,
  };

  handleSearchbarSubmit = searchString => {
    this.setState({ searchString, currentPage: 1, searchResult: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevString = prevProps.searchString;
    const nextString = this.props.searchString;

    if (prevString !== nextString) {
      this.setState({ loading: true });
      FetchImages(this.state.currentPage, this.props.searchString).then(
        images => {
          this.setState(prevState => ({
            searchResult: [...prevState.searchResult, ...images.hits]
              .catch(error => this.setState({ error }))
              .finally(() => this.setState({ loading: false })),
          }));
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchbarSubmit}></Searchbar>
        <ToastContainer autoClose={3000}></ToastContainer>
        {this.state.searchResult.length > 0 && (
          <ImageGallery searchString={this.state.searchResult}></ImageGallery>
        )}
      </div>
    );
  }
}
