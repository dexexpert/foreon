import { Box, Flex, Title, Center, Text, Image } from '@mantine/core';
import { FiBook } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { IoMdStats } from 'react-icons/io';
import Link from 'next/link';

const bookIcon = <svg width="29" height="29" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="4" fill="#E9DDFF"/>
<g clipPath="url(#clip0_66_12066)">
<path d="M5.5 13.25V6.5C5.5 6.10218 5.65804 5.72064 5.93934 5.43934C6.22064 5.15804 6.60218 5 7 5H14C14.1326 5 14.2598 5.05268 14.3536 5.14645C14.4473 5.24021 14.5 5.36739 14.5 5.5V14.5C14.5 14.6326 14.4473 14.7598 14.3536 14.8536C14.2598 14.9473 14.1326 15 14 15H7.25C6.78587 15 6.34075 14.8156 6.01256 14.4874C5.68437 14.1592 5.5 13.7141 5.5 13.25ZM13.5 14V12.5H7.25C7.05109 12.5 6.86032 12.579 6.71967 12.7197C6.57902 12.8603 6.5 13.0511 6.5 13.25C6.5 13.4489 6.57902 13.6397 6.71967 13.7803C6.86032 13.921 7.05109 14 7.25 14H13.5ZM6.5 11.6685C6.73435 11.5572 6.99058 11.4997 7.25 11.5H13.5V6H7C6.86739 6 6.74021 6.05268 6.64645 6.14645C6.55268 6.24021 6.5 6.36739 6.5 6.5V11.6685Z" fill="#381E72"/>
</g>
<defs>
<clipPath id="clip0_66_12066">
<rect width="12" height="12" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>

const liquidityIcon  = <svg width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_6_185)">
    <path d="M8 5.03324L6.35 6.68324C6.0237 7.00957 5.8015 7.42534 5.71148 7.87795C5.62147 8.33057 5.66769 8.79971 5.84431 9.22606C6.02092 9.6524 6.31999 10.0168 6.7037 10.2732C7.08741 10.5296 7.53852 10.6664 8 10.6664C8.46148 10.6664 8.9126 10.5296 9.29631 10.2732C9.68002 10.0168 9.97909 9.6524 10.1557 9.22606C10.3323 8.79971 10.3785 8.33057 10.2885 7.87795C10.1985 7.42534 9.9763 7.00957 9.65 6.68324L8 5.03324ZM8 4.09058L10.1213 6.21191C10.5409 6.63147 10.8266 7.16602 10.9424 7.74796C11.0581 8.3299 10.9987 8.9331 10.7716 9.48128C10.5446 10.0295 10.1601 10.498 9.66671 10.8276C9.17336 11.1573 8.59334 11.3332 8 11.3332C7.40666 11.3332 6.82664 11.1573 6.33329 10.8276C5.83995 10.498 5.45543 10.0295 5.22837 9.48128C5.0013 8.9331 4.94189 8.3299 5.05764 7.74796C5.1734 7.16602 5.45911 6.63147 5.87867 6.21191L8 4.09058V4.09058Z" fill="#22005D"/>
  </g>
  <rect x="0.5" y="0.5" width="15" height="15" stroke="#22005D"/>
  <defs>
    <clipPath id="clip0_6_185">
      <rect width="8" height="8" fill="white" transform="translate(4 4)"/>
    </clipPath>
  </defs>
</svg>

const volume = <svg width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_6_179)">
    <path d="M5 8.00008H6.33333V11.0001H5V8.00008ZM9.66667 6.66675H11V11.0001H9.66667V6.66675ZM7.33333 4.66675H8.66667V11.0001H7.33333V4.66675Z" fill="black"/>
  </g>
  <rect x="0.5" y="0.5" width="15" height="15" stroke="#22005D"/>
  <defs>
    <clipPath id="clip0_6_179">
      <rect width="8" height="8" fill="white" transform="translate(4 4)"/>
    </clipPath>
  </defs>
</svg>

interface Props {
  avatar:string;
  cate: string;
  title: string;
  yes$:number;
  no$:number;
  volume:string;
  liquidity: string;
}

const MarketBox: React.FC<Props> = ({avatar, cate, title,yes$, no$, volume,liquidity}) => {
  return (
    <>
      <Link href={'/market/overview'} className={'remove-link'}>
        <Box pos={'relative'}>
          <Box pos={'relative'}>
            <Box
              bg={
                ' linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'
              }
              w={'70px'}
              h={'70px'}
              display={'flex'}
              pos={'absolute'}
              top={{
                base: '-2em',
                md: '0',
                lg: '150px',
              }}
              left={{
                base: '150px',
                md: '0',
                lg: '-2em',
              }}
              sx={{
                borderRadius: '50%',
                zIndex: 1,
                position: 'relative',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                w="93%"
                h="93%"
                sx={{
                  borderRadius: '50%',
                  zIndex: 1,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroudRepeat: 'no-repeat',
                  // background:
                  //   'url(https://res.cloudinary.com/dhkccnvyn/image/upload/v1678523435/mailchimp-KR0WW6bjtt0-unsplash_xdl4fl.jpg)',
                }}
              >
                <Image
                  // sx={{
                  //   margin:'10px'
                  // }}
                  height={'100%'}
                  width={'100%'}
                  alt={'Logo'}
                  src={
                    avatar
                  }
                />
              </Box>
            </Box>
          </Box>

          <Box
            pos={'relative'}
            w={{
              sm: '100%',
              md: '360px',
              lg: '390px',
            }}
            sx={{
              border: '1px solid #CAC4CF',
              borderRadius: '16px',
              padding: '2em  3em',
            }}
          >
            <Flex align={'center'} my={'1em'} justify={'space-between'}>
              {bookIcon}

              <Box>
                <Flex
                  gap={'0.3em'}
                  align={'center'}
                  p={'0.3em 0.5em'}
                  sx={{
                    borderRadius: '8px',
                    border: '1px solid #CAC4CF',
                  }}
                >
                  <FaStar /> <Text weight={'bold'} color={'#22005D'}>Add to Watchlist</Text>
                </Flex>
              </Box>
            </Flex>

            <Text size={'12px'} weight={'bold'} color={'#22005D'}>{cate}</Text>

            <Title color={'#000'} my={'0.2em'} size={'26px'}>
              {/* Import duty to increase in Q2 */}
              {title}
            </Title>

            <Flex my={'1.5em'} gap={'1em'}>
              <Box
                w={'100%'}
                pos={'relative'}

                sx={{
                  border: '1px solid green',
                }}
              >
                <Box
                  h={'39px'}
                  w={'58px'}
                  bg={'#A7FECC'}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    pos={'absolute'}
                    right={'2em'}
                    size={'12px'}
                    align={'center'}
                    color={'#219653'}
                  >
                    Yes {yes$}
                  </Text>
                </Box>
              </Box>

              <Box
                w={'100%'}
                pos={'relative'}
                sx={{
                  border: '1px solid #DE3730',
                }}
              >
                <Box
                  h={'39px'}
                  w={'30px'}
                  bg={'#FFB4AB'}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    pos={'absolute'}
                    right={'2em'}
                    size={'12px'}
                    align={'center'}
                    color={'#DE3730'}
                  >
                    No {no$}
                  </Text>
                </Box>
              </Box>
            </Flex>

            <Flex display={'flex'} justify={'space-between'}>
              <Flex align={'center'} gap={'0.45em'}>

                {volume}

                <Box>
                  <Text size={'14px'}>Volume</Text>
                  <Text size={'21px'} weight={'bolder'} color={'black'}>
                    {volume}
                  </Text>
                </Box>
              </Flex>

              <Flex align={'center'} gap={'0.45em'}>

                {liquidityIcon}

                <Box>
                  <Text size={'14px'}>Liquidity</Text>
                  <Text size={'21px'} weight={'bolder'} color={'black'}>
                    {liquidity}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default MarketBox;
