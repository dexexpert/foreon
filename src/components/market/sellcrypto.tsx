import {Box, Text, Input, Button, Flex, TextInput,Slider,Popover} from '@mantine/core'
import ContainerLayout from "@/layouts/containerLayout";
import Buttons from "@/components/micro/buttons";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";


const maxButton = <Button bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'}>
  <Text color={'#fff'}>Max</Text>
</Button>

export const SellBlock = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <>
      <ContainerLayout>
        <Box my={'2em'}  >
          <Text weight={'bold'} color={'#000'}>Choose Outcome</Text>

          {selected ? 
              <Flex gap={'1em'} my={'0.5em'} justify={'space-between'}>
                  {/*@ts-ignore*/}
                <Buttons variant="white" color={'#fff'} bg={'#219653'} w={'177px'} h={'45px'} onClick={()=> setSelected(true)}>Buy Yes 40 ADA</Buttons>
                {/*@ts-ignore*/}
                <Buttons variant="white" color={'#000'} bg={'#F4EFF4'}  w={'177px'} h={'45px'} onClick={() => setSelected(false)}>Buy No  20 ADA</Buttons>
              </Flex>
            
              :

              <Flex gap={'1em'} my={'0.5em'} justify={'space-between'}>
                  {/*@ts-ignore*/}
                <Buttons  variant="white" color={'#fff'} bg={'#F4EFF4'} w={'177px'} h={'45px'} onClick={()=> setSelected(true)}>Buy Yes 40 ADA</Buttons>
                {/*@ts-ignore*/}
                <Buttons variant="white" color={'#000'} bg={'red'}  w={'177px'} h={'45px'} onClick={() => setSelected(false)}>Buy No  20 ADA</Buttons>
              </Flex>
          }

          <Flex justify={'space-between'} align={'center'}>
            <Text color={'#000'} weight={'500'} my={'0.5em'}>Enter Shares</Text>
            <Popover opened={opened} onChange={setOpened} width={300} trapFocus position="bottom" withArrow shadow="md">
              <Popover.Target>
              <Button variant="white" px={'0.8em'} py={'0.5em'} onClick={() => setOpened((o) => !o)}><FiSettings /></Button>
              </Popover.Target>
              <Popover.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
              <Flex justify={'space-between'} align={'center'}>
                <Text fw={700} color={'#000'} size={15}>Slippage Tolerance</Text>
                <Button variant="white" px={'0.8em'} py={'0.5em'} onClick={() => setOpened((o) => !o)}><AiOutlineClose /></Button>
              </Flex>
              <Flex justify={'space-between'} align={'center'}>
                <Button color="indigo" variant="filled" px={'0.8em'} py={'0.5em'}><Text color={'white'}>0.1%</Text></Button> 
                <Button variant="default" px={'0.8em'} py={'0.5em'}>0.5%</Button>
                <Button variant="default" px={'0.8em'} py={'0.5em'}>1%</Button> 
                <Button variant="default" px={'0.8em'} py={'0.5em'}>0.1%</Button>
              </Flex>
              </Popover.Dropdown>
            </Popover>
            {/* <FiSettings color={'#000'}/> */}
          </Flex>

          <TextInput type={'number'}  size={'lg'} rightSection={maxButton}
                     styles = {
                       {
                         rightSection: {
                           marginRight: '20px'
                         }
                       }
                     }/>
          <Slider
                marks={[
                  { value: 0, label: '0%' },
                  { value: 20, label: '' },
                  { value: 50, label: '50%' },
                  { value: 80, label: '' },
                  { value: 100, label: '100%' }
                ]}
                my={'3em'}
              />

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
            }>7,895 Shares </span></Text>

          </Box>

          <Box>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Your Average Price</Text>
              <Text color={'#000'}> 90 ADA</Text>

            </Flex>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> LP Fee </Text>
              <Text color={'#000'}> 0.70%  </Text>

            </Flex>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Remaining Shares </Text>
              <Text color={'#000'}> 267 </Text>

            </Flex>

            <Flex justify={'space-between'} my={'0.3em'}>

              <Text color={'#000'}> Est. Amount Received </Text>
              <Text color={'#000'}> 90 ADA  </Text>

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
