import { Container } from '@mantine/core';
import { ReactNode } from 'react';

const ContainerLayout = ({ children }: any) => {
  return (
    <>
      <Container size={'xl'}>{children}</Container>
    </>
  );
};

export default ContainerLayout;
