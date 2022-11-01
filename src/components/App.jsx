import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader'
import Button from './Button/Button'
//import Modal from './Modal/Modal'
import s from './App.module.css';
import fetchPixabay from './PixabayAPI.js';
//console.log(fetchPixabay('sis'));
export class App extends Component {
  state = {
    search: '',
    page: 1,
    picture: [],
    totalPages: 0,
    error: null,
    isLoading:false,
  };

  searchQuery = search => {
    this.setState({ search });
  };
    updatePage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    };
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.state.search) {
          this.setState({ isLoading: true });
      fetchPixabay(this.state.search)
        .then(data =>
          this.setState({
            picture: data.hits,
            totalPages: Math.ceil(data.totalHits/12) ,
             
          })
        )
        .catch(err => this.setState({ error: err.message }))
       .finally(() => this.setState({ isLoading: false }));
    }
  }


  render() {
    return (
      <div className={s.container}>
        <Searchbar searchQuery={this.searchQuery} />
        <ImageGallery picture={ this.state.picture} />
        {this.state.picture.length > 0 && <Button updatePage={this.updatePage} />}
 <Loader />  
      </div>
    );
  }
}
//    <Modal/>
