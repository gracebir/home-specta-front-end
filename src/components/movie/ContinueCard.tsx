/** @format */

import { LuThumbsDown } from "react-icons/lu";

type TContinue = {
    imageUrl: string;
    title: string;
    episode: string;
    progress: number;
};

function ContinueCard({ imageUrl, title, episode, progress }: TContinue) {
    return (
        <div className='w-[206px] h-[126px] rounded-xl bg-[#16181E] border border-inactive flex flex-col gap-2 p-2'>
            <div className='flex justify-between gap-2'>
                <div className='h-[59px] w-[55px] rounded-lg'>
                    <img
                        className='h-full w-full rounded-lg'
                        src={imageUrl}
                        alt={title}
                    />
                </div>
                <div className='flex flex-col justify-between flex-1 items-center'>
                    <div>
                        <h3>{title}</h3>
                        <span>{episode}</span>
                    </div>
                    <div className={`h-[3px] w-full bg-secondary `}>
                        <div
                            style={{
                                width: `${progress * 100}%`,
                            }}
                            className={`h-[3px] bg-active`}
                        ></div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <button className='bg-[#F9F9F9] bg-opacity-20 flex items-center justify-center inset-0 backdrop-blur-xl h-[40px] w-[55px] rounded-[15px]'>
                    <LuThumbsDown size={20} />
                </button>
                <button className='bg-active text-sidebar px-6 py-1 font-extrabold duration-300 hover:bg-[#a0d9c8] text-base lg:text-lg rounded-3xl'>
                    Watch
                </button>
            </div>
        </div>
    );
}

export default ContinueCard;
