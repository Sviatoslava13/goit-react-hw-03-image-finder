import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import fetchPixabay from '../PixabayAPI.js';
import Modal from '../Modal/Modal'
class ImageGallery extends Component {
  state = {
    search: '',
    page: 1,
    picture: [],
    totalPages: 0,
    error: null,
    isLoading: false,
    modalData: null,
  };
  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.search !== state.search) {
      return { page: 1, search: nextProps.search };
    }
    return state;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.search !== this.props.search ||
      prevState.page !== this.state.page
    ) {
      this.searchGallerry();
    }
  }
  searchGallerry = () => {
    this.setState({ isLoading: true });
    fetchPixabay(this.props.search, this.state.page)
      .then(data =>
        this.setState(prev => ({
          picture:
            this.state.page === 1 ? data.hits : [...prev.picture, ...data.hits],
          totalPages: Math.ceil(data.totalHits / 12),
        }))
      )
      .catch(err => this.setState({ error: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  };
  updatePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

    changeModalData = (modalData = null) => {
    this.setState({ modalData });
  };


  render() {
    return (
      <>
        <ul className={s.gallery}>
          {this.state.picture.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} clickModal={ this.changeModalData}/>
          ))}
        </ul>
        {this.state.isLoading && <Loader />}
        {this.state.page < this.state.totalPages && (
          <Button updatePage={this.updatePage} />
        )}
        {this.state.modalData && <Modal clickModal={ this.changeModalData}  />}
      </>
    );
  }
}
export default ImageGallery;
