import React from 'react';
import styles from './TestPayment.module.css';
import { Header } from '../components/Header';
import Button from '../components/Button';
import { ContainerResumeCart } from '../components/ContainerResumeCart';
import { ContainerCardInformation } from '../components/ContainerCardInformation';
import { useNavigate } from 'react-router-dom';

export const TestPayment = () => {
  const [numeroCartao, setNumeroCartao] = React.useState();
  const [nomeCartao, setNomeCartao] = React.useState();
  const [validadeCartao, setValidadeCartao] = React.useState();
  const [codigoCartao, setCodigoCartao] = React.useState();
  const [buttonValidator, setButtonValidator] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (numeroCartao && nomeCartao && validadeCartao && codigoCartao) {
      setButtonValidator(false);
    }
  }, [numeroCartao, nomeCartao, validadeCartao, codigoCartao]);

  const saveInformation = () => {
    const dados = {
      numero: numeroCartao,
      nome: nomeCartao,
      validade: validadeCartao,
    };
    const dadosFormated = JSON.stringify(dados);
    window.localStorage.setItem('dados', dadosFormated);
    navigate('/sucess');
  };
  return (
    <div>
      <Header />
      <div className={styles.containerFullBox}>
        <p className={styles.text}>CARTÃO DE CRÉDITO</p>
        <div className={styles.containerItensLits}>
          <ContainerCardInformation
            setNumeroCartao={setNumeroCartao}
            setNomeCartao={setNomeCartao}
            setValidadeCartao={setValidadeCartao}
            setCodigoCartao={setCodigoCartao}
          />
        </div>
        <ContainerResumeCart />
        <div style={{ paddingLeft: '10px' }}>
          {' '}
          <Button
            disabled={buttonValidator ? true : false}
            text="FINALIZAR O PEDIDO"
            onClick={saveInformation}
          />
        </div>
      </div>
    </div>
  );
};
