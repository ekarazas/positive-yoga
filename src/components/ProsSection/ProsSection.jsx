import React from 'react';
import * as S from './ProsSection.style';
import { ProsData } from './ProsData';

import Pro from '../Pro/Pro';

const ProsSection = () => {
  return (
    <>
      <S.Container>
        <S.Title>What's in my program?</S.Title>
        {ProsData.map((item) => {
          return (
            <Pro
              key={item.id}
              src={item.src}
              title={item.title}
              subtitle={item.subtitle}
            />
          );
        })}
      </S.Container>
    </>
  );
};

export default ProsSection;
