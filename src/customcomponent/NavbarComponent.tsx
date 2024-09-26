  
import { Header } from './header'
import { Header2 } from './header2'
import {useState} from 'react'
export const NavbarComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
  return (
    <>
    <Header />
    <Header2 setSelectedCategory={setSelectedCategory}/>
    
    </>
  )
}
