import {Box, Text, Input, Button, Flex, TextInput} from '@mantine/core'
import ContainerLayout from "@/layouts/containerLayout";
import Buttons from "@/components/micro/buttons";
import { FiSettings } from "react-icons/fi";
import {SuccessSvg} from "@/components/micro/notificationAssets";


const maxButton = <Button bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'}>
  <Text color={'#fff'}>Max</Text>
</Button>

export const RedeemWinings = () => {
  return (
    <>
      <ContainerLayout>
        <Box my={'2em'}  >



          <Flex justify={'center'} align={'center'}>
            <Box sx={
              {
                textAlign: 'center'
              }
            }>
              <center>
                <SuccessSvg/>
              </center>
              <Text color={'black'} my={'0.6em'} className={'duplicate'} size={'32px'}
                    w={
                      {
                        sm:'100%' ,
                        lg: '230px'
                      }
                    }>Market Resolved To You</Text>

              <Text color={'black'} >Import duty to increase in Q2</Text>
              <Text color={'black'} weight={'black'}>Outcome: <span style={
                {
                  color: 'green'
                }
              }>Yes</span></Text>
            </Box>
          </Flex>

          <Box bg={'#E9DDFF'} w={'100'} p={'1px'} my={'3em'}>

          </Box>


          <Box>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Market End</Text>
              <Text color={'#000'}>25 February, 2023 Avarage Price</Text>

            </Flex>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Shares</Text>
              <Text color={'#000'}> 267 </Text>

            </Flex>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Final Value</Text>
              <Text color={'#000'}> 650 ADA </Text>

            </Flex>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Potential Return </Text>
              <Text color={'#000'}> 90 ADA (10.2%) </Text>

            </Flex>

          </Box>



        </Box>
      </ContainerLayout>
    </>
  )
}
