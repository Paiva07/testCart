import React from 'react';
import { styleInline } from './mockStylesComponents';

export const ContainerConsumerInformation = ({ dados }) => {
  const dadosFormated = JSON.parse(dados);

  return (
    <div style={styleInline.boxFinally}>
      <p style={styleInline.textFinally}> {dadosFormated.numero}</p>
      <p style={styleInline.textFinally}>{dadosFormated.nome.toUpperCase()}</p>
      <p style={styleInline.textFinally}> {dadosFormated.validade}</p>
    </div>
  );
};
