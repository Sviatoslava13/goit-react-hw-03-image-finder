import s from './ImageGalleryItem.module.css'
const ImageGalleryItem = ({id, webformatURL }) => 
(

        <li key={id}  className={s.galleryItem }>
  <img className={s.galerryItemImage} src={webformatURL} alt="" />
</li>

)
      

export default ImageGalleryItem