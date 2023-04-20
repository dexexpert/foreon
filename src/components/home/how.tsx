import ContainerLayout from '@/layouts/containerLayout';
import { Box, Title, Text, Flex } from '@mantine/core';
import InfoTag from '../micro/infoTag';
import Rounded from '@/components/micro/roundedSvg';

const Works = () => {
  const info: {}[] = [
    {
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678192073/foreon/Group_vhrmkc.svg',
      title: 'Deposit',
      text: `Connect your Cardano wallet, such as Nami or Eternl, and deposit the minimum amount of $FRN to open a market
             & Fund your wallet with Djed stablecoin to be able to Bet on future outcomes.`,
    },

    {
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678192074/foreon/Layer_13_oaldeu.svg',
      title: 'Trade',
      text: `Bet on future events by buying shares in the markets you know best.`,
    },

    {
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678192073/foreon/Group-1_szxsqe.svg',
      title: 'Profit',
      text: `Sell your shares at any time as the odds change and After the market resolves, redeem your winning shares and profit`,
    },
  ];

  return (
    <>
      <ContainerLayout>
        {/*@ts-ignore*/}
        <Box
          id={'how-it-works'}
          sx={{
            margin: '2em auto',
          }}
          w={{
            sm: '100%',
            md: '100%',
            lg: '95%',
          }}
          pos={'relative'}
          data-aos={'fade-up'}
        >
          <Box
            bg={'#22005D'}
            p={'4em 4em'}
            h={{ sm: '', lg: '50vh' }}
            sx={{
              borderRadius: '30px',
            }}
          >
            <Box
              pos={'absolute'}
              top={'-7em'}
              display={{
                base: 'none',
                lg: 'block',
              }}
              right={'-3em'}
            >
              <Rounded />
            </Box>

            <Title color={'#fff'} className={'works duplicate'} order={2}>
              How it Works
            </Title>
            <Text
              p={'0.5em 0'}
              className={'lap-text'}
              color={'#CFBCFF'}
              w={{ sm: '100%', md: '100%', lg: '480px' }}
            >
              Fund your wallet within seconds from your favourite crypto wallet
              like (Nami, Eternl, Typhoon)
            </Text>
          </Box>
          {/*@ts-ignore*/}
          <Box
            top={{ sm: '0', md: '0', lg: '-11em' }}
            sx={{
              position: 'relative',
            }}
          >

            <Flex


              gap={{
                base: '1em' ,
                lg: '1em'
              }}
              wrap={'wrap'}
              my={'1em'}
              justify={'center'}
            >
              {
                // @ts-ignore
                info.map(({ title, image, text },index) => {
                  return (
                    <>
                      <InfoTag key={index} src={image} title={title}>
                        {text}
                      </InfoTag>
                    </>
                  );
                })
              }
            </Flex>
          </Box>
        </Box>
      </ContainerLayout>
    </>
  );
};

export default Works;
