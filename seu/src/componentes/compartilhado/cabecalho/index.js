import './Cabecalho.css'
import './LogoAndTitle.css'
import './NavBar.css'
import LogoLetras from '../../../Imagens/LogoLetras.png';
import LogoSIEU from '../../../Imagens/LogoSIEU.png';

const Cabecalho = () => {
    return(
        <div className='cabecalho'>
            <div className='LogoAndTitle'>
                <div className='Logo'>
                    <img className='Logo' src={LogoSIEU}></img> 
                </div>
                <div className='Title'>
                    <img src={LogoLetras}></img>
                </div>                
            </div>

            <div className='Center'>
                <nav className='navBar'>
                    <a href='/'>Palestras</a>
                    <a href='/'>Sobre</a>
                </nav>
            </div>
            
            <div className='LoggedUser'>
                <div>
                    Gustavo Correia
                </div>
            </div>
        </div>
    )
}

export default Cabecalho