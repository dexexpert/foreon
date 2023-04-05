import {Box, Text, Flex, Alert, Button, TextInput, Checkbox, Modal} from '@mantine/core';
import {MdOutlineArrowBackIos} from 'react-icons/md';
import ContainerLayout from '@/layouts/containerLayout';
import { useDisclosure} from "@mantine/hooks";
import {BiCopy} from "react-icons/bi";
import {FiAlertCircle} from 'react-icons/fi'
import {SuccessSvg} from "@/components/micro/notificationAssets";
import {ErrorModal, SuccessModal, WarningModal} from "@/components/popupKits";

const rightButton = <>
  <Button mr={'3em'} className={'global-btn-color'} sx={
    {
      borderRadius: '8px'
    }
  }>
    <Text color={'#fff'}>Max</Text>
  </Button>
</>




const WalletWithdrawal = () => {

  const [ opened , {open , close }] = useDisclosure();
  const [ onError , {open: openErrorModal , close: closeErrorModal  }] = useDisclosure();
  const [ onWarn , {open: openWarning , close: closeWarning  }] = useDisclosure();

  const withdrawalModal =  <SuccessModal onClose={close} isOpen={opened} title={'Transaction Successful'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
    </SuccessModal>


  const errorModal =  <ErrorModal onClose={close} isOpen={onError} title={'Transaction Successful'}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
  </ErrorModal>

  const warning =  <WarningModal isOpen={onWarn} title={'Transaction Failed'} onClose={closeWarning}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
  </WarningModal>

  return (
    <>

      {withdrawalModal}
      {errorModal}
      {warning}

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
          Withdraw
        </Text>
      </Box>
      <ContainerLayout>

        <Text color={'#000'} my={'1em'} weight={'bold'}> Withdraw to another wallet or exchange</Text>

        <TextInput size={'lg'} my={'0.5em'} label={'ADA Address'}
                   styles={{
                     label: {fontSize: ' 14px '}
                   }}/>

        <TextInput size={'lg'} my={'1em'} label={'Amount To Withdraw'}
                   rightSection={rightButton}
                   styles={{
                     label: {fontSize: ' 14px '}
                   }}/>
        <Box my={'1em'}>
          <Alert color={'red'} py={'1.5em'}>
            <Flex justify={'space-between'}>
              <Text>
                Available Balance:
              </Text>

              <Text color={'#000'} weight={'bold'}>12, 439 ADA</Text>
            </Flex>
          </Alert>
        </Box>


      </ContainerLayout>

      <Box bg={'#E9DDFF'} my={'3em'} h={'1px'}></Box>



     <ContainerLayout>

       <Box my={'1em'}>
         <Checkbox color={'dark'}    label={'I am sending money to a wallet that accepts funds on the Cardano network.'}
          styles={
            {
              label: {color: 'black'}
            }
          }/>

       </Box>

       <Button h={'4em'} my={'3em'} sx={
         {
           borderRadius: '16px'
         }
       } className={'global-btn-color'} w={'100%'}
       onClick={openWarning}>
         <Text color={'#fff'}>Withdraw</Text>
       </Button>
     </ContainerLayout>

    </>
  );
};

export default WalletWithdrawal;
