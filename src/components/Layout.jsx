import { Outlet } from "react-router-dom"
import AppNav from "./AppNav"

function Layout() {
  return (
    <div>
        <AppNav/>
        <Outlet/>
        <footer style={{marginTop: "5rem"}}></footer>
    </div>
  )
}

export default Layout