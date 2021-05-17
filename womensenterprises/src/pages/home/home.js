import CarouselComponent from "../../components/carousel/carousel";
import pic1 from '../../images/Landing/pexels-andrea-piacquadio-cropped.jpg';
import pic2 from '../../images/Landing/pexels-anna-tarazevich-cropped.jpg';
import pic3 from '../../images/Landing/pexels-matheus-bertelli-cropped.jpg';
import pic4 from '../../images/Landing/pexels-rfstudio-cropped.jpg';

export default function Home(){

    let photos = [
        {photo: pic2, alt:"Photo by Andrea Piacquadio, from Pexels", caption:"Let's support women in our communities"},
        {photo: pic1, alt:"Photo by Anna Tarazevich, from Pexels", caption:"Let's bring to life ideas from minority voices"},
        {photo: pic4, alt:"Photo by RFStudio, from Pexels", caption:"Let's support women lead organizations"},
        {photo: pic3, alt:"Photo by Matheus Bertelli", caption:"Let's create opportunities for women to suceed"}
    ];

    return (
        <div>
            <CarouselComponent photos={photos} />
        </div>
        )
}