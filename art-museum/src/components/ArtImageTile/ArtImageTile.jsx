import './ArtImageTile.css'
import { Link } from 'react-router-dom'

const ArtImageTile = ({art}) => {

    return (
        <Link className='img-container' to={`art/${art.id}`}>
            <img src={art.images[0]?.baseimageurl} />
        </Link>
    )
}

export default ArtImageTile
