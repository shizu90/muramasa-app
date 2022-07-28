import { HomeContainer, HomePage } from "../styles/pages/Home"
import Carousel from "../components/Carousel"

export async function getStaticProps(context){
  const info = await fetch(`https://kitsu.io/api/edge/trending/anime`)
  .then(res => res.json())
  .then(res => {return res})

  return {
    props: {
      info
    }
  }
}

export default function Home(props) {
  const {info} = props
  return (
    <HomePage>
      <HomeContainer>
        <h1>Track your animes</h1>
        <h2>Track your preferred anime and see about the most recent and trending animes.</h2>
        <Carousel info={info}></Carousel>
      </HomeContainer>
    </HomePage>
  )
}
