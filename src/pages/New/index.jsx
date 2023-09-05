/* eslint-disable react/no-unescaped-entities */
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>

        <Content>
          <h1>Novo filme</h1>

          <Form>
            <div>
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>

            <Textarea placeholder="Observações" />

            <h2>Marcadores</h2>

            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>

            <div>
              <Button title="Excluir filme" className="btn-secondary" />
              <Button title="Salvar alterações" />
            </div>
          </Form>
        </Content>
      </main>
    </Container>
  )
}