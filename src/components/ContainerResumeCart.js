import React from 'react';
import { stylesInLine } from '../pages/mockStyles';
import { GlobalContext } from '../GlobalContext';

export const ContainerResumeCart = () => {
  const { produtos, setProdutos } = React.useContext(GlobalContext);

  if (!produtos) return null;
  return (
    <div style={stylesInLine.containerResumePrice}>
      {produtos && (
        <div>
          <p style={stylesInLine.containerResumeBox}>
            <span>PRODUTOS</span>{' '}
            <span>
              {produtos.subTotal.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>{' '}
          </p>
          <p style={stylesInLine.containerResumeBox}>
            <span>FRETE</span>{' '}
            <span>
              {produtos.shippingTotal.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>{' '}
          </p>
          <p style={stylesInLine.containerResumeBoxThridChild}>
            <span>DESCONTO</span>{' '}
            <span>
              -{' '}
              {produtos.discount.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>{' '}
          </p>
          <p style={stylesInLine.containerResumeBoxLastChild}>
            <span>TOTAL</span>{' '}
            <span>
              {produtos.total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>{' '}
          </p>
        </div>
      )}
    </div>
  );
};
