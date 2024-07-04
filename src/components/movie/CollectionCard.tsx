/** @format */
import { LuPlus } from "react-icons/lu";

type TCollection = {
    imageUrl: string;
    title: string;
};

function CollectionCard({ imageUrl, title }: TCollection) {
    return (
        <div
            style={{ backgroundImage: `url('${imageUrl}')` }}
            className='bg-cover bg-no-repeat w-[210px] h-[120px] rounded-xl p-2 flex flex-col justify-between'
        >
            <h1 className='font-bold text-base'>{title}</h1>
            <div className='flex justify-between items-center'>
                <button className='bg-[#F9F9F9] bg-opacity-20 flex items-center justify-center inset-0 backdrop-blur-xl h-[40px] w-[55px] rounded-[15px]'>
                    <LuPlus size={20} />
                </button>
                <button className='bg-active text-sidebar px-6 py-1 font-extrabold duration-300 hover:bg-[#a0d9c8] text-base lg:text-lg rounded-3xl'>
                    Watch
                </button>
            </div>
        </div>
    );
}

export default CollectionCard;
