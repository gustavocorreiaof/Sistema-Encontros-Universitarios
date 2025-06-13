import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Login = (props) => {

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
                <CampoTexto 
                    obrigatorio={true}
                    label="CPF"
                    placeholder="Digite seu CPF" 
                    valor={cpf}
                    aoAlterado={aoAlterarCPF}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Senha"
                    placeholder="Digite sua Senha" 
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}
                    tipoDoCampo="password"
                />                
                <Botao>
                    Entrar
                </Botao>
            </form>
        </section>
    )
}

export default Login
