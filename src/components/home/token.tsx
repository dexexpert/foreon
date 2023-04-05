import { Flex, Box, Text } from '@mantine/core';
import { flexDirection, flexSm } from '@/utils/responsiveParams';
import { NormalText, Tweak, Typography } from '@/components/micro/Typography';
import ContainerLayout from '@/layouts/containerLayout';
import InputLike from '@/components/micro/InputLike';

const TokenSection = () => {
  return (
    <>
      <Box className={'tokenBg'} py={{ sm: '2em', lg: '5em' }}>
        <ContainerLayout>
          <Flex
            data-aos={'fade-up'}
            justify={'space-between'}
            gap={'3em'}
            align={'center'}
            py={'3em'}
            direction={{ ...flexDirection }}
          >
            <Box w={{ base: '100%', md: '60px', lg: '55%' }}>
              <Box
                w={'100%'}
                h={'60vh'}
                className={'dangle'}
                sx={{
                  backgroundImage:
                    'url(https://res.cloudinary.com/dhkccnvyn/image/upload/v1678180534/foreon/Group_39883_zwloj3.svg)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></Box>
            </Box>

            <Box mx={'auto'} w={{ xs: '100%', md: '60px', lg: '100%' }}>
              <Tweak span={'Token'}>Foreon</Tweak>

              <Box my={'1em'}>
                <NormalText>
                  Foreon Network $FRN Utility token incentivizes participation,
                  increases liquidity, and enhances governance for a fair and
                  efficient decentralized prediction market. It enables users to
                  open markets and place bets with stable coins, reducing
                  volatility and promoting transparency.
                </NormalText>

                <Box my={'4em'}>
                  <InputLike token={'$FRN Policy ID'}>
                    <Text size={'18px'} className={'desktop-show'}>
                      533foreon0eenetworke483106489399112b74c905342...
                    </Text>

                    <Text size={'18px'} className={'mobile-show'}>
                      533foreon0eenetworke48042...
                    </Text>
                  </InputLike>

                  <Flex
                    gap={'1em'}
                    w={{
                      base: '100%',
                      md: '100%',
                      lg: '80%',
                    }}
                    direction={{ ...flexDirection }}
                    my={'1em'}
                  >
                    <InputLike token={'Token Name'}>Foreon</InputLike>
                    <InputLike token={'Token Symbol'}>$FRN</InputLike>
                    <InputLike token={'Total Supply'}>10,000,000</InputLike>
                  </Flex>

                  <Flex
                    gap={'1em'}
                    w={{
                      base: '100%',
                      md: '100%',
                      lg: '60%',
                    }}
                    direction={{ ...flexDirection }}
                    my={'1em'}
                  >
                    <InputLike token={'Token Type'} width={'50%'}>
                      Cardano Blockchain
                    </InputLike>
                    <InputLike width={'fit-content'} token={'Decimals'}>
                      6
                    </InputLike>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Flex>
        </ContainerLayout>
      </Box>
    </>
  );
};

export default TokenSection;
