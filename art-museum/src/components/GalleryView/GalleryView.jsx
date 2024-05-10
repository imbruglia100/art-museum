import { useParams, Navigate } from 'react-router-dom';
import './GalleryView.css'
import ArtImageTile from '../ArtImageTile/ArtImageTile';

const GalleryView = ({galleries}) => {

    const {galleryId} = useParams()
    const gallery = galleries.find( gal => gal.id === +galleryId)

    return (
        <article>
            <h1>Gal View</h1>
            <h2>{gallery ? gallery?.name : <Navigate to="/" replace={true}/>}</h2>
            {
                gallery.objects.map( art => {
                    return <ArtImageTile key={art.id} art={art}/>
                })
            }
        </article>
    )
}

export default GalleryView;
