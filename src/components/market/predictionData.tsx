import {Box, Flex, Text} from '@mantine/core';
import {useMediaQuery} from "@mantine/hooks";
import {BsFillCaretRightFill, BsFillCaretDownFill} from 'react-icons/bs';
import { useState} from "react";

const SettingsIcon = () => {
  return <>
    <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="42" height="38" rx="4" fill="white"/>
      <g clipPath="url(#clip0_461_4125)">
        <path
          d="M19.5136 14L21.4688 12.0447C21.6095 11.9041 21.8002 11.8252 21.9991 11.8252C22.1979 11.8252 22.3887 11.9041 22.5293 12.0447L24.4846 14H27.2491C27.448 14 27.6387 14.079 27.7794 14.2197C27.92 14.3603 27.9991 14.5511 27.9991 14.75V17.5145L29.9543 19.4697C30.0949 19.6104 30.1739 19.8011 30.1739 20C30.1739 20.1989 30.0949 20.3896 29.9543 20.5302L27.9991 22.4855V25.25C27.9991 25.4489 27.92 25.6397 27.7794 25.7803C27.6387 25.921 27.448 26 27.2491 26H24.4846L22.5293 27.9552C22.3887 28.0958 22.1979 28.1748 21.9991 28.1748C21.8002 28.1748 21.6095 28.0958 21.4688 27.9552L19.5136 26H16.7491C16.5501 26 16.3594 25.921 16.2187 25.7803C16.0781 25.6397 15.9991 25.4489 15.9991 25.25V22.4855L14.0438 20.5302C13.9032 20.3896 13.8242 20.1989 13.8242 20C13.8242 19.8011 13.9032 19.6104 14.0438 19.4697L15.9991 17.5145V14.75C15.9991 14.5511 16.0781 14.3603 16.2187 14.2197C16.3594 14.079 16.5501 14 16.7491 14H19.5136ZM17.4991 15.5V18.1362L15.6353 20L17.4991 21.8637V24.5H20.1353L21.9991 26.3637L23.8628 24.5H26.4991V21.8637L28.3628 20L26.4991 18.1362V15.5H23.8628L21.9991 13.6362L20.1353 15.5H17.4991ZM21.9991 23C21.2034 23 20.4403 22.6839 19.8777 22.1213C19.3151 21.5587 18.9991 20.7956 18.9991 20C18.9991 19.2043 19.3151 18.4413 19.8777 17.8787C20.4403 17.3161 21.2034 17 21.9991 17C22.7947 17 23.5578 17.3161 24.1204 17.8787C24.683 18.4413 24.9991 19.2043 24.9991 20C24.9991 20.7956 24.683 21.5587 24.1204 22.1213C23.5578 22.6839 22.7947 23 21.9991 23ZM21.9991 21.5C22.3969 21.5 22.7784 21.342 23.0597 21.0607C23.341 20.7794 23.4991 20.3978 23.4991 20C23.4991 19.6022 23.341 19.2206 23.0597 18.9393C22.7784 18.658 22.3969 18.5 21.9991 18.5C21.6012 18.5 21.2197 18.658 20.9384 18.9393C20.6571 19.2206 20.4991 19.6022 20.4991 20C20.4991 20.3978 20.6571 20.7794 20.9384 21.0607C21.2197 21.342 21.6012 21.5 21.9991 21.5Z"
          fill="#5138F6"/>
      </g>
      <rect x="1" y="1" width="42" height="38" rx="4" stroke="#5138F6"/>
      <defs>
        <clipPath id="clip0_461_4125">
          <rect width="18" height="18" fill="white" transform="translate(13 11)"/>
        </clipPath>
      </defs>
    </svg>
  </>
}

const ArrowIcons = () => {
  return <>
    <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="42" height="38" rx="4" fill="white"/>
      <g clipPath="url(#clip0_461_4120)">
        <path d="M25 23V20L28.75 23.75L25 27.5V24.5H16V23H25ZM19 12.5V15.4992L28 15.5V17H19V20L15.25 16.25L19 12.5Z"
              fill="#5138F6"/>
      </g>
      <rect x="1" y="1" width="42" height="38" rx="4" stroke="#5138F6"/>
      <defs>
        <clipPath id="clip0_461_4120">
          <rect width="18" height="18" fill="white" transform="translate(13 11)"/>
        </clipPath>
      </defs>
    </svg>
  </>
}

const Line = () => {
  return <svg width="1" height="53" viewBox="0 0 1 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="0.5" x2="0.500002" y2="52.5" stroke="#E6E1E6"/>
  </svg>
}

const PredictionData = () => {

  const [isOpen, setIsOpen] = useState(false);

  const collapseItem =() => !isOpen ? setIsOpen(true) : setIsOpen(false);



  const matches = useMediaQuery('(min-width: 40em)');

  return (
    <>
      <Box
        w={{
          sm: '100%',
          lg: '797px'
        }}
        sx={
          {
            border: '1.5px solid #E6E1E6',
            padding: ' 2em 1.5em',
            borderRadius: '16px'
          }
        }>

        <Flex justify={'space-between'} gap={'1em'} wrap={'wrap'} align={'center'}>

          <Box>

            <Text color={'#000'}>Yes</Text>
            <Text weight={'bold'} className={'duplicate'} size={matches ? '34px' : '23px'} color={'#000'}>40 ADA</Text>
            <Text color={'#219653'}>+2 ADA (+1.22%) <span>Past 1 Hour</span></Text>

          </Box>

          <Box sx={
            {
              display: 'flex',
              gap: '0.3em'
            }
          }>
            <ArrowIcons/>
            <SettingsIcon/>
          </Box>

          <Line/>

          <Flex gap={'1em'}>
            <Box>
              <Text size={'14px'}>Volumn</Text>
              <Text color={'#000'} weight={'bold'} size={'20px'}>12, 056 ADA</Text>
            </Box>

            <Box>
              <Text size={'14px'}>Liquidity</Text>
              <Text color={'#000'} weight={'bold'} size={'20px'}>9, 056 ADA</Text>
            </Box>
          </Flex>

          <Box onClick={collapseItem} sx={
            {
              cursor: 'pointer'
            }
          }>
            {!isOpen ?  <BsFillCaretRightFill fill={'#000'} size={'1.3em'}/>  :  <BsFillCaretDownFill fill={'#000'} size={'1.3em'}/>}
          </Box>

        </Flex>

        {
          isOpen && (
            <Box my={'1em'} h={'50vh'}  w={'100%'}
               sx={
                 {
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat',
                   backgroundSize: 'contain',
                   backgroundImage: 'url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679579155/foreon/Group_187_cvroru.svg)'
                 }
               }
            >

            </Box>
          )
        }

      </Box>


    </>
  )
}

export default PredictionData;