import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };
  toggelModal = () => {
    this.setState(prevState => ({isOpenModal: !prevState.isOpenModal}));
  };
  render() {
    return (
      <li
        className={s.galleryItem}
      onClick={this.toggelModal}
      >
        <img
          className={s.galerryItemImage}
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
        {this.state.isOpenModal && <Modal clickModal={this.toggelModal} img={this.props.largeImageURL} tags={ this.props.tags} />}
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
