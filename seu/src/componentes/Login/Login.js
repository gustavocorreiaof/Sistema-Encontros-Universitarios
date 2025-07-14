import { useState } from 'react'
import Botao from '../Botao'
import CPF from '../CamposDeTexto/CPF/Index'
import './Login.css'
import Senha from '../CamposDeTexto/Senha/Senha'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const efetuarLogin = async (evento) => {
        try {
            evento.preventDefault();

            const cpfSemCaracteres = cpf.replace(/[^0-9]/g, '');

            const response = await axios.get('http://localhost:8080/alunos/' + cpfSemCaracteres);

            if(response.data === false){
                console.log('teste')
            }
            else if (response.status === 200) {
                navigate('/paginaInicial');
            }
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

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
            <form onSubmit={efetuarLogin}>                
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
