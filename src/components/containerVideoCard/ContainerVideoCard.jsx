
import CardVideo from "../cardVideo/CardVideo"
import "./containerVideoCard.css"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


let videoList = [
    {

        question: 'Cual fue tu videojuego favorito durante tu infancia?'
    },
    {
        question: 'Cual es tu comida favorita?'
    },
    {
        question: 'Que libros son los que mas te gustan?'
    },
    {
        question: 'Como ha sido tu infancia?'
    },
    {
        question: 'Este estadio está lleno?mas te vale'
    }
]

const ContainerVideoCard = () => {


    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {videoList.map((dataVideodadda) => <SwiperSlide>
                <CardVideo dataVideo={dataVideodadda}></CardVideo>
            </SwiperSlide>)}
        </Swiper>
    )
}

export default ContainerVideoCard