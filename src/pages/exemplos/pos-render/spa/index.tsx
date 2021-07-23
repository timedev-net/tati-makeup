
import Head from 'next/head'
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Spa() {
  const { data, error } = useSWR('/api/user', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  return (
    <div>
      <Head>
        <title>Single Page Application - SPA com SWR - stale-while-revalidate</title>
        <div>hello {data.name}!</div>
      </Head>

      <main>
        <h1>Single Page Application - SPA com SWR - stale-while-revalidate</h1>
        <h1>Renderização do lado do cliente:</h1>
        <h2>Recebe o html seco ou com pouca estrutura contendo o javascript que modifica o html no lado do cliente.</h2>

        <h3>Quando usar:</h3>
        <ul>
          <li>Quando não se importa em indexar informações nos buscadores</li>
          <li>Quando quer muitas interações sem refresh da página</li>
          <li>Quando as informações são diferentes para cada usuário "autenticação e permissão"</li>
        </ul>
        <h3>Exemplos:</h3>
        <ul>
          <li>Facebook</li>
          <li>Spotify</li>
          <li>Twitter</li>
          <li>Diversos Sistemas</li>
        </ul>

        <p>O nome “SWR” é derivado de "stale-while-revalidate" uma estratégia de invalidação de cache HTTP. SWR é uma estratégia para primeiro retornar os dados do cache (obsoleto), em seguida, enviar a solicitação de busca (revalidar) e, finalmente, fornecer os dados atualizados.</p>
        <p>Com o SWR, os componentes receberão um fluxo de atualizações de dados constante e automaticamente .
E a IU será sempre rápida e reativa .</p>
      </main>

      <footer>

      </footer>
    </div>
  )
}
