import { Metadata } from "next";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

export const metadata: Metadata = {
    title: "Entre em contato",
    description:
        "Conecte-se conosco para obter um conteúdo excepcional. Entre em contato via LinkedIn, E-mail, Relatórios ou Sugestões. Sua contribuição importa!",
    keywords:
        "entre em contato, entre em contato, entre em contato, LinkedIn, e-mail, relatórios, sugestões, serviço ao cliente, consultas, feedback",
};

const InMemo = async () => {
    return (
        <>
            <section className='fixed z-40 w-screen h-screen bg-black flex flex-col items-center justify-center gap-5'>

                <div className='text-white text-xl'>
                    In memorian of
                </div>
                <div className='text-white text-4xl'>
                    Den Rod
                </div>
                <div className='text-white text-xl'>
                    A good fella
                </div>
                <div className='text-black text-xs absolute z-50 bottom-0 left-0'>
                    ファックグラウコ
                </div>


            </section>
        </>
    );
};

export default InMemo;
