/** @format */

function OutLineButton({ text }: { text: string }) {
    return (
        <button className='text-inactive border border-inactive px-8 py-2 duration-300 hover:text-active hover:border-active text-base lg:text-lg rounded-3xl'>
            {text}
        </button>
    );
}

export default OutLineButton;
