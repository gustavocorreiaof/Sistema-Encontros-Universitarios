import './Botao.css'

const Botao = (props) => {
    return (
        <div className='divBotao'>
            <button className={`botao ${props.boxShadow ? 'com-sombra' : ''}`}>
                {props.children}
            </button>
        </div>
    )
}

export default Botao