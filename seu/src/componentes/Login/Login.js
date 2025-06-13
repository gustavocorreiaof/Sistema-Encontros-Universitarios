import { useState } from 'react'
import Botao from '../Botao'
import CPF from '../CamposDeTexto/CPF/Index'
import './Login.css'
import Senha from '../CamposDeTexto/Senha/Senha'

const Login = () => {

    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        setCpf('')
        setSenha('')
    }

    const formatarCPF = (valor) => {
        valor = valor.replace(/\D/g, '')

        valor = valor.substring(0, 11)

        valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2')

        return valor
    }

    const aoAlterarCPF = (valor) => {
        const cpfFormatado = formatarCPF(valor)
        setCpf(cpfFormatado)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>                
                <CPF 
                    obrigatorio={true}
                    label="CPF"
                    placeholder="Digite seu CPF" 
                    valor={cpf}
                    aoAlterado={aoAlterarCPF}
                />

                <Senha
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}
                />                
                <Botao>
                    Entrar
                </Botao>
            </form>
        </section>
    )
}

export default Login
