
import {Box,Modal,Text,Flex,Image} from '@mantine/core'
import {useRouter} from "next/router";
import { useDisclosure } from '@mantine/hooks';
import {ReactNode} from "react";

interface Props {
  isOpen: any,
  onClose: any
}

const WalletModal = ({isOpen, onClose}: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const locateNexte = useRouter();
     
  return (
    <>
      <Modal opened={isOpen} onClose={onClose} title="Get started on Foreon"  centered>
        <Text color={'grey'}  size={'15px'}>By connection your wallet, you agree to our <br/>
          <Flex>
            <Text color={'blue'}  size={'15px'} px={'0.5em'}>Terms of Service</Text> & <Text px={'0.5em'} color={'blue'}  size={'15px'} >Privacy Policy</Text>
          </Flex>
          
        </Text>
        <Flex align={'center'}  px={'2em'} py={'2em'}>
          <Image
              height={50}
              width={50}
              alt={'Logo'}
              src={
                'https://res.cloudinary.com/du59y8tjp/image/upload/v1680786648/wallet1_lkuhxi.png'
              }
            />
            <Text px={'2em'} className='duplicate' color='black'>Connect Nami Wallet</Text>
        </Flex>
        <Flex align={'center'}  px={'2em'} py={'2em'}>
          <Image
              height={50}
              width={50}
              alt={'Logo'}
              src={
                'https://res.cloudinary.com/du59y8tjp/image/upload/v1680788208/wallet2_lmep4h.png'
              }
            />
            <Text px={'2em'} className='duplicate' color='black'>Connect Eternl Wallet</Text>
        </Flex>
        <Flex align={'center'}  px={'2em'} py={'2em'}>
          <Image
              height={50}
              width={50}
              alt={'Logo'}
              src={
                'https://res.cloudinary.com/du59y8tjp/image/upload/v1680788253/wallet3_ifflxe.png'
              }
            />
            <Text px={'2em'} className='duplicate' color='black'>Connect Typhoon Wallet</Text>
        </Flex>
      </Modal>
    </>
  )
}

export default WalletModal;