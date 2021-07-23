
import Head from 'next/head'

function ISR() {



  return (
    <div>
      <Head>
        <title>Regeneração Estática Incremental (ISR)</title>
      </Head>

      <main>
        <h1 style={{ color: 'red' }}>Regeneração Estática Incremental (ISR)</h1>
        {/* <h1>Renderização do lado do cliente:</h1>
        <h2>Recebe o html seco contendo todo o javascript que modifica o html no lado do cliente.</h2>

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
        </ul> */}

        <p>Quando uma solicitação é feita para uma página que foi pré-renderizada no momento da construção, ela mostrará inicialmente a página em cache.

Quaisquer solicitações à página após a solicitação inicial e antes de 10 segundos também são armazenadas em cache e instantâneas.
Após a janela de 10 segundos, a próxima solicitação ainda mostrará a página em cache (desatualizada)
Next.js dispara uma regeneração da página em segundo plano.
Assim que a página for gerada com sucesso, Next.js invalidará o cache e mostrará a página do produto atualizada. Se a regeneração do plano de fundo falhar, a página antiga permanecerá inalterada.
Quando uma solicitação é feita para um caminho que não foi gerado, Next.js irá renderizar a página no servidor na primeira solicitação. Solicitações futuras servirão ao arquivo estático do cache.</p>
      </main>

      <footer>

      </footer>
    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 10, // In seconds
//   }
// }


// export async function getStaticPaths() {
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }))

//   return { paths, fallback: 'blocking' }
// }

export default ISR