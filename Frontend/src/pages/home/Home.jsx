import Hero from "../../components/Hero"
import CategoryWrapper from "../category/CategoryWrapper"
import AboutSection from "./AboutSection"
import CompanyLogo from "./CompanyLogo"
import FeaturedSection from "./FeaturedSection"
import LatestRecipie from "./LatestRecipie"
import NewsLetter from "./NewsLetter"
import Subscription from "./Subscription"

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero/>
        <CategoryWrapper/>
      </div>
      <FeaturedSection/>
      <LatestRecipie/>
      <NewsLetter/>
      <AboutSection/>
      <CompanyLogo/>
      <Subscription/>
    </div>
  )
}

export default Home