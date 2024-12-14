import MenuBar from "../components/common/MenuBar"
import Footer from "../components/common/Footer"
import { Outlet } from "react-router"

const DashboardLayout = () => {
  return (
    <>
   <MenuBar/>
   <Outlet/>
   <Footer/>  
    </>
  )
}

export default DashboardLayout