import { CarouselContainer, CarouselItem } from "../styles/components/Carousel"
import Carousel from "react-elastic-carousel"
import { useState, useRef, useEffect } from "react";

interface CarouselProps {

}

export default function CarouselComponent(props: CarouselProps) {
    let resetTimeOut;
    const carouselRef = useRef(null)
    const breakPoints = [
        { width: 1, itemDisplay: 1 },
        { width: 550, itemDisplay: 2, itemToScroll: 2},
        { width: 758, itemDisplay: 3 },
        { width: 1200, itemDisplay: 4 }
    ];

    const [items, setItems] = useState<Array<JSX.Element>>([
        <div>
            <h4>Track your animes</h4>
            <p>Lorem ipsum aodgkopsdfgkposdf kfhgkofghfsdhgdsfghfgdjfghjghfjghkghjkghjkhkg</p>
        </div>,
        <div>
            <h4>Track your animes</h4>
            <p>Lorem ipsum aodgkopsdfgkposdf kfhgkofghghjkghjkghkghkjgkghjkghjkghk</p>
        </div>,
        <div>
            <h4>Track your animes</h4>
            <p>Lorem ipsum aodgkopsdfgkposdf kfhgkofghghkjghkghkgkghjkghjkghkjgkgkghjkgkgjhkghjkghjkghjkghk</p>
        </div>]);

    
    return (
        <CarouselContainer> 
            <Carousel 
            ref={carouselRef} 
            isRTL 
            itemsToShow={1} 
            breakPoints={breakPoints} 
            enableAutoPlay 
            autoPlaySpeed={10500} 
            onNextEnd={({ index }) => {
                clearTimeout(resetTimeOut)
                if(index + 1 === items.length) {
                    resetTimeOut = setTimeout(() => {
                        carouselRef.current.goTo(0)
                    }, 1500)
                }
            }}>
                {items.map((item, index) => (
                    <CarouselItem key={index + 0} img="/capa.jpg">
                        {item}
                    </CarouselItem>
                ))}
            </Carousel>
        </CarouselContainer>    
    )
}