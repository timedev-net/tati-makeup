
import Head from 'next/head'

function Ssg({ post }) {



  return (
    <div>
      <Head>
        <title>Static Site Generation - SSG</title>
      </Head>

      <main>
        <h1>Static Site Generation - SSG</h1>
        <h2>Esse é o padrão adotado pelo Next.js se não passar nenhuma configuração.</h2>
        <h3>Os métodos abaixo servem para buscar dados externos antes do build</h3>
        <h4>- getStaticProps</h4>
        <h4>- getStaticPaths</h4>
        <h2>Geração estática "recomendada":</h2>
        <h2>O HTML é gerado no momento da construção e será reutilizado em cada solicitação.</h2>

        <h3>Quando usar:</h3>
        <ul>
          <li>Site simples sem muita interação do usuário</li>
          <li>Se o conteúdo muda pouco</li>
          <li>Quando a performance é extremamente importante</li>
        </ul>

        <h3>Exemplos:</h3>
        <ul>
          <li>Landing Page</li>
          <li>Páginas de marketing</li>
          <li>Postagens de blogs</li>
          <li>Listagens de produtos de comércio eletrônico</li>
          <li>Portifólios</li>
          <li>Ajuda e documentação</li>
        </ul>

        <p>Se uma página usa geração estática , o HTML da página é gerado no momento da construção . Isso significa que na produção, o HTML da página é gerado quando você executa next build. Esse HTML será então reutilizado em cada solicitação. Ele pode ser armazenado em cache por um CDN.</p>
        <p>você pode gerar páginas estaticamente com ou sem dados .</p>

        <h3>Geração estática com dados</h3>
        <p>
          Algumas páginas requerem a busca de dados externos para pré-renderização. Existem dois cenários, e um ou ambos podem ser aplicáveis. Em cada caso, você pode usar estas funções que Next.js fornece:
        </p>
        <p>O conteúdo da sua página depende de dados externos: Use <b>getStaticProps</b>. Exemplo : sua página de blog pode precisar buscar a lista de postagens de blog de um CMS (sistema de gerenciamento de conteúdo).</p>
        <p>Os caminhos de sua página dependem de dados externos: Use <b>getStaticPaths </b>(em conjunto com o <b>getStaticProps</b>).</p>
        <p><b>Você deve se perguntar: </b>"Posso pré-renderizar esta página antes da solicitação de um usuário?" Se a resposta for sim, você deve escolher Geração estática.</p>
        <p>Para fazer uma página usar geração estática, exporte o componente da página ou exporte getStaticProps(e getStaticPathsse necessário).</p>
        <p><b>OBS. Misturando abordagens: </b>Quando puder use a geração estática com <b>renderização do lado do cliente:</b> você pode pular a pré-renderização de algumas partes de uma página e, em seguida, usar JavaScript do lado do cliente para preenchê-las.</p>
          
          
      </main>

      <footer>

      </footer>
    </div>
  )
}

// quando os caminhos da sua página dependem de dados externos
// gera os estáticos para cada página de post no build
// export async function getStaticPaths() {
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }))

//   return { paths, fallback: false }
// }

// pega os dados apenas 1 vez em tempo de construção,
// quando der o build na aplicação executa a função e gera os estáticos com os dados da consulta
// export async function getStaticProps({ params }) {

//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()

//   return {
//     props: {
//       post,
//     },
//   }
// }

export default Ssg