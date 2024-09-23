import { Blogs } from './customcomponent/Blogs'
import { Cardcc } from './customcomponent/cardcc'
import  {Carousel1} from './customcomponent/carousel1'
import Carousel2 from './customcomponent/carousel2'
import { Header } from './customcomponent/header'
import { Header2 } from './customcomponent/header2'
import { Section1 } from './customcomponent/section1'
import { Blogs2 } from './customcomponent/Blogs2'
import { Footer1 } from './customcomponent/Footer1'

export const Home = () => {
  return (
    <>
    <Header/>
      <Header2/>
      <Carousel1/>
      <Carousel2/>
      <Section1/>
      <Cardcc/>
      <Blogs/>
      <Blogs2/>
      <Footer1/>
    
    </>
  )
}
