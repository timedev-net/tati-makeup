import { useEffect } from 'react'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import sistemasActions from '../store/actions/sistemasActions'
import { Layout } from 'antd';
import { Sessao1, Sessao2 } from '../components/LandingPage'

export default function Home() {
  const { Content, Footer } = Layout;
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
      <Sessao1/>
      <Sessao2/>
      <Sessao1/>

      <Content style={{ padding: '0 50px' }}>        
        <div className="site-layout-content">Content</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Tati Nogueira Makeup & Acessórios ©2021</Footer>
      
    </div>
  )
}
