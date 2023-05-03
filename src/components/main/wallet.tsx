import { Box, Flex, Text, Button, Drawer, Image } from '@mantine/core';
import { BiWalletAlt, BiCopy } from 'react-icons/bi';
import ContainerLayout from '@/layouts/containerLayout';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import Buttons from '@/components/micro/buttons';
import { AiOutlineDollar } from 'react-icons/ai';
import WalletPredictions from '@/components/micro/walletPredictions';
import InWalletPredictions from '@/components/micro/inWalletPredictions';
import cogoToast from 'cogo-toast';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import WalletDeposit from '@/components/walletDeposit';
import WalletExchange from '@/components/cryptoWalletKits/walletExchange';
import WalletWithrawal from '@/components/cryptoWalletKits/WalletWithrawal';
import { BsPower } from 'react-icons/bs';
import {RiArrowLeftRightLine} from 'react-icons/ri';
import { useRef } from 'react';
import {MdOutlineArrowBackIos} from 'react-icons/md';

const ArrowIcons = () => {
  return <>
    <Button 
        sx={
            {
                borderRadius:'10px',
                fontSize: '16px',
                // overflow:'inherit !important'
            }
        }

      px={'1em'} py={'1em'} variant="outline">  
      <RiArrowLeftRightLine />
              
    </Button>
  </>
}

// const ArrowIcon = () => {
//   return (
//     <svg
//       width="42"
//       height="38"
//       viewBox="0 0 42 38"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect x="1" y="1" width="40" height="36" rx="4" fill="white" />
//       <g clipPath="url(#clip0_461_4278)">
//         <path
//           d="M23.6667 21.6667V19L27 22.3333L23.6667 25.6667V23H15.6667V21.6667H23.6667ZM18.3333 12.3333V14.9993L26.3333 15V16.3333H18.3333V19L15 15.6667L18.3333 12.3333Z"
//           fill="#5138F6"
//         />
//       </g>
//       <rect x="1" y="1" width="40" height="36" rx="4" stroke="#5138F6" />
//       <defs>
//         <clipPath id="clip0_461_4278">
//           <rect
//             width="16"
//             height="16"
//             fill="white"
//             transform="translate(13 11)"
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// };

const WalletIcon = () => (
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.6673 2.66667H14.334V9.33333H13.6673V11.3333C13.6673 11.5101 13.5971 11.6797 13.4721 11.8047C13.347 11.9298 13.1775 12 13.0007 12H1.00065C0.82384 12 0.654271 11.9298 0.529246 11.8047C0.404222 11.6797 0.333984 11.5101 0.333984 11.3333V0.666667C0.333984 0.489856 0.404222 0.320286 0.529246 0.195262C0.654271 0.0702379 0.82384 0 1.00065 0H13.0007C13.1775 0 13.347 0.0702379 13.4721 0.195262C13.5971 0.320286 13.6673 0.489856 13.6673 0.666667V2.66667ZM12.334 9.33333H8.33398C7.44993 9.33333 6.60208 8.98214 5.97696 8.35702C5.35184 7.7319 5.00065 6.88406 5.00065 6C5.00065 5.11595 5.35184 4.2681 5.97696 3.64298C6.60208 3.01786 7.44993 2.66667 8.33398 2.66667H12.334V1.33333H1.66732V10.6667H12.334V9.33333ZM13.0007 8V4H8.33398C7.80355 4 7.29484 4.21071 6.91977 4.58579C6.5447 4.96086 6.33398 5.46957 6.33398 6C6.33398 6.53043 6.5447 7.03914 6.91977 7.41421C7.29484 7.78929 7.80355 8 8.33398 8H13.0007ZM8.33398 5.33333H10.334V6.66667H8.33398V5.33333Z"
      fill="#5138F6"
    />
  </svg>
);

interface closeWallet {
  closeWallet: Function;
}
const Wallet:React.FC<closeWallet> = (props) => {
  const [showBalance, setShowBalance] = useState(true);
  const myRef = useRef(null);

  function handlecloseClick() {
    props.closeWallet();
  }

  const hideAndShowBalace = () =>
    showBalance ? setShowBalance(false) : setShowBalance(true);

  const copyAddress = () => {
    const url = 'addrr24245jtfmd53i6o358876';
    navigator.clipboard
      .writeText(url)
      .then((res) => cogoToast.success('Address copied to clipboard'));
  };

  const [opened, { open, close }] = useDisclosure();
  const [isWithdrawal, { open: onOpen, close: onClose }] = useDisclosure();

  return (
    <>
      <Drawer
        size={'lg'}
        opened={opened}
        onClose={close}
        position={'right'}
        styles={{
          body: { padding: 0 },
          header: { display: 'none' },
        }}
      >
        <WalletDeposit closeDeposit={close}/>
        {/* <WalletExchange /> */}
      </Drawer>

      <Drawer
        size={'lg'}
        opened={isWithdrawal}
        onClose={onClose}
        position={'right'}
        styles={{
          body: { padding: 0 },
          header: { display: 'none' },
        }}
      >
        {/*<WalletDeposit/>*/}
        <WalletWithrawal closeWithrawal={onClose}/>
      </Drawer>

      <Box>
        <Box bg={'#22005D'} p={'2em 1.5em'} h={'280px'}>
          <Flex
            justify={'space-between'}
            align={'center'}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Flex align={'center'} onClick={handlecloseClick}>

              <MdOutlineArrowBackIos fill={'#fff'} />
              <Text
                px={'0.2em'}
                color={'#fff'}
                weight={'bold'}
                className={'duplicate'}
                size={'25px'}
              >
                Wallet
              </Text>
            </Flex>

            <Box
              sx={{
                border: '1px solid red',
                borderRadius: '16px',
                padding: '0.5em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* <Text color={'#fff'}>
                {' '}
                <BsPower fill={'red'} /> Diconnect Wallet{' '}
              </Text> */}
              
                <Flex
                  gap={'0.3em'}
                  align={'center'}
                  p={'0.2em 0.3em'}
                 
                >
                  <BsPower  fill={'red'}/> <Text  color={'#fff'}>Disconnect Wallet</Text>
                </Flex>
              
            </Box>
          </Flex>

          <Flex align={'center'} gap={'0.6em'} justify={'center'}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
                justifyContent: 'center',
                margin: '2em 0',
                borderRadius: '8px',
                border: '1px solid #5138F6',
                padding: '0.5em',
                width: 'fit-content',
              }}
            >
              <WalletIcon />
              <Text color={'#fff'} weight={'bold'}>
                addrr24245jtf53i6o35...8876
              </Text>
            </Box>
            <Box
              bg={'#5138F6'}
              w={'40px'}
              h={'40px'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={copyAddress}
            >
              <BiCopy color={'#fff'} fill={'#fff'} />
            </Box>
          </Flex>
        </Box>

        <ContainerLayout>
          <Box my={'1em'} pos={'relative'} top={'-6em'}>
            <Box
              bg={'#F6EEFF'}
              sx={{
                borderRadius: '0.5em',
                padding: '1.5em',
              }}
            >
              <Flex justify={'space-between'}>
                <Box>
                  <Text color={'#22005D'}>Balance</Text>
                  <Text weight={'bold'} size={'22px'} color={'#22005D'}>
                    {showBalance ? '50,56 ADA' : 'XXXXXX'}
                  </Text>
                </Box>

                <Box>
                  <Text color={'#22005D'}>Portfolio</Text>
                  <Text weight={'bold'} size={'22px'} color={'#22005D'}>
                    {showBalance ? '50,56 ADA' : 'XXXXXX'}
                  </Text>
                </Box>
              </Flex>

              <Flex align={'center'} my={'1.5em'} justify={'space-between'}>
                <Box
                  display={'flex'}
                  sx={{
                    alignItems: 'center',
                    gap: '0.5em',
                    cursor: 'pointer',
                  }}
                  onClick={hideAndShowBalace}
                >
                  {showBalance ? (
                    <>
                      <Text color={'#22005D'}>Hide balance</Text>
                      <FiEyeOff color={'#22005D'} />
                    </>
                  ) : (
                    <>
                      <Text color={'#22005D'}>Show balance</Text>
                      <FiEye color={'#22005D'} />
                    </>
                  )}
                </Box>
                {/*@ts-ignore*/}
                <Box cursor={'pointer'}>
                <Button variant="white" px={'0.8em'} py={'0.5em'} ><ArrowIcons/></Button>
                </Box>
              </Flex>
            </Box>

            <Flex gap={'1em'} my={'1em'} justify={'center'}>
              <Button
                color={''}
                onClick={open}
                sx={{
                  width: '150px',
                  borderRadius: '16px',
                  height: '52px',
                }}
                bg={
                  'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'
                }
              >
                <Image
                    sx={{
                      margin:'10px'
                    }}
                    height={17}
                    width={17}
                    alt={'Logo'}
                    src={
                      'https://res.cloudinary.com/du59y8tjp/image/upload/v1682136046/money-recive_v2ywav.png'
                    }
                  />
                <Text color={'#fff'}>Deposit</Text>
              </Button>
              <Button
                color={'black'}
                bg={'none'}
                //@ts-ignore
                sx={{
                  width: '150px',
                  borderRadius: '16px',
                  height: '52px',
                  border: '1px solid blue',
                  alignItems:'center',
                  justifyContent:'center',
                  '&:hover': {
                    background: 'red',
                  },
                }}
                onClick={onOpen}
              >
                {/* <Text color={'#000'}>
                  <AiOutlineDollar /> Withdraw
                </Text> */}
                <Flex
                  gap={'0.3em'}
                  align={'center'}
                  p={'0.3em 0.5em'}
                  justify={'center'}
                 
                >
                  <Image
                    sx={{
                      margin:'10px'
                    }}
                    height={17}
                    width={17}
                    alt={'Logo'}
                    src={
                      'https://res.cloudinary.com/du59y8tjp/image/upload/v1682136112/money-send_hngowz.png'
                    }
                  />
                  {/* <AiOutlineDollar  size={17}/> */}
                   <Text  color={'#000'}>Withdraw</Text>
                </Flex>
              </Button>
            </Flex>
          </Box>
        </ContainerLayout>
        <Box>
          <InWalletPredictions />
        </Box>
      </Box>
    </>
  );
};

export default Wallet;
