import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    searchString: '',
  };

  handleChange = e => {
    this.setState({ searchString: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchString.trim() === '') {
      toast.error('Enter search data!');
      return;
    }

    this.props.onSubmit(this.state.searchString);
    this.setState({ searchString: '' });
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>
          <input
            class="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchString}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
