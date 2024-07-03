/** @format */
import { Routes, Route } from "react-router-dom";
import TvShow from "./pages/TvShow";
import Discover from "./pages/Discover";

function App() {
    return (
        <div className='bg-primary w-full min-h-screen font-lato text-secondary'>
            <Routes>
                <Route path='/' element={<TvShow />} />
                <Route path='/discover' element={<Discover />} />
            </Routes>
        </div>
    );
}

export default App;
