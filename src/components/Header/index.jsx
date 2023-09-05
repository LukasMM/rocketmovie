import { Link } from 'react-router-dom'

import { Container, Brand, Search, Profile } from './styles'

import { Input } from '../../components/Input'

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile>
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <span>sair</span>
        </div>

        <Link to="/profile">
          <img
            src="https://github.com/rodrigorgtic.png"
            alt="Foto do usuário"
          />
        </Link>
      </Profile>
    </Container>
  )
}