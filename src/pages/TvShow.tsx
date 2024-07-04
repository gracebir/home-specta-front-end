/** @format */

import Banner from "../components/Banner";
import Header from "../components/Header";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { collections, continues, genres, shows } from "../utils/constants";
import Card from "../components/movie/Card";
import ContinueCard from "../components/movie/ContinueCard";

import profile from "../assets/profile.png";
import circle from "../assets/squircle.svg";
import { CiBellOn } from "react-icons/ci";
import SideHeader from "../components/Header/SideHeader";
import Slider from "react-slick";
import CollectionCard from "../components/movie/CollectionCard";
import GenreCard from "../components/movie/GenreCard";

function TvShow() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        draggable: true,
    };

    const setting1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        draggable: true,
    };
    return (
        <div className='grid lg:grid-cols-12 grid-cols-1 max-w-[1391px] mx-auto min-h-screen'>
            <div className='lg:col-span-9 col-span-1 px-6'>
                <Header isHome={true} />
                <Banner />
                <section>
                    <div className='flex gap-5 py-5 items-center'>
                        <h1 className='lg:text-3xl text-2xl font-bold'>
                            Popular on Spectra
                        </h1>
                        <div className='flex cursor-pointer items-center'>
                            <p className='text-lg'>See More</p>
                            <MdOutlineKeyboardArrowRight size={20} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4'>
                        {shows.slice(0, 4).map((item) => (
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
                </section>
                <section>
                    <div className='flex gap-5 py-5 items-center'>
                        <h1 className='lg:text-3xl text-2xl font-bold'>
                            Suggested for You
                        </h1>
                        <div className='flex cursor-pointer items-center'>
                            <p className='text-lg'>See More</p>
                            <MdOutlineKeyboardArrowRight size={20} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4'>
                        {shows.slice(4, 8).map((item) => (
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
                </section>
            </div>
            {/* sidebar */}
            <div className='col-span-3 hidden lg:block  bg-sidebar py-8 px-4 overflow-hidden'>
                <div className='px-4 flex justify-end'>
                    <div className='flex items-center gap-4'>
                        <a href='#'>
                            <img src={circle} alt='circle' />
                        </a>
                        <a className='relative' href='#'>
                            <div className='w-1 h-1 absolute right-2 top-2 bg-active'></div>
                            <CiBellOn size={32} />
                        </a>
                        <a href='#'>
                            <img src={profile} alt='profile' />
                        </a>
                    </div>
                </div>
                <div className='mt-8 flex flex-col gap-8'>
                    <div className='w-[430px] flex flex-col gap-4'>
                        <SideHeader title='Continue' />
                        <div className='slider-container banner-slider overflow-hidden'>
                            <Slider {...settings}>
                                {continues.map((items) => (
                                    <ContinueCard
                                        key={items.id}
                                        imageUrl={items.imageURL}
                                        title={items.title}
                                        episode={items.episode}
                                        progress={items.progress}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className='w-[430px] flex flex-col gap-4'>
                        <SideHeader title='Collections' />
                        <div className='slider-container banner-slider overflow-hidden'>
                            <Slider {...settings}>
                                {collections.map((item) => (
                                    <CollectionCard
                                        key={item.id}
                                        imageUrl={item.imageURL}
                                        title={item.title}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className='w-[860px] flex flex-col gap-4'>
                        <SideHeader title='Genres' />
                        <div className='slider-container banner-slider overflow-hidden'>
                            <Slider {...setting1}>
                                {genres.slice(0, 4).map((item) => (
                                    <GenreCard
                                        key={item.id}
                                        imageURL={item.imageURL}
                                        title={item.title}
                                    />
                                ))}
                            </Slider>
                        </div>
                        <div className='slider-container banner-slider overflow-hidden'>
                            <Slider {...setting1}>
                                {genres.slice(4, 8).map((item) => (
                                    <GenreCard
                                        key={item.id}
                                        imageURL={item.imageURL}
                                        title={item.title}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TvShow;
