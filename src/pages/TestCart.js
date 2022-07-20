import React from 'react';
import styles from './TestCart.module.css';
import { Header } from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { stylesInLine } from './mockStyles';
import { GlobalContext } from '../GlobalContext';
import { ContainerResumeCart } from '../components/ContainerResumeCart';
import { ContainerListCart } from '../components/ContainerListCart';

const TestCart = () => {
  const { produtos, setProdutos } = React.useContext(GlobalContext);

  React.useEffect(() => {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);
  const navigate = useNavigate();

  const goPayment = () => {
    navigate('/payment');
  };

  return (
    <div>
      <Header />
      <div className={styles.containerFullBox}>
        <p className={styles.text}>PRODUTOS</p>
        <div className={styles.containerItensLits}>
          <ContainerListCart />
        </div>
        <ContainerResumeCart />
        <div style={{ paddingLeft: '10px' }}>
          {' '}
          <Button text="SEGUIR PARA O PAGAMENTO" onClick={goPayment} />
        </div>
      </div>
    </div>
  );
};

export default TestCart;
