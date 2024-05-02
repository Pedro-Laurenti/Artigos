import Link from "next/link";
import Image from "next/legacy/image";
import ProfilePic from "./photo.jpg";

const MyInfoCard = () => {
    const styleCss =
        "flex items-center justify-center rounded-md bg-appGray-200 px-4 pb-2 text-appGray-400 hover:text-white hover:bg-appBlue-100 shadow-none hover:shadow-lg transition-all mb-3 md:mx-5 mx-2 bg-gradient-to-r text-xl pt-2 cursor-pointer dark:bg-appBlue-50 dark:hover:text-appGray-100 dark:hover:bg-appBlue-100 transform hover:scale-105 w-auto";
    return (
        <>
            <div className='flex md:mx-5 flex-wrap items-center md:flex-col justify-center p-5'>
                <Image
                    height={150}
                    width={150}
                    quality={100}
                    className='rounded-full mt-5'
                    src={ProfilePic}
                    alt='Therapies Love Kids'
                    draggable='false'
                />
                <div className='flex flex-col md:flex-col md:items-center'>
                    <h1 className='w-full text-center mt-5 mb-0 text-2xl font-bold md:text-2xl text-appGray-400 dark:text-appGray-100'>Therapies Love Kids</h1>
                </div>
                
            </div>
            <div className='mt-5 flex flex-col mb-5 md:mt-0 md:flex-row md:items-center'>
                <Link href='/about'>
                    <span
                        className={styleCss}
                    >
                        About
                    </span>
                </Link>
                <Link href='/contact'>
                    <span
                        className={styleCss}
                    >
                        Contato
                    </span>
                </Link>
                {/* <Link href='/profiles'>
                    <span
                        className={styleCss}
                        style={{ background: `${getRandomGradientColor()}` }}
                    >
                        Profiles
                    </span>
                </Link> */}
            </div>
        </>
    );
};

export default MyInfoCard;
