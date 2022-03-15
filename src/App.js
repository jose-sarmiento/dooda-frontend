import React, { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlacesToStay from "./pages/PlacesToStay";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import HostingGuide from "./pages/HostingGuide";
import MyAccount from "./pages/MyAccount";
import {
    Hotels,
    Houses,
    Beaches,
    Pools,
    Farms,
    ViewPlace,
    Cabins,
    Campers,
    HouseBoats,
    Islands,
    Treehouses
} from "./components"; 

function App() {
    return (
        <Wrapper>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/p/*" element={<PlacesToStay />}>
                <Route path="hotels" element={<Hotels />} />
                <Route path="hotels/:id" element={<ViewPlace />} />
                <Route path="houses" element={<Houses />} />
                <Route path="houses/:id" element={<ViewPlace />} />
                <Route path="beach" element={<Beaches />} />
                <Route path="beach/:id" element={<ViewPlace />} />
                <Route path="pools" element={<Pools />} />
                <Route path="pools/:id" element={<ViewPlace />} />
                <Route path="farms" element={<Farms />} />
                <Route path="farms/:id" element={<ViewPlace />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="cabins/:id" element={<ViewPlace />} />
                <Route path="campers" element={<Campers />} />
                <Route path="campers/:id" element={<ViewPlace />} />
                <Route path="islands" element={<Islands />} />
                <Route path="islands/:id" element={<ViewPlace />} />
                <Route path="treehouses" element={<Treehouses />} />
                <Route path="treehouses/:id" element={<ViewPlace />} />
                <Route path="houseboats" element={<HouseBoats />} />
                <Route path="houseboats/:id" element={<ViewPlace />} />
            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account/*" element={<MyAccount />} />
            <Route path="/host/guide" element={<HostingGuide />} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
        </Wrapper>
    );
}

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

export default App;
