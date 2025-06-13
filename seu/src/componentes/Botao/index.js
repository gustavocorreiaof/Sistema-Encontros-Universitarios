import './Botao.css'

const Botao = (props) => {
    return (
        <div className='divBotao'>
            <button className='botao'>
                {props.children}
            </button>
        </div>
    )
}

export default Botao