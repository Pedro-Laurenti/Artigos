import Link from "next/link";
import { allTypesContent } from "@/data";

const ContentsTypeCard = () => {
    const styleCss =
        "rounded-2xl bg-gradient-to-tl from-slate-300/80 to-slate-200/80 dark:from-slate-400/50 dark:to-slate-300/50 hover:text-appGray-100 hover:from-appBlue-200/50 hover:to-appBlue-50/50 dark:hover:from-appBlue-100/50 dark:hover:to-appBlue-50/50 px-6 py-4 mx-5 flex items-center justify-center shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] hover:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] dark:hover:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(0,0,0,0.3),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255,0.1)] [&_*]:transition-all [&_*]:ease-linear";
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
            <div className="w-[100%] flex justify-center my-5">
                <hr className='border-1 mx-auto mb-5 w-[50%]' />
            </div>
            
            <Link href='/sobre'>
                <span
                    className={styleCss}
                >
                    Sobre o projeto
                </span>
            </Link>
            <Link href='/institucional/termos-e-condicooes'>
                <span
                    className={styleCss}
                >
                    Institucional
                </span>
            </Link>
        </>
    );
};

export default ContentsTypeCard;
