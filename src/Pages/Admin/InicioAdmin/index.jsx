import MenuLateral from "../../../Components/MenuLateral/index";
import { Container } from "./style";
import IlustracaoAlunoImg from '../../../Assets/ilustracao_alumni.svg'
import IlustracaoProfessorImg from '../../../Assets/ilustracao_teacher.svg'
import IlustracaoDisciplinaImg from '../../../Assets/ilustracao_discipline.svg'
import IlustracaoNotasImg from '../../../Assets/ilustracao_nota.svg'
import { useHistory } from 'react-router-dom'
import GohanPerfilImg from '../../../Assets/gohanCalvo.png'


export default function InicioAdmin() {
  const history = useHistory()
  const menuLinks = [
    {
      path: '/admin/Cadastro-de-professores'
    },
    {
      path: '/admin/Cadastro-de-alunos'
    },
    {
      path: '/admin/Cadastro-de-disciplina'
    }, 
    {
      path: '/admin/lancamento'
    },
    {
      path: '/admin/Definicao-do-periodo-de-matricula'
    }
  ]

  return (
    <Container>
      <MenuLateral />
      <main>
        <h1>Dê as Boas vindas ao Typ Education</h1>
        <div className="etiquetas">
          <div className="etiqueta-item"
            onClick={ () => history.push(menuLinks[0].path) }
          >
            <header>
              <h2>Cadastro de Professores</h2>
              <img src={IlustracaoProfessorImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o cadastro de professores!</p>
          </div>
          <div className="etiqueta-item"
            onClick={ () => history.push(menuLinks[1].path) }
          >
            <header>
              <h2>Cadastro de Alunos</h2>
              <img src={IlustracaoAlunoImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o cadastro de Alunos!</p>
          </div>
          <div className="etiqueta-item"
            onClick={ () => history.push(menuLinks[2].path) }
          >
            <header>
              <h2>Cadastro de Disciplinas</h2>
              <img src={IlustracaoDisciplinaImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o cadastro de Disciplinas!</p>
          </div>
          <div className="etiqueta-item"
            onClick={ () => history.push(menuLinks[3].path) }
          >
            <header>
              <h2>Lançamento de Notas e <br/>Frequências</h2>
              <img src={IlustracaoNotasImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o lançamento das notas finais e frequências de aulas dos alunos!</p>
          </div>
          <div className="etiqueta-item"
            onClick={ () => history.push(menuLinks[4].path) }
          >
            <header>
              <h2>Definição de Período de <br /> Matrícula</h2>
              <img src={IlustracaoNotasImg} alt="" srcset="" />
            </header> 
            <p>Acesse aqui para realizar o lançamento das notas finais e frequências de aulas dos alunos!</p>
          </div>
        </div>
      </main>
    </Container>
  )
}