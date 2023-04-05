import ContainerLayout from '@/layouts/containerLayout';
import { Box, Flex, Text } from '@mantine/core';
import { NormalText, Typography } from '../micro/Typography';
import { flexDirection } from '@/utils/responsiveParams';
import CoreItems from '../micro/coreItems';

const Features = () => {
  const coreInfos: {}[] = [
    {
      bg: '#6750A4',
      title: 'Decentralized & Non Custodial',
      text: `Foreon Network is decentralized, meaning that predictions are controlled by smart contracts operating on a distributed network of computers that is not controlled by any single entity and outcomes resolved by Oracles like Chain-link.`,
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678306215/object_sm4uhr.svg',
    },
    {
      bg: '#22005D',
      title: 'Built On Cardano',
      text: `The Cardano blockchain's high level of security, scalability, and transparency makes it an ideal platform for decentralized prediction markets, and it is on this blockchain that the Foreon Network is built.`,
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678212343/foreon/Frame_1_k4qsdn.svg',
    },
    {
      bg: '#5138F6',
      title: 'Create A Market On Any Event',
      text: `Anyone can create a market on any event that you believe is worth predicting. Whether it's a political election, a Sportss game, or even the weather, Foreon Network enables you to set up a market and invite others to participate in predicting the outcome.`,
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678198794/foreon/Isolation_Mode_ezzqao.svg',
    },
    {
      bg: '#A002BF',
      title: 'Automatic Settlement',
      text: `Foreon Network offers automatic settlement of payouts through smart contracts once an event's outcome is determined, promoting transparency and confidence among participants without the need for a central authority.`,
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678198794/foreon/Isolation_Mode_owfgh0.svg',
    },
    {
      bg: '#350041',
      title: 'Djed Stablecoin Integration',
      text: `Foreon Network offers Djed stablecoin integration, reducing volatility and providing users with an easy and convenient way to participate in a fair and efficient decentralized prediction market.`,
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678198794/foreon/Isolation_Mode-1_ukdzzj.svg',
    },

    {
      bg: '#22005D',
      title: 'Low Fees',
      text: `Foreon Network's transaction fees are only 2.5%, lower than traditional betting platforms like Betfair that charge 5-7% of net winnings. This feature ensures that users can participate in the market without high costs.`,
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678198794/foreon/Isolation_Mode-2_n9jih8.svg',
    },
  ];

  return (
    <>
      <Box
        my={'1em'}
        data-aos={'fade-up'}
        py={'3em'}
        px={{ sm: '1em', lg: '2em' }}
        bg={'#FFFBFF'}
      >
        <ContainerLayout>
          <Flex
            align={'center'}
            justify={'space-between'}
            direction={{ ...flexDirection }}
            gap={'1em'}
            my={'em'}
          >
            <Box w={{ sm: '100%', md: '100%', lg: '30%' }}>
              <Typography span={'Foreon'}>Core Features Of</Typography>
            </Box>

            <Box w={{ sm: '100%', md: '100%', lg: '40%' }}>
              <NormalText>
                Foreon is a decentralized prediction market protocol that
                enables anyone to establish a market for any event. The protocol
                is not controlled by any single entity, and it is operated and
                owned by the community.
              </NormalText>
            </Box>
          </Flex>

          <Box>
            <Flex gap={'2em'} my={'5em'} wrap={'wrap'} justify={'center'}>
              {
                // @ts-ignore
                coreInfos.map(({ title, bg, text, image }) => {
                  return (
                    <>
                      <CoreItems color={bg} title={title} image={image}>
                        {text}
                      </CoreItems>
                    </>
                  );
                })
              }
            </Flex>
          </Box>
        </ContainerLayout>
      </Box>
    </>
  );
};

export default Features;
