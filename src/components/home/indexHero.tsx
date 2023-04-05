import {
  BackgroundImage,
  Button,
  Box,
  Flex,
  Text,
  Image,
  Title,
  TextInput,
} from '@mantine/core';
import Header from '../major/header';
import ContainerLayout from '@/layouts/containerLayout';
import {flexDirection, flexSm} from '@/utils/responsiveParams';
import {ButtonInterface} from '../tinyUtils';
import {FaDiscord, FaSearch} from 'react-icons/fa';
import Next from 'next/image';
import AuthHeader from '@/components/major/authHeader';
import {useRouter} from 'next/navigation';

const SearchHero = () => (
  <>
    <Flex
      gap={'0.5em'}
      mt={{
        sm: '2em',
        lg: '3em',
      }}


    >
      <TextInput size={'xl'} placeholder={'Search markets'} w={'560px'}   className={'border-slice'}
      sx={
        {
          borderRadius: 'none'
        }
      }/>

      <Box
        bg={'#5138F6'}
        w={'70px'}
        h={'60px'}
        sx={{
          borderRadius: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <FaSearch fill={'#fff'}/>
      </Box>
    </Flex>
  </>
);

const moreCats = [
  {
    name: 'Politics',
    path: '',
  },
  {
    name: 'Sports',
    path: '',
  },
  {
    name: 'Crypto',
    path: '',
  },
  {
    name: 'More',
    path: '',
  },
];

const PopularCats = (
  <Box my={'3em'}>
    <Text weight={'medium'} color={'#22005D'} my={'1em'}>
      Popular Categories
    </Text>

    <Box
      sx={{
        display: 'flex',
        gap: '0.5em',
      }}
    >
      {moreCats.map(({name, path}) => {
        return (
          <Button
            key={name}
            bg={'none'}
            sx={{
              border: '1px solid #22005D',
              borderRadius: '0',
              '&:hover': {
                background: 'none',
              },
            }}
          >
            <Text color={'#22005D'}>{name}</Text>
          </Button>
        );
      })}
    </Box>
  </Box>
);

const IndexHero = () => {
  const router = useRouter();
  const routeHeader = () => router.push('/market');

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <BackgroundImage
          h={{base: '134vh', md: '120vh', lg: '110vh'}}
          pb={'2em'}
          src="https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679502764/foreon/Hero_nttpfc.png"
        >
          <AuthHeader handleEvent={routeHeader}/>

          <ContainerLayout>
            <Flex
              h={'80vh'}
              align={'center'}
              gap={'2em'}
              direction={{...flexDirection}}
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

                  }}
                  size={'20px'}
                  w={{
                    base: '100%',
                    lg: '588px',
                  }}
                >
                  Bet on the future and get unbiased real-time forecasts on what
                  matters most to you.
                </Text>

                <SearchHero/>

                <Flex wrap={'wrap'}>{PopularCats}</Flex>
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
                  className={' bigImage'}
                  sx={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679502714/foreon/Group_163_igcozm.svg)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></Box>
              </Box>
            </Flex>

            <Box
              display={{
                base: 'none',
                lg: 'block',
              }}
            >
              <Box
                mr={{
                  base: 'none',
                  lg: '5em',
                }}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  cursor: 'pointer',
                }}
              >
                <a href={'#browse'}>
                  <Image
                    width={130}
                    height={100}
                    src={
                      'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679502711/foreon/Group_21_ifaiyo.svg'
                    }
                  />
                </a>
              </Box>
            </Box>
          </ContainerLayout>
        </BackgroundImage>
      </Box>
    </>
  );
};

export default IndexHero;
