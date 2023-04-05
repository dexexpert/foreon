import { BackgroundImage, Box, Flex, Text, Image, Title } from '@mantine/core';

import Header from '../major/header';
import ContainerLayout from '@/layouts/containerLayout';
import { flexDirection, flexSm } from '@/utils/responsiveParams';
import { ButtonInterface } from '../tinyUtils';
import { FaDiscord } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <BackgroundImage
          h={{ base: '134vh', md: '120vh', lg: '100vh' }}
          pb={'2em'}
          src="https://res.cloudinary.com/dhkccnvyn/image/upload/v1678180540/foreon/Group_39885_a9twgd.png"
        >
          <Header />

          <ContainerLayout>
            <Flex
              h={'80vh'}
              align={'center'}
              gap={'2em'}
              direction={{ ...flexDirection }}
            >
              <Box className={'heroFlex foreon-left'}>
                <Text
                  className="heroHeader duplicate"
                  weight={'700'}
                  color="#22005D"
                  sx={{
                    lineHeight: '1.1em',
                  }}
                >
                  Building The Future Of Prediction
                </Text>

                <Text
                  className="Para medium head-description"
                  sx={{
                    padding: '0.7em 0',
                    lineHeight: '41.6px',
                  }}
                  size={'20px'}
                  w={{
                    base: '100%',
                    lg: '588px',
                  }}
                >
                  With Foreon, you can bet on future events, while also getting
                  unbiased real-time forecasts on events that matter most to
                  you.
                </Text>

                <Flex
                  gap={'1em'}
                  className={'aly'}
                  direction={{ ...flexDirection }}
                  my={'2em'}
                >
                  <a
                    href={'https://discord.gg/zwPfBRGDEu'}
                    className={'remove-link'}
                  >
                    <ButtonInterface p={'1.2em'}>
                      <FaDiscord fill={'#fff'} />
                      <Text
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Join Discord Community
                      </Text>
                    </ButtonInterface>
                  </a>
                  <Box
                    display={'flex '}
                    sx={{
                      gap: '0.5em',
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_71)">
                        <path
                          d="M7 6V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H17V21C17 21.552 16.55 22 15.993 22H4.007C3.87513 22.0008 3.7444 21.9755 3.62232 21.9256C3.50025 21.8757 3.38923 21.8022 3.29566 21.7093C3.20208 21.6164 3.12779 21.5059 3.07705 21.3841C3.02632 21.2624 3.00013 21.1319 3 21L3.003 7C3.003 6.448 3.453 6 4.009 6H7ZM5.002 8L5 20H15V8H5.002ZM9 6H17V16H19V4H9V6ZM7 11H13V13H7V11ZM7 15H13V17H7V15Z"
                          fill="url(#paint0_linear_1_71)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_71"
                          x1="2.76133"
                          y1="1.73481"
                          x2="22.0252"
                          y2="19.0723"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00A9B7" />
                          <stop offset="0.5027" stop-color="#4C32F2" />
                          <stop offset="1" stop-color="#9F00BE" />
                        </linearGradient>
                        <clipPath id="clip0_1_71">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a
                      href={''}
                      className={'remove-link'}
                    >
                      <Title order={4} color={'#22005D'}>
                        Read Investor Deck
                      </Title>
                    </a>
                  </Box>
                </Flex>

                <Flex></Flex>
              </Box>

              <Box
                className={'heroFlex'}
                //@ts-ignore
                align={'right'}
              >
                <Box
                  h={'491.41px'}
                  w={{
                    sm: '',
                    md: '',
                    lg: '610.15px',
                  }}
                  className={'dangle bigImage'}
                  sx={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dhkccnvyn/image/upload/v1678193765/foreon/Group_39884_dmzf90.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></Box>
              </Box>
            </Flex>
          </ContainerLayout>
        </BackgroundImage>
      </Box>
    </>
  );
};

export default Hero;
