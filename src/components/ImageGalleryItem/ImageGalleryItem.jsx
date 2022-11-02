import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
class ImageGalleryItem extends Component {
  state = {
    modalData: false,
  };
  changeModalData = () => {
    this.setState(prevState => ({modalData: !prevState.modalData}));
  };
  render() {
    return (
      <li
        className={s.galleryItem}
      onClick={this.changeModalData}
      >
        <img
          className={s.galerryItemImage}
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
        {this.state.modalData && <Modal clickModal={this.changeModalData} img={this.props.largeImageURL} tags={ this.props.tags} />}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
}

export default ImageGalleryItem;
