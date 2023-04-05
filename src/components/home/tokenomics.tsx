import { Flex, Box } from '@mantine/core';
import { flexDirection, flexSm } from '@/utils/responsiveParams';
import { NormalText, Tweak, Typography } from '@/components/micro/Typography';
import ContainerLayout from '@/layouts/containerLayout';
import InputLike from '@/components/micro/InputLike';

const Tokenomics = () => {
  return (
    <>
      <Box
        data-aos={'fade-up'}
        className={'tokenomics'}
        py={{ base: '3em', lg: '9em' }}
        sx={{
          background: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <ContainerLayout>
          <Tweak span={'Tokenomics'}>Foreon</Tweak>
          <Flex
            justify={'space-between'}
            gap={'3em'}
            align={'center'}
            py={'3em'}
            direction={{ ...flexDirection }}
          >
            <Box w={{ base: '100%', md: '60px', lg: '75%' }}>
              <Box
                w={'100%'}
                h={{
                  base: '70vh',
                  md: '70vh',
                  lg: '100vh',
                }}
                className={'dangle'}
                sx={{
                  backgroundImage:
                    'url(https://res.cloudinary.com/dhkccnvyn/image/upload/v1678320997/Group_39882_gsk6qe.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></Box>
            </Box>

            <Box w={{ base: '100%', md: '60px', lg: '30%' }}>
              <Box my={'1em'}>
                <Box my={'1em'}>
                  <Flex gap={'1em'} w={'100%'} direction={'column'} my={'1em'}>
                    <InputLike token={'Public Sale'}>5,000,000 (50%)</InputLike>
                    <InputLike token={'Advisors'}>300,000 (3%)</InputLike>
                    <InputLike token={'Foreon Vault'}>
                      1,000,000 (10%)
                    </InputLike>
                    <InputLike token={'Rewards / Farming Pool'}>
                      700,000 (7%)
                    </InputLike>
                    <InputLike token={'Exchange Listings'}>
                      2,000,000 (20%)
                    </InputLike>
                    <InputLike token={'Team'}>1,000,000 (10%)</InputLike>
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

export default Tokenomics;
