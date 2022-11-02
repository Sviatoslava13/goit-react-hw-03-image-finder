import { Component } from 'react'
import { createPortal } from 'react-dom';
import s from './Modal.module.css'
const modal = document.querySelector('#modal');
console.log(modal);
class Modal extends Component{

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseByEsc);
  }

  handleCloseByEsc = (e) => {
    if (e.code === "Escape") {
      this.props.clickModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.clickModal();
    }
  };


  render() {
    return createPortal(
       <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
    <img src='' alt="" />
  </div>
</div>, modal
    )
  }
} 
export default Modal