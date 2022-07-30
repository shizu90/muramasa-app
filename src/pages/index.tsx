import { HomePage } from "../styles/pages/Home"
import CarouselComponent from "../components/Carousel"
import useDate from "../hooks/useDate"

export default function Home(props) {
  const {currentSeason, currentYear} = useDate()


  return (
    <HomePage>
        <CarouselComponent></CarouselComponent>
        <h1>{currentSeason}</h1>
        <h2>{currentYear}</h2>
    </HomePage>
  )
}
