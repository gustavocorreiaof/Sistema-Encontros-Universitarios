import Cabecalho from "../componentes/compartilhado/Cabecalho";
import Modal from "../componentes/compartilhado/Modal/Index";
import SecaoExplorarEventos from "../componentes/compartilhado/SecaoExplorarEventos/SecaoExplorarEventos";
import { useState } from "react";

const PaginaInicial = () =>{
    
    const [open, setOpen] = useState(false);

    return(

        <>
            <Cabecalho setOpen={setOpen} />
            <SecaoExplorarEventos />
            <Modal isOpen={open} onClose={() => setOpen(false)}></Modal>
        </>
    );
}

export default PaginaInicial