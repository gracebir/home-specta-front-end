/** @format */
import { Routes, Route } from "react-router-dom";
import TvShow from "./pages/TvShow";
import Discover from "./pages/Discover";

function App() {
    return (
        <div className='bg-primary w-full min-h-screen'>
            <div className='grid grid-cols-12 max-w-[1391px] mx-auto min-h-screen'>
                <div className='col-span-9 border-2 border-white'>
                    <Routes>
                        <Route path='/' element={<TvShow />} />
                        <Route path='/' element={<Discover />} />
                    </Routes>
                </div>
                <div className='col-span-3 border border-green-400'></div>
            </div>
        </div>
    );
}

export default App;
