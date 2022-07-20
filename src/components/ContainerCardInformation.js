import React from 'react';

import { styleInline } from './mockStylesComponents';

export const ContainerCardInformation = ({
  setNumeroCartao,
  setNomeCartao,
  setValidadeCartao,
  setCodigoCartao,
}) => {
  return (
    <div style={{ paddingLeft: '10px' }}>
      <div style={styleInline.bigContainerCard}>
        <label style={styleInline.labelText}>Número do cartão:</label>
        <input
          onChange={({ target }) => setNumeroCartao(target.value)}
          style={styleInline.input}
          type="text"
          placeholder="____.____.____.____"
        />
      </div>
      <div style={styleInline.bigContainerCard}>
        <label style={styleInline.labelText}>Nome do Titular:</label>
        <input
          onChange={({ target }) => setNomeCartao(target.value)}
          style={styleInline.input}
          type="text"
          placeholder="Como no cartão"
        />
      </div>
      <div style={{ display: 'flex' }}>
        <div style={styleInline.mediumContainerCard}>
          <label style={styleInline.labelText}>Validade (mês/ano):</label>
          <input
            onChange={({ target }) => setValidadeCartao(target.value)}
            style={styleInline.inputMedium}
            type="text"
            placeholder="__/___"
          />
        </div>
        <div style={styleInline.smallContainerCard}>
          <label style={styleInline.labelText}>CVV:</label>
          <input
            onChange={({ target }) => setCodigoCartao(target.value)}
            style={styleInline.inputSmall}
            type="text"
            placeholder="___"
          />
        </div>
      </div>
    </div>
  );
};
