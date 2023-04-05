import ContainerLayout from '@/layouts/containerLayout';
import { Box, Flex, Title } from '@mantine/core';
import { flexDirection } from '@/utils/responsiveParams';
import { Typography, NormalText } from '../micro/Typography';

const BlockInfo = () => {
  return (
    <>
      <ContainerLayout>
        <Flex
          justify={'space-between'}
          gap={'3em'}
          align={'center'}
          py={{
            base: '1.7em',
            md: '4em',
            lg: '5em',
          }}
          direction={{ ...flexDirection }}
        >
          <Box w={{ base: '100%', md: '60px', lg: '50%' }} data-aos={'fade-up'}>
            <Box
              w={'100%'}
              h={'60vh'}
              className={'dangle'}
              sx={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dhkccnvyn/image/upload/v1678180536/foreon/Graphic_Elements_empptk.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            ></Box>
          </Box>

          <Box w={{ xs: '100%', md: '60px', lg: '50%' }} data-aos={'fade-up'}>
            <Typography span={'Prediction Markets'}>
              A New Era For Blockchain Based
            </Typography>

            <Box my={'2em'}>
              <NormalText>
                The current state of prediction markets and betting is flawed
                and oppressive. The betting industry today lures customers with
                the promise of quick wealth, utilizing various tactics to
                maximize profits while providing minimal benefits to them.
              </NormalText>
              {/*@ts-ignore*/}
              <NormalText my={'1.5em'}>
                Foreon Network is an information market platform where users can
                trade on the predicted outcome of future events, creating a
                share portfolio based on their forecasts to earn a return. It
                offers an alternative to betting platforms with high fees,
                restrictions, and poor accessibility.
              </NormalText>
            </Box>
          </Box>
        </Flex>
      </ContainerLayout>
    </>
  );
};

export default BlockInfo;
