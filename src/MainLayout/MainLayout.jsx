import { Outlet } from "react-router"
import Footer from "../HomePage/Footer/Footer"
import NavBar from "../HomePage/NavBar/NavBar"


const MainLayout = () => {
  return (
<>
<NavBar></NavBar>
<Outlet></Outlet>
<Footer></Footer>
</>
    
  )
}

export default MainLayout