import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Timeline } from "./pages/Timeline";

export function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home />} />
                <Route path="/timeline" element={<Timeline />} />
            </Route>
        </Routes>
    )
}