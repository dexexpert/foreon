import ContainerLayout from "@/layouts/containerLayout";
import {Box, Flex, Button, Text} from '@mantine/core'
import MarketBox from "@/components/market/marketBox";
import {HomeTab} from "@/components/micro/homeTab";
import {mkData} from '@/utils/marketData';







const maketList = mkData.filter((item, idx) => idx < 6).map((items, index) => {
    // if(index < 7){
      console.log("index", index)
      return <Box key={index} > 
            <MarketBox avatar={items.avatar} cate={items.cate} title={items.title} yes$={items.yes$} no$={items.no$} volume={items.volume} liquidity={items.liquidity}/> 
          </Box>
    // }
  
})

const HomeCategories = () => {
  return (
    <Box bg={'url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679506698/foreon/MacBook_Pro_14__-_3_jygyg2.png)'} py={'1em'}
         my={'9em'} >
      <ContainerLayout>

        <Box my={
          {
            base: '3em',
            lg: '10em'
          }
        }

        >

          <Box my={'2em'}>
            <HomeTab/>
          </Box>

          <Flex wrap={'wrap'} gap={
            {
              base: '3em',
              lg: '1em'
            }
          } justify={'space-around'}>


            {maketList}


          </Flex>


          <Flex my={'3em'} justify={'center'}>
            <a href={'/market'}>
              <Button className={'global-btn-color'} w={'165px'} h={'52px'}
                      sx={
                        {
                          borderRadius: '15px'
                        }
                      }>
                <Text color={'#fff'}>See All Market</Text>
              </Button>
            </a>
          </Flex>


        </Box>
      </ContainerLayout>
    </Box>
  )
}

export default HomeCategories;