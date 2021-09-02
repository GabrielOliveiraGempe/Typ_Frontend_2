import MenuLateral from "../../../Components/MenuLateral/index";
import { Container } from "./style";
import IlustracaoAlunoImg from '../../../Assets/ilustracao_alumni.svg'
import IlustracaoNotasImg from '../../../Assets/ilustracao_nota.svg'
import IlustracaoInicioImg from '../../../Assets/ilustracao_inicio.svg'
import { useHistory } from "react-router";
import FeitosaPerfilImg from '../../../Assets/feitosa_perfil.png'

export default function InicioAdmin() {
  const history = useHistory()
  const menuLinks = [
    {
      path: '/Rematricula'
    },
    {
      path: '/Historico-Escolar'
    }
  ]

  return (
    <Container>
      <MenuLateral />
      <main>
        <header>
          <h1>Bem vindo ao Typ Education </h1>
          <div className="perfil">
            <span>Gabriel Feitosa <br/> <strong>@a2211122</strong></span>
            <img src={FeitosaPerfilImg}/>
          </div>
        </header>
        <div className="etiquetas">
          <div>
            <img src={IlustracaoInicioImg} alt="" />
          </div>
          <div className="etiqueta-item"
            onClick={() => history.push(menuLinks[0].path)}
          >
            <header>
              <h2>Aluno(a) Typ</h2>
              <img src={IlustracaoAlunoImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o procedimentos referente a sua rematrícula!</p>
          </div>
          
          <div 
            className="etiqueta-item position"
            onClick={() => history.push(menuLinks[0].path)}
          >
            <header>
              <h2>Histórico Escolar</h2>
              <img src={IlustracaoNotasImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui visualizar as notas e frequências referentes as disciplinas cursadas!</p>
          </div>
        </div>
      </main>
    </Container>
  )
}