import Header from '@/components/major/header';
import FooterAsset from '@/components/micro/footerAsset';
import Faq from '@/components/home/faq';
import FilterTop from '@/components/market/filterTop';
import ContainerLayout from '@/layouts/containerLayout';
import Predictions from "@/components/market/predictios";
import FilterSidebar from "@/components/market/filterSidebar";
import {Box,Modal,Text,Flex,Image,BackgroundImage,Button,Dialog} from '@mantine/core'
import MarketHeader from "@/components/major/marketHeader";
import {useRouter} from "next/router";
import { useDisclosure } from '@mantine/hooks';
import WalletModal from '../../components/walletModal';
import React, { Suspense, lazy,useState } from 'react';
import { useRef } from 'react';


const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};
const Science = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [showSlowComponent, setShowSlowComponent] = useState(false);
  const [grandchildData, setGrandchildData] = useState('');
  const locateNexte = useRouter();
  const myRef = useRef(null);
  

  const handleClick = () => {
    if(showSlowComponent == false){
      setShowSlowComponent(true);
    } else setShowSlowComponent(false);
    
  }

  // function handleGrandchildClick({data}:any) {
  //   setGrandchildData(data);
  //     // if(showSlowComponent == false){
  //     //   setShowSlowComponent(true);
  //     // } else setShowSlowComponent(false);
  // }
  

  return (
    <>
      <WalletModal onClose={close} isOpen={opened} />
      
      <Box
        sx={{
          position: 'relative',
          overflow: 'overlay',
        }}
      >
      <BackgroundImage 
        // sx={
        //   {
        //     backgroundRepeat: 'no-repeat',
        //     backgroundImage: 'url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679506698/foreon/MacBook_Pro_14__-_3_jygyg2.png)'
        //   }
        // }
        h={{base: '134vh', md: '120vh', lg: '110vh'}}
          pb={'2em'}
          src="https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679506698/foreon/MacBook_Pro_14__-_3_jygyg2.png"
        
        >
          <Box bg={'#F6EEFF'}  mb={'1.5em'}>
            {/* <MarketHeader  handleEvent={ (e:any) => locateNexte.push('/market/overview')} /> */}
            <MarketHeader handleEvent={open}/>
          </Box>
        <FilterTop handleClick={handleClick}/>
        
        
        <Flex>
        
       
        {showSlowComponent &&
          <Suspense fallback={<div>Loading...</div>}>
            <div className={`slow-component-wrapper ${showSlowComponent ? 'show' : ''}`}>
              <FilterSidebar />
            </div>
          </Suspense>
        }
          <ContainerLayout>
            <Predictions category={'SCIENCE'}/>
          </ContainerLayout>  
        </Flex>
        
      </BackgroundImage>
      </Box>
      <ContainerLayout>
        <Faq />
      </ContainerLayout>
      <FooterAsset/>
      

    </>
  );
};

export default Science;
