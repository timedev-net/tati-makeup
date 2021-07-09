// import styled from 'styled-components'
// import { ActiveLink } from './ActiveLink'
import Link from 'next/link';

// const Header = styled.h1`
//   color: red;
//   font-size: 50px;
// `

export function Header() {
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
      </div>
    </header>
  )
}