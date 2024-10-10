import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export const NotFound = () => {
  return (
    <>
    <img src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png" alt="404" className="w-full h-screen"/>
    <Link to="/"> <Button className="bg-emerald-800 text-white text-sm py-2 px-10 rounded-full absolute top-[72%] left-[45%]"> Go Home</Button></Link>
    </>
  )
}
