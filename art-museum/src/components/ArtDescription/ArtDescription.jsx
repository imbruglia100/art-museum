import './ArtDescription.css'
import { useParams, Link } from 'react-router-dom'

const ArtDescription = ({galleries}) => {
    const {galleryId, artId} = useParams()
    const gallery = galleries.find( gal => gal.id === +galleryId)

    const art = gallery.objects.find( el => el.id === +artId)

    return (
        <>
            <h2><Link to={`${art.url}?position=${art.id}`} target='_blank' relative='path'>{art.title}</Link></h2>
            <p>{art.description}</p>
            {art.images.map(img => {
               return <img key={img.imageid} src={img?.baseimageurl} />
            })}
            <Link to='../..' relative='path'>Back to Gallery</Link>
        </>
    )
}

export default ArtDescription
