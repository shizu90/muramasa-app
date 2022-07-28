import { CarouselContainer, CarouselLeft, CarouselRight } from "../styles/components/Carousel"
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { useRef } from "react"
import Link from 'next/link'

interface CarouselProps {
    info: any
}

export default function Carousel(props: CarouselProps) {
    const carousel = useRef(null)

    function toSingleView(media: any){
        localStorage.setItem('arg', JSON.stringify(media))
    }

    const slideRight = (e: any) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const slideLeft = (e: any) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <CarouselContainer>
          <CarouselLeft onClick={(e) => slideRight(e)}>
            <FaArrowLeft/>
          </CarouselLeft>  
          <ul ref={carousel}>
            {props.info.data? (
            <>
              {props.info.data.map((item: any) => (
                <Link href={'/singleView/' + item.id} key={item.id}>
                  <li onClick={() => toSingleView(item)}>
                    <img src={item.attributes.posterImage.large}></img>
                    <p>{item.attributes.canonicalTitle}</p>
                  </li>
                </Link>
              ))}
            </>): <p>Failed do call api</p>}
          </ul>
          <CarouselRight onClick={(e) => slideLeft(e)}>
            <FaArrowRight/>
          </CarouselRight>
        </CarouselContainer>
    )
}