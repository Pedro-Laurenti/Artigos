// "use client"
// import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
// 
// export default function Flow() {
// return (
//   <>
//     <Tabs className={'mb-10'}>
//       <TabList className={' flex '}>
//           <Tab className={' cursor-pointer border-0 px-10 py-1 aria-selected:text-white aria-selected:bg-appBlue-200 bg-appBlue-100 rounded-tl-lg'}>1</Tab>
//           <Tab className={' cursor-pointer border-0 px-10 py-1 aria-selected:text-white aria-selected:bg-appBlue-200 bg-appBlue-100 '}>2</Tab>
//           <Tab className={' cursor-pointer border-0 px-10 py-1 aria-selected:text-white aria-selected:bg-appBlue-200 bg-appBlue-100 rounded-tr-lg'}>3</Tab>
//       </TabList>
//       <TabPanel>Content for Tab 1</TabPanel>
//       <TabPanel>Content for Tab 2</TabPanel>
//       <TabPanel>Content for Tab 3</TabPanel>
//     </Tabs>
//   </>
// );
// }

import Link from "next/link";
import Text from "../Text/Text";

export default function Flow() {
return (
  <div className="mt-5 py-10 bg-appGray-100 rounded-md dark:bg-slate-800 dark:text-white drop-shadow-lg flex flex-col justify-between pb-5">
    <div className="relative flex flex-col items-center">
      <div className="z-10 w-4/5 flex flex-col gap-10">
      <div className="p-2 bg-appGray-100 dark:bg-slate-800 rounded-md border-2 border-solid flex gap-10 items-center">
          <Text subtitle className="mb-4 mt-2 dark:text-appBlue-50 text-appBlue-100">1.</Text>
          <div>
          <b>Prepare o seu artigo</b> para submissão, observe se o documento que pretende enviar:
          <li>Está em formato PDF</li>
          <li>Segue as normas da ABNT</li>
          </div>
        </div>
        <div className="p-2 bg-appGray-100 dark:bg-slate-800 rounded-md border-2 border-solid flex gap-10 items-center">
          <Text subtitle className="mb-4 mt-2 dark:text-appBlue-50 text-appBlue-100">2.</Text>
          <div>
            Faça a <b>Submissão do artigo</b> entrando em contato diretamente pelo nosso e-mail ou por WhatsApp, pedimos que a mensagem siga com a seguinte estrutura:
            <div className="bg-slate-200 dark:bg-slate-700 rounded-lg my-4 p-2 leading-relaxed">
              <code>
                Seu nome: (...)<br />
                <br />
                Título do artigo: (...)<br />
                <br />
                Tags: (<Link href={'/tags'} className="underline decoration-dashed">Tags do site</Link> que melhor descrevem o artigo)<br />
                <br />
                Resumo: (Breve resumo contendo máximo 100 palavras)<br />
                <br />
                Artigo em anexo: (Em formato PDF)
              </code>
            </div>
            <a className="py-2 px-5 rounded-md text-white hover:text-white bg-appBlue-100 dark:bg-appBlue-50 hover:bg-appBlue-200 dark:hover:bg-appBlue-100" href="https://wa.me/556298711540">
                Entrar em contato
            </a>
          </div>
        </div>
        <div className="p-2 bg-appGray-100 dark:bg-slate-800 rounded-md border-2 border-solid flex gap-10 items-center">
          <Text subtitle className="mb-4 mt-2 dark:text-appBlue-50 text-appBlue-100">3.</Text>
          <div>
            Os artigos submetidos passarão pelo processo de revisão por uma banca avaliadora, acompanhe os <Link href={'/artigos'} className="underline decoration-dashed">artigos recentes</Link> para verificar se o seu foi selecionado.
          </div>
        </div>
      </div>
      <div className="absolute z-5 border-r-appBlue-100 rounded-md border-r-2 border-dashed w-1 h-full"></div>
    </div>
  </div>
);
}