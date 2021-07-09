// import styled from 'styled-components'
// import { ActiveLink } from './ActiveLink'
import Link from 'next/link';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { supabase } from "../services/supabase"

// const Header = styled.h1`
//   color: red;
//   font-size: 50px;
// `

export function Header() {

  const { user } = useContext(AuthContext)

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
    <header>
      <h1>meu Headeer</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/produtos'>
          <a>Produtos</a>
        </Link>
        <Link href='/feed'>
          <a>Feed</a>
        </Link>
      </div>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>
    </header>
  )
}