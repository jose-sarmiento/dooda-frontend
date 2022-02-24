import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlacesToStay from "./pages/PlacesToStay";
import {
    Hotels,
    Houses,
    Beaches,
    Pools,
    Farms,
    ViewHotel,
    ViewHouse,
    ViewBeach,
    ViewPool,
    ViewFarm,
} from "./components";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/p/*" element={<PlacesToStay />}>
                <Route path="hotels" element={<Hotels />} />
                <Route path="hotels/:id" element={<ViewHotel />} />
                <Route path="houses" element={<Houses />} />
                <Route path="houses/:id" element={<ViewHouse />} />
                <Route path="beach" element={<Beaches />} />
                <Route path="beach/:id" element={<ViewBeach />} />
                <Route path="pools" element={<Pools />} />
                <Route path="pools/:id" element={<ViewPool />} />
                <Route path="farms" element={<Farms />} />
                <Route path="farms/:id" element={<ViewFarm />} />
            </Route>
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
}

export default App;
