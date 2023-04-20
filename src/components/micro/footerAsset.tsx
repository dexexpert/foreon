import ContainerLayout from '@/layouts/containerLayout';
import { Box, Flex, Text, List } from '@mantine/core';
import {
  flexDirection,
  largeView,
  smallView,
} from '../../utils/responsiveParams';
import Image from 'next/image';
import { FaDiscord, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa';

const FooterAsset = () => {
  const navs = [
    {
      title: 'How it works',
      path: '#how-it-works',
    },
    {
      title: 'Contact',
      path: '',
    },
    {
      title: 'Blog',
      path: '',
    },
    {
      title: 'Privacy',
      path: '',
    },
    {
      title: 'Terms Of Service ',
      path: '',
    },
  ];

  return (
    <>
      <Box bg={'#22005D'}>
        <ContainerLayout>
          <Box
            my={'3rem'}
            mx={{
              base: 'em',
              md: '1em',
              lg: '3.7em',
            }}
            color={'white !important'}
          >
            <Flex
              align={{
                sm: 'left',
                md: 'left',
                lg: 'center',
              }}
              py={'em'}
              direction={{
                base: 'column',
                md: 'column',
                lg: 'row',
              }}
              justify={'space-between'}
              sx={{
                marginTop: '10em',
              }}
            >
              <Box display={'flex'} className={'footer-image'}>
                <a href="#">
                  <Image
                    height={100}
                    width={100}
                    alt={'Logo'}
                    src={
                      'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678204829/foreon/Frame_qpugib.svg'
                    }
                  />
                </a>
              </Box>

              <Box>
                <Box display={{ ...smallView }}>
                  <Box>
                    <List
                      color={'white'}
                      //@ts-ignore
                      align={'left'}
                      listStyleType="none"
                    >
                      {navs.map(({ title, path }, index) => {
                        return (
                          <>
                            <a key={index} href={path} className={'remove-link'}>
                              {' '}
                              <Text
                                mx={'2em'}
                                className={'footer-li'}
                                color={'white'}
                              >
                                {title}
                              </Text>
                            </a>
                          </>
                        );
                      })}
                    </List>
                  </Box>
                </Box>

                <Box display={{ ...largeView }}>
                  <List display={'flex'} color={'white'} listStyleType="none">
                    {navs.map(({ title, path }, index) => {
                      return (
                        <>
                          {/* @ts-ignore */}
                          <a key={index} href={path} className={'remove-link'}>
                            <Text mx={'2em'} color={'white'}>
                              {title}
                            </Text>
                          </a>
                        </>
                      );
                    })}
                  </List>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box
            my={'2em'}
            className={'hr'}
            display={{
              sm: 'none',
              lg: 'block',
            }}
          >
            <svg
              width="1150"
              height="1"
              viewBox="0 0 1150 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="1150" y2="0.5" stroke="#4F378A" />
            </svg>
          </Box>

          <Box mx={'4em'} className={'footer-image'}>
            <Flex
              justify={'space-between'}
              direction={{ ...flexDirection }}
              align={'left'}
              gap={'1em'}
            >
              <Box>
                <Text size={'1em'} align={'left'}>
                  2023 Foreon. All Right Reserved{' '}
                </Text>
              </Box>
              <Box
                color={'white'}
                sx={{
                  display: 'flex',
                  gap: '1em',
                }}
              >
                <a href={''}>
                  {' '}
                  <FaDiscord size={'1.5em'} fill={'#fff'} />{' '}
                </a>
                <a href={''}>
                  <FaTwitter size={'1.5em'} fill={'#fff'} />
                </a>
                <a href={''}>
                  <FaTelegram size={'1.5em'} fill={'#fff'} />
                </a>
                <a href={''}>
                  {' '}
                  <FaMedium size={'1.5em'} fill={'#fff'} />{' '}
                </a>
              </Box>
            </Flex>
          </Box>
        </ContainerLayout>
      </Box>
    </>
  );
};

export default FooterAsset;
