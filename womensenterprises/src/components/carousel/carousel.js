export default function Carousel({photos}){

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                
                {photos.map(({photo, alt}) => {
                    return (
                    <div className="carousel-item active" key={alt}>
                        <img src={photo} className="d-block w-100" alt={alt}></img>
                    </div>
                    )
                })}

            </div>
        </div>
        )
}