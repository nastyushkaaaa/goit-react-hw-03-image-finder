import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
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
    const { currentPage, searchString } = this.state;

    const prevString = prevState.searchString;
    const nextString = searchString;

    if (prevString !== nextString) {
      this.setState({ loading: true });
      FetchImages(currentPage, nextString)
        .then(images => {
          this.setState(prevState => ({
            searchResult: [...prevState.searchResult, ...images.hits],
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
      console.log(this.state.searchResult);
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchbarSubmit}></Searchbar>
        {this.state.loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        <ToastContainer autoClose={3000}></ToastContainer>
        {this.state.searchResult.length > 0 && (
          <ImageGallery images={this.state.searchResult}></ImageGallery>
        )}
      </div>
    );
  }
}
