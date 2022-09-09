import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import DetalheDePokemon from "../Pages/DetalheDePokemon/DetalheDePokemon";
import Pokedex from "../Pages/Pokedex/Pokedex";


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>}/>
            <Route  path="/mypokedex" element={<Pokedex/>}/>
            <Route  path="/details" element={<DetalheDePokemon/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router