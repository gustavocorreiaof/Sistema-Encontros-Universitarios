import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import './Senha.css'
import '../CampoTexto.css'

const Senha = ({ valor, aoAlterado }) => {
    const [visivel, setVisivel] = useState(false)

    const alternarVisibilidade = () => {
        setVisivel(!visivel)
    }

    return (
        <div className="campo-texto">
            <label>Senha</label>
            <div className="campo-texto__container">
                <input
                    type={visivel ? "text" : "password"}
                    value={valor}
                    onChange={e => aoAlterado(e.target.value)}
                    required={true}
                    placeholder="Digite sua Senha..."
                />
                <span className="campo-texto__icone" onClick={alternarVisibilidade}>
                    {visivel ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                </span>
            </div>
        </div>
    )
}

export default Senha
