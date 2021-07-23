
import Head from 'next/head'

export default function Ssr() {



  return (
    <div>
      <Head>
        <title>Server Side Render - SSR ou "Renderização dinâmica"</title>
      </Head>

      <main>
        <h1>Server Side Render - SSR ou "Renderização dinâmica"</h1>
        <h4>- getServerSideProps --> Esta função busca dados externos pelo servidor, renderiza o HTML com os dados e manda ao cliente. Função chamada pelo servidor a cada solicitação.</h4>
        <h2>Renderização do lado do servidor da aplicação front-end: (necessita do node instalado no servidor?)</h2>
        <h2>O HTML da página é gerado a cada solicitação.</h2>
        

        <h3>Quando usar:</h3>
        <ul>
          <li>Quando tem a necessidade de um SPA, mas precisa de um loading mais rápido</li>
          <li>Quando o conteúdo muda frequentemente</li>
          <li>Quando trabalha com um número muito grande de páginas</li>
          <li>Quando precisa de uma boa indexação dos motores de busca</li>
        </ul>

        <h3>Exemplos:</h3>
        <ul>
          <li>ECommerces</li>
          <li>Sites de Notícias</li>
        </ul>
      </main>

      <footer>

      </footer>
    </div>
  )
}
