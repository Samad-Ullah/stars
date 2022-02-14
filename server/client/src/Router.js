import { Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Dashboard from "./pages/Dashboard";
import People from "./components/People/People"
import Planet from "./components/Planet/Planet"
import Starship from "./components/Starships/Starship";
import MorePlanetDetail from "./components/Planet/MorePlanetDetail"
import MorePeopleDetail from "./components/People/MorePeopleDetails";
import MoreStarShipDetails from "./components/Starships/MoreStarShipDetails"
import { isAuthenticated } from "./api";

const StarWarRoutes = () => {
  const token = isAuthenticated().token;
  
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/planet" element={<Planet/>}></Route>
      <Route path="/people" element={<People/>}></Route>
      <Route path="/starship" element={<Starship/>}></Route>
      <Route path="/planets/:name" element={<MorePlanetDetail/>}></Route>
      <Route path="/peoples/:name" element={<MorePeopleDetail/>}></Route>
      <Route path="/starsips/:name" element={<MoreStarShipDetails/>}></Route>

    </Routes>
  );
};

export default StarWarRoutes;
