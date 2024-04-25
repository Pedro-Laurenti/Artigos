import { getRandomGradientColor } from "@/utils/utils";
import Link from "next/link";
import { allTypesContent } from "@/data";

const ContentsTypeCard = () => {
    const styleCss =
        "flex items-center justify-center rounded-md bg-appGray-200 px-4 pb-2 text-appGray-400 hover:text-white hover:bg-appBlue-100 shadow-none hover:shadow-lg transition-all mb-3 md:mx-5 mx-2 bg-gradient-to-r text-xl pt-2 cursor-pointer dark:bg-appBlue-50 dark:hover:text-appGray-100 dark:hover:bg-appBlue-100 transform hover:scale-105 w-auto";
    return (
        <>  
            {allTypesContent.map((content, index) => {
                return (
                    <Link href={content.url} key={index}>
                        <span
                            className={styleCss}
                        >
                            {content.name}
                        </span>
                    </Link>
                );
            })}
        </>
    );
};

export default ContentsTypeCard;
