import React from 'react';
import styles from './TestSucess.module.css';
import { Header } from '../components/Header';
import { ContainerResumeCart } from '../components/ContainerResumeCart';
import { ContainerListCart } from '../components/ContainerListCart';
import Sucess from '../components/assets/img.png';
import { ContainerConsumerInformation } from '../components/ContainerConsumerInformation';

export const TestSucess = () => {
  const dados = window.localStorage.getItem('dados');
  const teste = 'teste';
  return (
    <div>
      <Header />
      <div className={styles.containerFullBox}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '12px 0 20px 0',
          }}
        >
          <img src={Sucess} alt="imgSucess" />
        </div>
        <p className={styles.text}>PAGAMENTO</p>
        <ContainerConsumerInformation dados={dados} />
        <p className={styles.text}>PRODUTOS</p>
        <div className={styles.containerItensLits}>
          <ContainerListCart />
        </div>
        <ContainerResumeCart />
      </div>
    </div>
  );
};
