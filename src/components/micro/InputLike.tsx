import { Box, Title, Text } from '@mantine/core';
import Image from 'next/image';

const InputLike = ({ children, token, width }: any) => {
  return (
    <>
      <Box
        p={'2px  '}
        my={'em'}
        w={{
          base: '100%',
          md: '100%',
          lg: width ? width : '80%',
        }}
        sx={{
          borderRadius: '10px',
          backgroundImage: 'linear-gradient(to bottom right, #00aaff, #ff00aa)',
          backgroundClip: 'padding-box',
        }}
      >
        <Box
          w={'100%'}
          h={'100%'}
          bg={'#fff'}
          sx={{
            borderRadius: '10px',
            padding: '1em',
          }}
        >
          <Title order={3} color={'#000'} w={'100%'} size={'18px'}>
            {children}
          </Title>

          <Text>{token}</Text>
        </Box>
      </Box>
    </>
  );
};

export default InputLike;
