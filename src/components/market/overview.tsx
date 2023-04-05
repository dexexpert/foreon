import {Box, Text} from '@mantine/core'
import PredictionData from "@/components/market/predictionData";
import ContainerLayout from "@/layouts/containerLayout";
import Booking from "@/components/market/boolingSection";
import MarketAddress from "@/components/market/marketAddress";

const Overview = () => {
  return (
    <>
      <ContainerLayout>
        <Box my={'2em'}>
          <PredictionData/>
          <Booking/>
          <MarketAddress/>
        </Box>
        <Box w={
          {
            sm: '100%',
            lg: '797px'
          }
        }>
          <Text color={'#22005D'} className={'duplicate'} size={'22px'}>Market Rules</Text>

          <Text my={'0.7em'}>Lorem ipsum dolor sit amet consectetur. Venenatis interdum euismod volutpat facilisi congue hendrerit
            morbi in varius. Dictumst gravida quis sed maecenas. Vitae felis nec amet risus velit massa sem eu in.
            Faucibus dignissim mauris neque a faucibus nunc congue bibendum ultricies. Eget non consequat pharetra proin
            euismod cursus est lacus elit. Malesuada sagittis et praesent mi. Enim scelerisque donec turpis egestas.
            Vitae elit malesuada vivamus. Faucibus dignissim mauris neque a faucibus nunc congue bibendum ultricies.
            Eget non consequat pharetra proin euismod cursus est lacus elit. Malesuada sagittis et praesent mi. Enim
            scelerisque donec turpis egestas. Vitae elit malesuada vivamus.</Text>
        </Box>

      </ContainerLayout>
    </>
  )
}

export default Overview;