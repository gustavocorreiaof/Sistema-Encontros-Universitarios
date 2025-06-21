import './Cabecalho.css'
import LogoLetras from '../../../Imagens/LogoLetras.png';
import LogoSIEU from '../../../Imagens/LogoSIEU.png';

const Cabecalho = () =>{
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

            <div className='NavBar'>
                2
            </div>
            
            <div className='LoggedUser'>
                3
            </div>
        </div>
    )
}

export default Cabecalho