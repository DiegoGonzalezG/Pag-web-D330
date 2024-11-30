import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


export default function HomePage() {
    const imgBanner = './perrofachero.png';
    return (
        <div>
            <div /*Banner de la imagen */
                className="h-[600px] w-[100vw] bg-cover bg-center"
                style={{ backgroundImage: `url(${imgBanner})` }}>
                    
                <div className="container mx-auto max-w-[1170px] flex flex-col h-[700px] justify-center">
                <Link to="/" className="bg-[rgb(46,48,187)] px-[50px] py-[7px] text-[20px] uppercase leading-[50px] flex w-[210px] text-center text-[#ffffff] mt-[300px] rounded-lg"> BUY NOW</Link>      
                </div>    
            </div>

            <div className="container mx-auto max-w-[1170px] my-[50px]">
                <ItemList />
    
            </div>
        </div>
    );
}
