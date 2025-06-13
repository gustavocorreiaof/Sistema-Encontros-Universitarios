import '../CampoTexto.css'

const CPF = ({ valor, aoAlterado}) => {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>CPF</label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={true}
                placeholder="Digite seu CPF"
            />
        </div>
    )
}

export default CPF