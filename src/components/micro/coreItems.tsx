import { Box, Text, Title } from '@mantine/core';

import Image from 'next/image';
import { JSXElement } from '@babel/types';
interface CoreItem {
  children: JSXElement;
  image?: any;
  title?: any;
  color?: any;
}

const CoreItems = ({ children, image, title, color }: CoreItem) => {
  return (
    <>
      <Box w={{ base: '100%', md: '100%', lg: '390px' }}>
        <Box
          bg={color}
          sx={{
            borderRadius: '1em 1em 0 0',
          }}
        >
          <Box
            display={'flex'}
            h={'25vh'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={image}
              alt={'Core Image'}
              width={160}
              height={100}
              className={'dangle'}
            />
          </Box>
        </Box>

        <Box
          py={'2em'}
          px={'1.5em'}
          w={'100%'}
          h={{ sm: '40vh', md: '40vh', lg: '280px' }}
          sx={{
            border: '1px solid #E6E1E6 ',
            borderRadius: '0 0 1em 1em ',
            pb: '3em !important',
          }}
        >
          <Box w={{ base: '100%', md: '150px', lg: '290px' }}>
            <Title
              order={3}
              className={'duplicate'}
              size={'24px'}
              color={'#000'}
              my={'0.5em'}
            >
              {title}
            </Title>
          </Box>
          <Text className="medium" color={'#AEAAAE'} size={'15.5px'}>
            {/*@ts-ignore*/}
            {children}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default CoreItems;
