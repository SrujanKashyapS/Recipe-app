import Hero from "../../components/Hero"
import CategoryWrapper from "../category/CategoryWrapper"
import FeaturedSection from "./FeaturedSection"
import LatestRecipie from "./LatestRecipie"

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero/>
        <CategoryWrapper/>
      </div>
      <FeaturedSection/>
      <LatestRecipie/>
    </div>
  )
}

export default Home