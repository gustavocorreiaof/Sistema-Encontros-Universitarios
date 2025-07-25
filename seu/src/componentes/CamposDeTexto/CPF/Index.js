import '../CampoTexto.css'
import './CPF.css'
import Icon from 'feather-icons-react';

const CPF = ({ valor, aoAlterado}) => {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>CPF</label>
            <div className="campo-texto__container">
                <span className="campo-texto_icone_esquerda">
                    <Icon icon='user' />
                </span>

                <input className='campo-texto-cpf'
                    value={valor}
                    onChange={aoDigitado}
                    required={true}
                    placeholder="Digite seu CPF"
                />
            </div>
        </div>
    )
}

export default CPF