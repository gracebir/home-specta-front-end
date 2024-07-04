/** @format */

import DropButton from "../components/button/DropButton";
import OutLineButton from "../components/button/OutLineButton";
import Header from "../components/Header";
import Card from "../components/movie/Card";
import { categories, discovers, logos } from "../utils/constants";

function Discover() {
    return (
        <div className='max-w-7xl mx-auto px-6 lg:px-0'>
            <Header isHome />

            <div className='grid lg:grid-cols-6 grid-cols-1 gap-10 w-full py-8'>
                <div className='lg:col-span-3 col-span-1 flex flex-wrap gap-4'>
                    {categories.map((item) => (
                        <OutLineButton key={item} text={item} />
                    ))}
                </div>

                <div className='lg:col-span-3 col-span-1 flex flex-col gap-6 justify-between'>
                    <div className='flex flex-wrap items-center justify-between gap-4 px-7'>
                        {logos.map((item) => (
                            <img
                                key={item.id}
                                src={item.imgURl}
                                alt={`${item.id}`}
                            />
                        ))}
                    </div>
                    <div className='flex lg:flex-nowrap gap-4 flex-wrap lg:justify-between items-center'>
                        <DropButton text='Genre' />
                        <DropButton text='Director' />
                        <DropButton text='Year' />
                        <button className='bg-active text-sidebar px-8 py-2 duration-300 hover:bg-[#a0d9c8] text-base lg:text-lg rounded-3xl'>
                            Go !
                        </button>
                    </div>
                </div>
            </div>

            {/* movie */}
            <div className='grid sm:grid-cols-1 md:grid-cols-3 justify-items-center  lg:grid-cols-5 gap-3 py-6'>
                {discovers.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        starsNumber={item.starsNumber}
                        category={item.category}
                        episode={item.episode}
                        imageURL={item.imageURL}
                    />
                ))}
            </div>
        </div>
    );
}

export default Discover;
