import { NavLink } from "react-router-dom"
import './GalleryNav.css'

const GalleryNav = ({galleries}) => {

    return (
        <nav>
            <h1>Galleries</h1>
            <ul>
                <NavLink className='gal-nav-link' to='/'>Home</NavLink>
                {galleries.map( gal => {
                    return <NavLink className='gal-nav-link' key={gal.id} to={`galleries/${gal.id}`}>{gal.name}</NavLink>
                })}
            </ul>
        </nav>
    )
}

export default GalleryNav
