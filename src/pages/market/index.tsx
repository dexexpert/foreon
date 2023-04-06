import Header from '@/components/major/header';
import FooterAsset from '@/components/micro/footerAsset';
import Faq from '@/components/home/faq';
import FilterTop from '@/components/market/filterTop';
import ContainerLayout from '@/layouts/containerLayout';
import Predictions from "@/components/market/predictios";
import {Box,Modal,Text,Flex,Image} from '@mantine/core'
import MarketHeader from "@/components/major/marketHeader";
import {useRouter} from "next/router";
import { useDisclosure } from '@mantine/hooks';
import WalletModal from '../../components/walletModal'


const Market = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const locateNexte = useRouter();
  

  return (
    <>
      <WalletModal onClose={close} isOpen={opened} />
      
      <Box bg={'#F6EEFF'}  mb={'1.5em'}>
        {/* <MarketHeader  handleEvent={ (e:any) => locateNexte.push('/market/overview')} /> */}
        <MarketHeader handleEvent={open}/>
      </Box>
      <Box sx={
        {
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679506698/foreon/MacBook_Pro_14__-_3_jygyg2.png)'
        }
      }>
        <FilterTop />
        <ContainerLayout>
          <Predictions/>
        </ContainerLayout>
      </Box>
      <ContainerLayout>
        <Faq />
      </ContainerLayout>
      <FooterAsset/>

    </>
  );
};

export default Market;
