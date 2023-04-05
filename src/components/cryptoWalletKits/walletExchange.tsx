import {Box, Text, Flex, Alert, Button} from '@mantine/core';
import {MdOutlineArrowBackIos} from 'react-icons/md';
import ContainerLayout from '@/layouts/containerLayout';
import {BiCopy} from "react-icons/bi";
import {FiAlertCircle} from 'react-icons/fi'

const DepositIcon = () => {
  return (
    <svg
      width="42"
      height="38"
      viewBox="0 0 42 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.666 8.58333V4.41667H4.33268V33.5833H37.666V29.4167H20.9993C20.4468 29.4167 19.9169 29.1972 19.5262 28.8065C19.1355 28.4158 18.916 27.8859 18.916 27.3333V10.6667C18.916 10.1141 19.1355 9.58423 19.5262 9.19353C19.9169 8.80283 20.4468 8.58333 20.9993 8.58333H37.666ZM2.24935 0.25H39.7493C40.3019 0.25 40.8318 0.469493 41.2225 0.860194C41.6132 1.25089 41.8327 1.7808 41.8327 2.33333V35.6667C41.8327 36.2192 41.6132 36.7491 41.2225 37.1398C40.8318 37.5305 40.3019 37.75 39.7493 37.75H2.24935C1.69681 37.75 1.16691 37.5305 0.77621 37.1398C0.385509 36.7491 0.166016 36.2192 0.166016 35.6667V2.33333C0.166016 1.7808 0.385509 1.25089 0.77621 0.860194C1.16691 0.469493 1.69681 0.25 2.24935 0.25ZM23.0827 12.75V25.25H37.666V12.75H23.0827ZM27.2493 16.9167H33.4993V21.0833H27.2493V16.9167Z"
        fill="#5138F6"
      />
    </svg>
  );
};

const CoinIcon = () => {
  return <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.1657 0.166674C28.9781 0.164854 32.676 1.47014 35.6425 3.86485C38.609 6.25956 40.6648 9.59891 41.4671 13.326C42.2694 17.0531 41.7696 20.9425 40.0512 24.3457C38.3328 27.7489 35.4995 30.4601 32.024 32.0271C30.9131 34.4832 29.223 36.6331 27.0987 38.2926C24.9745 39.952 22.4794 41.0715 19.8274 41.5549C17.1755 42.0383 14.4459 41.8713 11.8727 41.0681C9.29951 40.2649 6.95953 38.8496 5.05343 36.9435C3.14734 35.0374 1.73202 32.6974 0.928853 30.1242C0.125691 27.5511 -0.0413451 24.8214 0.442071 22.1695C0.925487 19.5176 2.04493 17.0225 3.70439 14.8982C5.36385 12.7739 7.5138 11.0838 9.96986 9.97292C11.291 7.04978 13.4273 4.5698 16.1227 2.83044C18.818 1.09108 21.9579 0.166178 25.1657 0.166674ZM16.8324 12.6667C15.1908 12.6667 13.5654 12.99 12.0488 13.6182C10.5323 14.2464 9.15426 15.1671 7.99353 16.3278C6.8328 17.4886 5.91205 18.8666 5.28387 20.3831C4.65569 21.8997 4.33236 23.5252 4.33236 25.1667C4.33236 26.8082 4.65569 28.4336 5.28387 29.9502C5.91205 31.4668 6.8328 32.8448 7.99353 34.0055C9.15426 35.1662 10.5323 36.087 12.0488 36.7152C13.5654 37.3433 15.1908 37.6667 16.8324 37.6667C20.1476 37.6667 23.327 36.3497 25.6712 34.0055C28.0154 31.6613 29.3324 28.4819 29.3324 25.1667C29.3324 21.8515 28.0154 18.672 25.6712 16.3278C23.327 13.9836 20.1476 12.6667 16.8324 12.6667ZM18.9157 14.75V16.8333H23.0824V21H14.749C14.4887 20.9995 14.2377 21.0965 14.0453 21.2719C13.853 21.4473 13.7332 21.6883 13.7097 21.9476C13.6862 22.2068 13.7606 22.4654 13.9182 22.6726C14.0759 22.8797 14.3054 23.0203 14.5615 23.0667L14.749 23.0833H18.9157C20.297 23.0833 21.6218 23.6321 22.5985 24.6088C23.5753 25.5856 24.124 26.9103 24.124 28.2917C24.124 29.673 23.5753 30.9978 22.5985 31.9745C21.6218 32.9513 20.297 33.5 18.9157 33.5V35.5833H14.749V33.5H10.5824V29.3333H18.9157C19.176 29.3338 19.4271 29.2368 19.6194 29.0614C19.8118 28.8861 19.9315 28.645 19.955 28.3858C19.9785 28.1266 19.9041 27.8679 19.7465 27.6608C19.5888 27.4536 19.3593 27.313 19.1032 27.2667L18.9157 27.25H14.749C13.3677 27.25 12.0429 26.7013 11.0662 25.7245C10.0894 24.7478 9.5407 23.423 9.5407 22.0417C9.5407 20.6603 10.0894 19.3356 11.0662 18.3588C12.0429 17.3821 13.3677 16.8333 14.749 16.8333V14.75H18.9157ZM25.1657 4.33334C23.4005 4.33127 21.6549 4.70405 20.0445 5.42701C18.4341 6.14997 16.9955 7.20663 15.824 8.52709C18.1787 8.38414 20.537 8.7427 22.7428 9.57906C24.9486 10.4154 26.9517 11.7105 28.6198 13.3787C30.2878 15.0469 31.5826 17.0502 32.4187 19.2561C33.2548 21.462 33.6131 23.8203 33.4699 26.175C35.3641 24.4909 36.7015 22.2707 37.3049 19.809C37.9083 17.3472 37.749 14.7602 36.8483 12.3911C35.9475 10.0219 34.3478 7.98259 32.2614 6.54351C30.1749 5.10443 27.7003 4.33363 25.1657 4.33334Z"
      fill="#5138F6"/>
  </svg>
}

const info =
  [{
    title: 'Send ADA from exchange',
    numbering: 1
  },
    {
      title: 'Select Cardano from the list of networks',
      numbering: 2
    },
    {
      title: 'Copy the address below and send ADA',
      numbering: 3
    }]

const bulletItem = <Box sx={
  {
    border: '0.5px solid gray',
    padding: '1em 1em ',
    borderRadius: '10px'
  }
}>

  <Text weight={'medium'} color={'#5138F6'}>Steps to deposit</Text>

  {
    info.map(({title, numbering}) => {
      return < Flex gap={'0.5em'} key={numbering} sx={
        {
          lineHeight: '2em',
          margin: '0.6em 0'
        }
      }>
        <Box sx={
          {
            width: '25px',
            height: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '1px solid black'

          }
        }>
          {numbering}
        </Box>
        <Text weight={'bold'} color={'#000'}>{title}</Text>

      </Flex>
    })
  }


  <Box sx={
    {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }>
    <Text color={'#22005D'} my={'1em'}> Your Foreon wallet</Text>
    <Flex gap={'0.5em'} justify={'center'}>

      <Box sx={
        {
          border: '1px solid blue',
          width: 'fit-content',
          padding: '0.5em',
          borderRadius: '10px'
        }
      }>
        <Text color={'#22005D'} weight={'bold'}>addrr24245jtfmd53i6o35...8876</Text>
      </Box>

      <Box bg={'#5138F6'} w={'70px'} h={'40px'}
           sx={
             {
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               borderRadius: '8px',
               gap: '0.2em',
               cursor: 'pointer'

             }
           }>
        <BiCopy fill={'#fff'}/>
        <Text color={'#fff'}>Copy</Text>
      </Box>
    </Flex>
  </Box>


</Box>

const WalletExchange = () => {
  return (
    <>
      <Box
        p={'2.5em 1.5em'}
        bg={'#22005D'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5em',
        }}
      >
        <MdOutlineArrowBackIos fill={'#fff'}/>{' '}
        <Text color={'#fff'} className={'duplicate'} size={'25px'}>
          Crypto Exchange
        </Text>
      </Box>
      <ContainerLayout>

        <Box my={'2em'}>

          {bulletItem}
          <Alert my={'1em'} icon={<FiAlertCircle color={'black'} size="1rem"/>} sx={
            {
              alignItems: 'center'
            }
          } color="red">
            Make sure to only send ADA on the Cardano Network to avoid potential loss of funds.
          </Alert>

          <Button bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'} sx={
            {
              borderRadius: '9px',
              width: '100%',
              height: '45px'
            }
          }>
            <Text color={'#fff'}>Done</Text>
          </Button>

        </Box>


      </ContainerLayout>
    </>
  );
};

export default WalletExchange;
