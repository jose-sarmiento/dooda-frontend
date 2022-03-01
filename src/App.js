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
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
}

export default App;
