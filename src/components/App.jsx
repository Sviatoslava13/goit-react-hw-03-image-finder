import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import s from './App.module.css';

export class App extends Component {
  state = {
    search: '',
  };

  searchQuery = search => {
    this.setState({ search });
  };

  render() {
    return (
      <div className={s.container}>
        <Searchbar searchQuery={this.searchQuery} />
        <ImageGallery search={this.state.search}  />
      </div>
    );
  }
}
