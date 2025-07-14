import './Modal.css'
import Botao from "../../Botao";
import Icon from 'feather-icons-react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`modal-overlay ${isOpen ? 'show' : ''}`}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Icon onClick={onClose} icon='x' size={'40px'} className='x-icon'/>
        
        <Icon className='map-pin-icon' icon='map-pin' size={'100px'} />

        <h1>Qual forma deseja fazer o CheckIn?</h1>
        <div className="alert-gps-area">
            <Icon icon='alert-circle' />
            <h3>A localização precisa estar ativa!</h3>
        </div>
        
        <div className="btnArea">
          <Botao boxShadow={true}>QR CODE</Botao>
          <Botao boxShadow={true}>CÓDIGO</Botao>
        </div>
      </div>
    </div>
  );
};

export default Modal