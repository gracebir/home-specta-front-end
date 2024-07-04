/** @format */
import { MdOutlineStarPurple500 } from "react-icons/md";
import PlusButton from "../button/PlusButton";
import WatchButton from "../button";

type TCard = {
    starsNumber: number;
    title: string;
    category: string;
    episode?: string;
    imageURL: string;
};

function Card({ starsNumber, title, category, episode, imageURL }: TCard) {
    const array = Array.from({ length: starsNumber }, (_, index) => index);
    return (
        <div
            style={{ backgroundImage: `url('${imageURL}')` }}
            className='bg-cover bg-no-repeat w-[235.12px] h-[298px] rounded-[20px] flex flex-col justify-between px-2 py-4'
        >
            <div className='px-2 flex flex-col gap-2'>
                <h1 className='text-2xl text-secondary font-bold'>{title}</h1>
                <div className='text-active flex'>
                    {array.map((item) => (
                        <MdOutlineStarPurple500 key={item} size={16} />
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <span>{episode}</span>
                    <span>{category}</span>
                </div>
                <div className='flex justify-between'>
                    <PlusButton />
                    <WatchButton />
                </div>
            </div>
        </div>
    );
}

export default Card;
