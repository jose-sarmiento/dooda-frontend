import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlacesToStay from "./pages/PlacesToStay";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import HostingGuide from "./pages/HostingGuide";
import {
    Hotels,
    Houses,
    Beaches,
    Pools,
    Farms,
    ViewPlace
} from "./components"; 

function App() {
    return (
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
            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/host/guide" element={<HostingGuide />} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
}

export default App;
