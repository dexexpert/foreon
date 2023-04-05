import Header from '@/components/major/header';
import FooterAsset from '@/components/micro/footerAsset';
import Faq from '@/components/home/faq';
import FilterTop from '@/components/market/filterTop';
import ContainerLayout from '@/layouts/containerLayout';
import Predictions from "@/components/market/predictios";
import {Box} from '@mantine/core'
import AuthHeader from "@/components/major/authHeader";
import {useRouter} from "next/router";

const Market = () => {

  const locateNexte = useRouter();

  return (
    <>
      <Box bg={'#F6EEFF'}  mb={'1.5em'}>
        <AuthHeader  handleEvent={ (e:any) => locateNexte.push('/market/overview')} />
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
