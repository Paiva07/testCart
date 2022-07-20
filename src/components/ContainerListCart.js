import React from 'react';
import { useLocation } from 'react-router-dom';
import { stylesInLine } from '../pages/mockStyles';
import { GlobalContext } from '../GlobalContext';

export const ContainerListCart = () => {
  const { produtos, setProdutos } = React.useContext(GlobalContext);
  const { pathname } = useLocation();
  if (!produtos) return null;
  return (
    <>
      {produtos &&
        produtos.items.map((produto, index) => (
          <div
            style={
              pathname !== '/sucess'
                ? stylesInLine.containerList
                : stylesInLine.containerListSucess
            }
            key={index}
          >
            <img
              style={
                pathname !== '/sucess'
                  ? stylesInLine.containerImage
                  : stylesInLine.containerImageSucess
              }
              src={produto.product.imageObjects[0].thumbnail}
              alt="img"
            />
            <div>
              <p style={stylesInLine.containerText}>
                {produto.product.name.replace(
                  ' - Máscara de Reconstrução 500g',
                  '',
                )}
              </p>
              {pathname !== '/sucess' ? (
                <p style={stylesInLine.containerPrice}>
                  {produto.product.priceSpecification.originalPrice.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'BRL' },
                  )}
                </p>
              ) : null}
            </div>
          </div>
        ))}
    </>
  );
};
