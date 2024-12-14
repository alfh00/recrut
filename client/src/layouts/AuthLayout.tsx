import { Outlet } from "react-router"
import MenuBar from "../components/common/MenuBar"
import Footer from "../components/common/Footer"

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MenuBar />
      <main className="flex-grow">
        <div className="container mx-auto max-w-md p-4 md:p-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AuthLayout