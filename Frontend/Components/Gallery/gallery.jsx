import GalleryCard from "./gallery-card";
import { GalleryData } from "../../../Data/gallery-data";
import "./gallery.css";

const Gallery = () => {
    return (
        <section id="gallery">
            <div className="gallery-cont">
                <p className="gallery-title">
                    Gallery
                </p>
                <div className="gallery-card-cont">
                    {GalleryData.map((item, index) => (
                        <GalleryCard
                            key={index}
                            number={index + 1}
                            imgSrc={item.imgSrc}
                            linkUrl={item.linkUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
