/** @format */
import banner1 from "../../assets/banner-1.png";

function Banner() {
    return (
        <div className='h-[459px] rounded-2xl border'>
            <div
                className='h-full bg-cover'
                style={{
                    backgroundImage: `url(${banner1})`,
                }}
            ></div>
        </div>
    );
}

export default Banner;
