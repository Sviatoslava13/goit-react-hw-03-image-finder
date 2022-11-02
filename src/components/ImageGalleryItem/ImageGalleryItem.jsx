import s from './ImageGalleryItem.module.css'
const ImageGalleryItem = ({id, webformatURL, clickModal, largeImageURL }) => 
(

        <li key={id}  className={s.galleryItem } onClick={clickModal}>
  <img className={s.galerryItemImage} src={webformatURL} alt="" />
</li>

)
      

export default ImageGalleryItem