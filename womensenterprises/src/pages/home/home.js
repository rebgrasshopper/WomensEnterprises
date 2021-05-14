import Carousel from "../../components/carousel/carousel";
import pic1 from '../../images/Landing/pexels-andrea-piacquadio-cropped.jpg';
import pic2 from '../../images/Landing/pexels-anna-tarazevich-cropped.jpg';

export default function Home(){

    let photos = [{photo: pic1, alt:"Photo by Andrea Piacquadio, from Pexels"}, {photo: pic2, alt:"Photo by Anna Tarazevich, from Pexels"}];

    return (
        <div>
            <Carousel photos={photos} />
        </div>
        )
}