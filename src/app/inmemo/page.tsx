import { Metadata } from "next";
import Link from "next/link";

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

                <div className='text-white text-2xl'>
                    Página em estado de erro
                </div>
                <Link href='/' className="bg-appBlue-100 hover:bg-appBlue-200 dark:bg-appBlue-50 dark:hover:bg-appGray-300  p-2.5 mt-2 text-white hover:text-white ">
                    Voltar para o início
                </Link>
                <Link href='./inmemo/ofden' className="bg-black text-black absolute z-50 bottom-0 right-0 hover:text-gray-600">
                    ...
                </Link>

            </section>
        </>
    );
};

export default InMemo;
