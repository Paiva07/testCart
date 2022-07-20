import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.headerContainer}>
      <ul>
        <li
          style={pathname === '/' ? { color: ' #FF7800' } : { color: '#ccc' }}
        >
          SACOLA
        </li>
        <li
          style={
            pathname === '/payment' ? { color: ' #FF7800' } : { color: '#ccc' }
          }
        >
          PAGAMENTO
        </li>
        <li
          style={
            pathname === '/sucess' ? { color: ' #FF7800' } : { color: '#ccc' }
          }
        >
          CONFIRMAÇÃO
        </li>
      </ul>
    </div>
  );
};
