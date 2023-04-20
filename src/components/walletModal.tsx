
import {Box,Modal,Text,Flex,Image,Button} from '@mantine/core'
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
        <Flex direction={'column'} >
          <Button sx={{background:'white',width:'100%'}}  py={'2em'} my={'1em'} >
            <div style={{width:'20%'}}>
              <Image
                  height={50}
                  width={50}
                  alt={'Logo'}
                  src={
                    'https://res.cloudinary.com/du59y8tjp/image/upload/v1680786648/wallet1_lkuhxi.png'
                  }
                />
            </div >
            <div style={{width:'80%'}}>
              <Text px={'2em'} className='duplicate' color='black'>Connect Nami Wallet</Text>
            </div>
              
          </Button>
          
          <Button sx={{background:'white',width:'100%'}}   py={'2em'} my={'1em'} >
            <div style={{width:'20%'}}>
              <Image
                  height={50}
                  width={50}
                  alt={'Logo'}
                  src={
                    'https://res.cloudinary.com/du59y8tjp/image/upload/v1680788208/wallet2_lmep4h.png'
                  }
                />
            </div>
            <div style={{width:'80%'}}>
              <Text px={'2em'} className='duplicate' color='black'>Connect Eternl Wallet</Text>
            </div>
              
          </Button>
          <Button sx={{background:'white',width:'100%'}}  py={'2em'} my={'1em'}>
            <div style={{width:'20%'}}>
              <Image
                  px={'0.5em'}
                  height={45}
                  width={45}
                  alt={'Logo'}
                  src={
                    'https://res.cloudinary.com/du59y8tjp/image/upload/v1680788253/wallet3_ifflxe.png'
                  }
                />  
            </div>
            <div style={{width:'80%'}}>
              <Text px={'2em'} className='duplicate' color='black'>Connect Typhoon Wallet</Text>
            </div>
              
          </Button>
        </Flex>
        
      </Modal>
    </>
  )
}

export default WalletModal;