import './Cabecalho.css'
import './LogoAndTitle.css'
import './NavBar.css'
import LogoLetras from '../../../Imagens/LogoLetras.png';
import LogoSIEU from '../../../Imagens/LogoSIEU.png';

const Cabecalho = ( {setOpen}) => {
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
                    <button onClick={() => setOpen(true)}>Check-In</button>
                </div>
            </div>
        </div>
    )
}

export default Cabecalho