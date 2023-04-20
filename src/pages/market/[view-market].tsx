import { Box, Flex, Tabs, Drawer , Text,Button } from '@mantine/core';
import Header from '@/components/major/header';
import MarketViewHeader from '@/components/micro/marketViewHeader';
import Overview from '@/components/market/overview';
import FooterAsset from '@/components/micro/footerAsset';
import BuyBlock from '@/components/market/buyBlock';
import Wallet from '@/components/main/wallet';
import WalletDeposit from '@/components/walletDeposit';
import MarketHeader from '@/components/major/marketHeader';
import { useDisclosure } from '@mantine/hooks';
import {SellBlock} from "@/components/market/sellcrypto";
import {PredictionWinBlock} from "@/components/market/predictionWinBlock";
import {RedeemWinings} from "@/components/market/redeemWinings";
import React, { Suspense, lazy,useState } from 'react';
import { useRef } from 'react';


const ViewMarket = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const myRef = useRef(null);
  const [closeDrawer, setCloseDrawer] = useState(true);

  const closeClick = () => {
    if(closeDrawer == true){
      console.log("false");
      setCloseDrawer(false);
      
    } else setCloseDrawer(false);
    
  }

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
     <Wallet closeWallet={close} /> 
    
  </Drawer>
      
      <Box
        sx={{
          padding: '0em 1em',
          background: '#F6EEFF',
          backgroundSize: 'cover',
          backgroundPos: 'center',
          backgroundImage:
            'url(https://res.cloudinary.com/dhkccnvyn/image/upload/v1679208101/foreon/Rectangle_41_nshdyp.svg)',
        }}
      >
        <MarketHeader handleEvent={open} />
        <MarketViewHeader />
      </Box>

      <Flex
        mx={'auto'}
        w={{
          sm: '100%',
          md: '90%',
          lg: '90%',
        }}
        justify={'center'}
        direction={{
          base: 'column',
          lg: 'row',
        }}
      >
        <Box
          w={{
            sm: '100%',
            lg: '70%',
          }}
        >
          <Overview />
        </Box>

        <Box
          w={{
            sm: '100%',
            lg: '30%',
          }}
        >
          <Tabs my={'1.6em'} defaultValue={'first'}>
            <Tabs.List grow>
              <Tabs.Tab value="first">
                <Text className={'duplicate'} size={'16px'}>Buy</Text>
              </Tabs.Tab>
              <Tabs.Tab value="second" color="blue">
                <Text className={'duplicate'} size={'16px'}>Sell</Text>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="first" pt="xs">
              <BuyBlock />
            </Tabs.Panel>

            <Tabs.Panel value="second" pt="xs">
              <SellBlock />
            </Tabs.Panel>
          </Tabs>
        </Box>
      </Flex>

      <FooterAsset />
    </>
  );
};

export default ViewMarket;
