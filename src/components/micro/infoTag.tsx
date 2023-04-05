import { Box, Title, Text } from '@mantine/core';
import Image from 'next/image';

const InfoTag = ({ children, title, src }: any) => {
  return (
    <>
      <Box
        p={'2px '}
        my={'em'}
        w={{
          base: '100%',
          md: '100%',
          lg: '360px',
        }}
        sx={{
          borderRadius: '15px',
          backgroundImage: 'linear-gradient(to bottom right, #00aaff, #ff00aa)',
          backgroundClip: 'padding-box',
        }}
      >
        {/*@ts-ignore*/}
        <Box
          w={'100%'}
          h={'100%'}
          bg={'#fff'}
          sx={{
            borderRadius: '15px',
            padding: '2em',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Image src={src} width={100} height={100} alt={'Image'} />
          </Box>

          <Title className={'gradientText duplicate'}>{title}</Title>

          <Text my={'0.5em'}>{children}</Text>
        </Box>
      </Box>
    </>
  );
};

export default InfoTag;
