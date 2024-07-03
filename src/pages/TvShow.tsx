/** @format */

import Banner from "../components/Banner";
import Header from "../components/Header";

function TvShow() {
    return (
        <div className='grid grid-cols-12 max-w-[1391px] mx-auto min-h-screen'>
            <div className='col-span-9 px-6'>
                <Header />
                <Banner />
            </div>
            <div className='col-span-3  bg-sidebar'></div>
        </div>
    );
}

export default TvShow;
