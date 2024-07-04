/** @format */

import { GoChevronDown } from "react-icons/go";

function DropButton({ text }: { text: string }) {
    return (
        <button className='text-inactive border flex items-center gap-1 border-inactive px-8 py-2 duration-300 hover:text-active hover:border-active text-base lg:text-lg rounded-3xl'>
            <span>{text}</span>
            <GoChevronDown size={16} />
        </button>
    );
}

export default DropButton;
