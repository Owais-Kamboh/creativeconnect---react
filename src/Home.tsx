import { Blogs } from './customcomponent/Blogs'
import { Cardcc } from './customcomponent/cardcc'
import  {Carousel1} from './customcomponent/carousel1'
import Carousel2 from './customcomponent/carousel2'
import { Header } from './customcomponent/header'
import { Header2 } from './customcomponent/header2'
import { Section1 } from './customcomponent/section1'
import { Blogs2 } from './customcomponent/Blogs2'
import { Footer1 } from './customcomponent/Footer1'
import { useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
    if (localStorage.getItem("authToken") == undefined) {    
      navigate("/")
    }
  }, [])  
  const [selectedCategory, setSelectedCategory] = useState<string>('allCategories');
  
  return (
    <>
      <Header/>
      <Header2 onCategoryChange={setSelectedCategory} />
      <Carousel1/>
      <Carousel2/>
      <Section1/>
      <Cardcc selectedCategory={selectedCategory} />
      <Blogs/>
      <Blogs2/>
      <Footer1/>
    </>
  )
}
