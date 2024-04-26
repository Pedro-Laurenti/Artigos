import Link from "next/link";

export default function NotFound() {
    return (
        <div className='mt-40 my-4 text-center flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl'>404</h2>
                <p>Não podemos achar esta página</p>
                <Link href='/' className="bg-appBlue-100 hover:bg-appBlue-200 dark:bg-appBlue-50 dark:hover:bg-appGray-300  p-2.5 mt-2 text-white hover:text-white ">Voltar para o início</Link>
            </div>
        </div>
    );
}
