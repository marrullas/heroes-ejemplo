import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/ui/NavBar"

import { DcScreen } from "../components/dc/DcScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { HeroScreen } from "../components/hero/HeroScreen"
import { SearchScreen } from "../components/search/SearchScreen"


export const DashboardRoutes = () => {
  return (
    <>
     <Navbar />
     <div className="container">

      <Routes>
        <Route path="dc" element={<DcScreen />} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="hero/:id" element={<HeroScreen />} />

        <Route path="search" element={<SearchScreen />} />
       
        <Route path="/" element={<MarvelScreen />} />
        
      </Routes>
     </div>
    </>
  )
}
