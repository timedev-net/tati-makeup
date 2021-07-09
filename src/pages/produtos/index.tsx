import { useEffect } from 'react'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import sistemasActions from '../../store/actions/sistemasActions'


export default function Produtos() {

  // const redux = useSelector(state => state)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(sistemasActions.edit_mode_sistemas(true))
  }, [])

  return (
    <div>
      <Head>
        <title>Produtos</title>
      </Head>

      <main>
        <h1>
          Aqui vai a listagem dos produtos!
        </h1>
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
