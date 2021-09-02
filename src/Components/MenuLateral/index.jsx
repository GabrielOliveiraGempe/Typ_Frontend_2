import { Container } from "./style"
import LogoImg from '../../Assets/Logo_branco.svg'
import HomeIcon from '../../Assets/Home.svg'
import ProfessorIcon from '../../Assets/Professor.svg'
import MatriculaIcon from '../../Assets/Matricula.svg'
import BoletimIcon from '../../Assets/Boletim.svg'
import { useHistory } from "react-router"

export default function MenuLateral() {
  const history = useHistory()
  const menuLinks = [
    {
      path: '/inicio'
    }, 
    {
      path: '/Boletim'
    },
    {
      path: '/Rematricula'
    }, 
    {
      path: '/Mapa-dos-professores'
    },
    {
      path: '/admin'
    }
  ]

  return (
    <Container>
      <div
        className="logo" 
        onClick={ () => history.push(menuLinks[4].path) }
      >
        <img src={LogoImg}/>
      </div>
      <div>
        <img 
          src={HomeIcon} 
          alt="" 
          onClick={ () => history.push(menuLinks[0].path) } 
        />
        <img 
          src={ProfessorIcon} 
          alt="" 
          onClick={ () => history.push(menuLinks[3].path) }
          />
        <img 
          src={BoletimIcon} 
          alt="" 
          onClick={ () => history.push(menuLinks[1].path) }
        />
        <img src={MatriculaIcon} 
        alt="" 
        onClick={ () => history.push(menuLinks[2].path) }
        />
      </div>
    </Container>
  )
}


// <Route exact path="/inicio">
// <InicioAluno />
// </Route> 
// <Route exact path="/Boletim">
// <Boletim />
// </Route> 
// <Route exact path="/Historico-Escolar">
// <HistoricoEscolar />
// </Route> 
// <Route exact path="/Rematricula">
// <Rematricula />
// </Route> 
// <Route exact path="/Mapa-dos-professores">
// <MapaProfessores />
// </Route> 