import './SecaoExplorarEventos.css'
import SearchIcon from '@mui/icons-material/Search';
import PalestraCartao from '../../PalestraCartao/PalestraCartao';

const SecaoExplorarEventos = () =>{
    return(
        <div className="explorar-eventos-body">
            
            <div className="explorar-eventos-pesquisar">
                <span><SearchIcon sx={{color: 'black'}} fontSize='large' /></span>
                <a>Pesquisar</a>
                <input placeholder='Digite o título da palestra...'></input>
            </div>


            <div className="explorar-eventos-palestras">
                <PalestraCartao
                    imagem="https://i.imgur.com/HJNz8CT.png"
                    titulo="Eu entendendo tudo"
                    data="Thursday, September 16"
                    horario="08:30 PM"
                    localizacao="Crateús, CE"
                />

                
                <PalestraCartao
                    imagem="https://i.imgur.com/2gXmHhB.png"
                    titulo="Eu entendendo só a metade"
                    data="Thursday, September 16"
                    horario="08:30 PM"
                    localizacao="Crateús, CE"
                />

                
                <PalestraCartao
                    imagem="https://i.imgur.com/ZeD5yw7.png"
                    titulo="Eu sem entender porra nenhuma"
                    data="Thursday, September 16"
                    horario="08:30 PM"
                    localizacao="Crateús, CE"
                />
            </div>

        </div>
    )
}

export default SecaoExplorarEventos