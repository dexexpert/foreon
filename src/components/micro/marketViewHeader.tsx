import {Box, Text, Flex} from '@mantine/core';
import ContainerLayout from "@/layouts/containerLayout";
import {useMediaQuery} from "@mantine/hooks";
import {BsStar} from 'react-icons/bs';

const liquidityIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="29" height="29" fill="white"/>
  <g clipPath="url(#clip0_79_16329)">
    <path
      d="M15 7.58323L10.875 11.7082C10.0593 12.5241 9.50374 13.5635 9.27871 14.695C9.05368 15.8265 9.16923 16.9994 9.61076 18.0653C10.0523 19.1311 10.8 20.0421 11.7592 20.6831C12.7185 21.324 13.8463 21.6661 15 21.6661C16.1537 21.6661 17.2815 21.324 18.2408 20.6831C19.2 20.0421 19.9477 19.1311 20.3892 18.0653C20.8308 16.9994 20.9463 15.8265 20.7213 14.695C20.4963 13.5635 19.9408 12.5241 19.125 11.7082L15 7.58323ZM15 5.22656L20.3033 10.5299C21.3522 11.5788 22.0665 12.9152 22.3559 14.37C22.6453 15.8249 22.4968 17.3329 21.9291 18.7033C21.3614 20.0738 20.4001 21.2451 19.1668 22.0692C17.9334 22.8933 16.4834 23.3332 15 23.3332C13.5166 23.3332 12.0666 22.8933 10.8332 22.0692C9.59987 21.2451 8.63858 20.0738 8.07092 18.7033C7.50326 17.3329 7.35473 15.8249 7.64411 14.37C7.93349 12.9152 8.64779 11.5788 9.69667 10.5299L15 5.22656Z"
      fill="#22005D"/>
  </g>
  <rect x="0.5" y="0.5" width="29" height="29" stroke="#22005D"/>
  <defs>
    <clipPath id="clip0_79_16329">
      <rect width="20" height="20" fill="white" transform="translate(5 5)"/>
    </clipPath>
  </defs>
</svg>

const MarketViewHeader = () => {

  const matches = useMediaQuery('(max-width: 40em)', true, {getInitialValueInEffect: false});


  return (
    <>
      <ContainerLayout>

        <Flex justify={'space-between'}
              pb={'1.5em'}
              wrap={'wrap'} align={'center'} gap={'0.5em'}>

          <Flex py={'1em'} my={'1em'} gap={'1em'}
                align={'center'} display={'flex'}>

            {/*<Box bg={'gray'} w={{base: '50%', lg: '100px'}} h={'100px'}*/}
            {/*     sx={{borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}  >*/}

            {/*  <Box bg={'red'} w={{base: '50%', lg: '90px'}} h={'90px'}*/}
            {/*       sx={{borderRadius: '50%'}}>*/}

            {/*  </Box>*/}

            {/*</Box>*/}
            <Box bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'} w={{base: '50%', lg: '100px'}} h={'100px'}
                 sx={{borderRadius: '50%', position: 'relative'}} >

              <Box  w={{base: '90%', lg: '90px'}} h={'90px'}
                   sx={{borderRadius: '50%', position: 'absolute',
                     top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundImage: 'url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679502552/cld-sample.jpg)'}}>

              </Box>

            </Box>


            <Box>
              <Text size={'14px'} color={'#22005D'} sx={
                {
                  letterSpacing: '0.3em'
                }
              }>BUSINESS </Text>
              <Text
                size={!matches ? '40px' : '20px'}
                weight={'700'} color={'#000'}
                w={
                  {
                    sm: '100%',
                    lg: '287px'
                  }
                }
              >
                Import duty to increase in Q2
              </Text>

              <Text size={'16px'} color={'#22005D'} weight={'bold'}> Market Ends - 25 March, 2023 </Text>

            </Box>


          </Flex>

          <Flex gap={'0.5em'}>
            <Box sx={
              {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
                width: 'fit-content',
                border: '1px solid #938F94',
                padding: '0.5em',
                background: 'white',
                borderRadius: '0.5em'
              }
            }>
              <BsStar/>
              <Text color={'#22005D'}>Add to Watchlist </Text>
            </Box>


            <Box sx={
              {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
                width: 'fit-content',
                border: '1px solid #938F94',
                padding: '0.5em',
                background: 'white',
                borderRadius: '0.5em'
              }
            }>
              <BsStar/>
              <Text color={'#22005D'}>Share</Text>
            </Box>

          </Flex>

          <Flex gap={'1em'} wrap={'wrap'}>

            <Box bg={'#5138F6'}

                 sx={
                   {
                     borderRadius: '16px',
                   }
                 }
                 w={

                   {
                     lg: '275px',
                     base: '100%'
                   }

                 } p={'2em 2em'} color={'#fff'}>

              <Flex align={'center'} gap={'1em'}>
                <Box w={'30px'} h={'30px'} bg={'#fff'} p={'0.1em 0.4em'}>
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.5 8.99999H3.83333V16.5H0.5V8.99999ZM12.1667 5.66666H15.5V16.5H12.1667V5.66666ZM6.33333 0.666656H9.66667V16.5H6.33333V0.666656Z"
                      fill="black"/>
                  </svg>
                </Box>

                <Box>
                  <Text color={'#fff'}>Liquidity</Text>
                  <Text color={'#fff'} size={!matches ? '29px' : '20px'} weight={'bold'}>12,056 ADA</Text>
                </Box>
              </Flex>

            </Box>

            <Box bg={'#9F00BE'}

                 sx={
                   {
                     borderRadius: '16px',
                   }
                 }
                 w={

                   {
                     lg: '275px',
                     base: '100%'
                   }

                 } p={'2em 2em'} color={'#fff'}>

              <Flex align={'center'} gap={'1em'}>

                {liquidityIcon}

                <Box>
                  <Text color={'#fff'}>Volumn</Text>
                  <Text color={'#fff'} size={!matches ? '28px' : '20px'} weight={'bold'}>12,056 ADA</Text>
                </Box>
              </Flex>

            </Box>

          </Flex>
        </Flex>

      </ContainerLayout>

    </>
  )
}

export default MarketViewHeader;