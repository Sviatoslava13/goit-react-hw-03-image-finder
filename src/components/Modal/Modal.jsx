import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modal = document.querySelector('#modal');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.clickModal();
      return;
    }
        if (e.target !== e.currentTarget) {
          this.props.clickModal();
          return;
    }
  };
  /*handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      this.props.clickModal();
    }
  };*/
  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.closeModal}>
        <div className={s.modal}>
          <img src={this.props.img} alt={this.props.tags}  />
        </div>
      </div>,
      modal
    );
  }
}

Modal.propTypes = {
  clickModal: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export default Modal;
