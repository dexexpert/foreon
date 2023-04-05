import {Box, Text, Input, Button, Flex, TextInput} from '@mantine/core'
import ContainerLayout from "@/layouts/containerLayout";
import Buttons from "@/components/micro/buttons";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";


const maxButton = <Button bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'}>
  <Text color={'#fff'}>Max</Text>
</Button>

export const SellBlock = () => {
  return (
    <>
      <ContainerLayout>
        <Box my={'2em'}  >
          <Text weight={'bold'} color={'#000'}>Choose Outcome</Text>

          <Flex gap={'1em'} my={'0.5em'} justify={'space-between'}>
            {/*@ts-ignore*/}
            <Buttons color={'#000'} bg={'#F4EFF4'} w={'177px'} h={'45px'}>Buy Yes 40 ADA</Buttons>
            {/*@ts-ignore*/}
            <Buttons color={'#fff'} bg={'#DE3730'}  w={'177px'}  h={'45px'}>Buy No 20 ADA</Buttons>
          </Flex>

          <Flex justify={'space-between'} align={'center'}>
            <Text color={'#000'} weight={'500'} my={'0.5em'}>Enter Amount</Text>
            <FiSettings color={'#000'}/>
          </Flex>

          <TextInput type={'number'}  size={'lg'} rightSection={maxButton}
                     styles = {
                       {
                         rightSection: {
                           marginRight: '20px'
                         }
                       }
                     }/>

          <Box w={'100%'} my={'1em'} px={'1.5em'} py={'1em'} bg={'#F4EFF4'}
               sx={
                 {
                   borderRadius: '10px'
                 }
               }>

            <Text>Available Balance: {"       "} <span style={
              {
                color: '#000',
                fontWeight: 'bold'
              }
            }>67, 0000.5 ADA </span></Text>

          </Box>

          <Box>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Avarage Price</Text>
              <Text color={'#000'}> Avarage Price</Text>

            </Flex>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Est. Shares </Text>
              <Text color={'#000'}> 267 </Text>

            </Flex>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> LP Fee </Text>
              <Text color={'#000'}> 0.70% </Text>

            </Flex>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Potential Return </Text>
              <Text color={'#000'}> 90 ADA (10.2%) </Text>

            </Flex>

          </Box>
          {/*@ts-ignore*/}
          <Link href={'/market/redeemScore'}> <Buttons color={''} bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'} my={'1em'}
                                                       w={'100%'} h={'52px'} >Sell</Buttons></Link>


        </Box>
      </ContainerLayout>
    </>
  )
}
