import { useParams, Navigate } from 'react-router-dom';
import './GalleryView.css'

const GalleryView = ({galleries}) => {

    const {galleryId} = useParams()
    const gallery = galleries.find( gal => gal.id === +galleryId)

    return (
        <article>
            <h1>Gal View</h1>
            <h2>{gallery ? gallery?.name : <Navigate to="/" replace={true}/>}</h2>
        </article>
    )
}

export default GalleryView;
