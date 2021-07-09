// import styled from 'styled-components'
import { ActiveLink } from './ActiveLink'

// const Header = styled.h1`
//   color: red;
//   font-size: 50px;
// `

export function Header() {
  return (
    <header>
      <h1>meu Headeer</h1>
      <div>
        <ActiveLink href='/'>
          <a>Home</a>
        </ActiveLink>
        <ActiveLink href='/produtos'>
          <a>Produtos</a>
        </ActiveLink>
      </div>
    </header>
  )
}