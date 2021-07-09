import { useEffect } from 'react'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import sistemasActions from '../store/actions/sistemasActions'
import Title from '../components/Title'

export default function Home() {

  // const redux = useSelector(state => state)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(sistemasActions.edit_mode_sistemas(true))
  }, [])

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1>
          <Title/>
          Essa é a página inicial
        </h1>
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
