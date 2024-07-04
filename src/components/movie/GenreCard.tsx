/** @format */

type TGenre = {
    title: string;
    imageURL: string;
};

function GenreCard({ title, imageURL }: TGenre) {
    return (
        <div
            style={{ backgroundImage: `url('${imageURL}')` }}
            className='w-[210px] h-[99px] rounded-xl bg-no-repeat bg-cover flex items-center justify-center'
        >
            <h1 className='text-lg font-bold'>{title}</h1>
        </div>
    );
}

export default GenreCard;
