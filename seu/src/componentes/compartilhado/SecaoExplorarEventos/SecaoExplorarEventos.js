import './SecaoExplorarEventos.css'
import SearchIcon from '@mui/icons-material/Search';

const SecaoExplorarEventos = () =>{
    return(
        <div className="explorar-eventos-body">
            
            <div className="explorar-eventos-pesquisar">
                <span><SearchIcon sx={{color: 'black'}} fontSize='large' /></span>
                <a>Pesquisar</a>
                <input placeholder='Digite o título da palestra...'></input>
            </div>

        </div>
    )
}

export default SecaoExplorarEventos