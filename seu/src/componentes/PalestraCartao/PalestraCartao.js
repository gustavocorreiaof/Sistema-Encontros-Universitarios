import './PalestraCartao.css'

const PalestraCartao = ({ imagem, titulo, data, horario, localizacao }) =>{

  return (
    <div className="palestra-cartao">
      <div
        className="palestra-cartao-imagem"
        style={{ backgroundImage: `url(${imagem})` }}
      >
      </div>

      <div className="palestra-cartao-info">
        <div className="palestra-nome">{titulo}</div>
        <div className="palestra-meta">
          <div className="palestra-data">
            📅 {data} | {horario}
          </div>
          <div className="palestra-localizacao">📍 {localizacao}</div>
        </div>
      </div>
    </div>
  );
}

export default PalestraCartao