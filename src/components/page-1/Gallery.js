import React from 'react'
import "./Gallery.css"
import {GalleryItems} from "./GalleryItems"

function Gallery(fade) {
    return (
        <div className="image-gallery">
            {GalleryItems.map(g=>{
                return(
                    <figure>
                        <img className={g.class} src={g.path} alt={g.name}/>
                    </figure>
                )
            })}
        </div>
    )
}

export default Gallery
