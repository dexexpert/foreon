import { Box, Flex, Tabs, Drawer , Text } from '@mantine/core';
import Header from '@/components/major/header';
import MarketViewHeader from '@/components/micro/marketViewHeader';
import Overview from '@/components/market/overview';
import FooterAsset from '@/components/micro/footerAsset';
import BuyBlock from '@/components/market/buyBlock';
import Wallet from '@/components/main/wallet';
import WalletDeposit from '@/components/walletDeposit';
import AuthHeader from '@/components/major/authHeader';
import { useDisclosure } from '@mantine/hooks';
import {SellBlock} from "@/components/market/sellcrypto";
import {PredictionWinBlock} from "@/components/market/predictionWinBlock";
import {RedeemWinings} from "@/components/market/redeemWinings";


const RedeemScore = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position={'right'}
        styles={{
          body: { padding: 0 },
          header: { display: 'none' },
        }}
      >
        <Wallet closeWallet={close}/>
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
        <AuthHeader handleEvent={open} />
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
          <PredictionWinBlock/>
        </Box>
      </Flex>

      <FooterAsset />
    </>
  );
};

export default RedeemScore;
