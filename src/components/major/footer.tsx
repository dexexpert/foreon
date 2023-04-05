import { Box, Title, Text, Flex, Center } from '@mantine/core';
import ContainerLayout from '@/layouts/containerLayout';
import { NormalText, Typography } from '@/components/micro/Typography';
import { ButtonInterface } from '@/components/tinyUtils';
import FooterAsset from '@/components/micro/footerAsset';

const Footer = () => {
  return (
    <>
      <Box
        bg={'#22005D'}
        pt={'8em'}
        pb={'2em'}
        color={'#fff !important'}
        sx={{
          textAlign: 'center',
        }}
      >
        <ContainerLayout>
          <Typography color={'#fff'} span={'Foreon Team'}>
            Join
          </Typography>

          <Box
            w={{
              sm: '100%',
              md: '100%',
              lg: '60%',
            }}
            mx={'auto'}
          >
            <Text
              weight={'500'}
              size={'35px'}
              my={'0.5em'}
              className={'footer-text'}
            >
              Join our team at Foreon Network as a frontend, backend developer
              or smart contract engineer.
            </Text>
            {/*@ts-ignore*/}

            <Box my={'4em'}>
              <Text
                size={'19.5px'}
                w={{ base: '100%', lg: '86%' }}
                mx={'auto'}
                my={'2em'}
                color={'#CAC5CA'}
              >
                We are seeking talented and driven individuals with a passion
                for creating fair and efficient markets using blockchain
                technology, particularly the Cardano Blockchain.
              </Text>
            </Box>

            <Center>
              <a className={'remove-link'} href={''}>
                <ButtonInterface>
                  Apply now to be a part of our team
                </ButtonInterface>
              </a>
            </Center>
          </Box>
        </ContainerLayout>

        <FooterAsset />
      </Box>
    </>
  );
};

export default Footer;
