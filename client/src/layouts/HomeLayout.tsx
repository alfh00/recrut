import { Outlet } from "react-router"
import MenuBar from "../components/common/MenuBar"
import Footer from "../components/common/Footer"

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MenuBar />
      <main className="flex-grow">
        
          <Outlet />
        
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout