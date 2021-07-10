// import styled from 'styled-components'
// import { ActiveLink } from './ActiveLink'
// import Link from 'next/link';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { supabase } from "../services/supabase"
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router'

// const Header = styled.h1`
//   color: red;
//   font-size: 50px;
// `

export function Header(): any {
  const router = useRouter()
  const { Header } = Layout;

  const { user } = useContext(AuthContext)

  // const handleClick = (e) => {
  //   // e.preventDefault()
  //   router.push('/')
  // }

  console.log(user);

  async function login() {
    const { error } = await supabase.auth.signIn({
      provider: 'github',
    })
    if (error) {
      console.log(error);
      return;
    }
  }

  async function logout() {
    await supabase.auth.signOut();
  }

  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
          <Menu.Item onClick={() => router.push('/')}>Home</Menu.Item>
          <Menu.Item onClick={() => router.push('/produtos')}>Produtos</Menu.Item>
          <Menu.Item onClick={() => router.push('/feed')}>Feed</Menu.Item>
            <Menu.Item onClick={login}>Login</Menu.Item>
            <Menu.Item onClick={logout}>Logout</Menu.Item>
      </Menu>
    </Header>
  )
}