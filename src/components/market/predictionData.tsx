import {Box, Flex, Text,Button,Popover,Checkbox} from '@mantine/core';
import {useMediaQuery} from "@mantine/hooks";
import {BsFillCaretRightFill, BsFillCaretDownFill} from 'react-icons/bs';
import { useState} from "react";
import {FiSettings} from 'react-icons/fi';
import {RiArrowLeftRightLine} from 'react-icons/Ri';
import { AiOutlineClose } from "react-icons/ai";

const SettingsIcon = () => {
  return <>
    <Button 
          sx={
              {
                  borderRadius:'10px',
                  fontSize: '16px',
                  // overflow:'inherit !important'
              }
          }

        px={'1em'} py={'1em'} variant="outline">
      <FiSettings />
              
    </Button>
  </>
}

const ArrowIcons = () => {
  return <>
    <Button 
        sx={
            {
                borderRadius:'10px',
                fontSize: '16px',
                // overflow:'inherit !important'
            }
        }

      px={'1em'} py={'1em'} variant="outline">  
      <RiArrowLeftRightLine />
              
    </Button>
  </>
}

const Line = () => {
  return <svg width="1" height="53" viewBox="0 0 1 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="0.5" x2="0.500002" y2="52.5" stroke="#E6E1E6"/>
  </svg>
}

const PredictionData = () => {

  const [isOpen, setIsOpen] = useState(false);

  const collapseItem =() => !isOpen ? setIsOpen(true) : setIsOpen(false);



  const matches = useMediaQuery('(min-width: 40em)');

  return (
    <>
      <Box
        w={{
          sm: '100%',
          lg: '797px'
        }}
        sx={
          {
            border: '1.5px solid #E6E1E6',
            padding: ' 2em 1.5em',
            borderRadius: '16px'
          }
        }>

        <Flex justify={'space-between'} gap={'1em'} wrap={'wrap'} align={'center'}>

          <Box>

            <Text color={'#000'}>Yes</Text>
            <Text weight={'bold'} className={'duplicate'} size={matches ? '34px' : '23px'} color={'#000'}>40 ADA</Text>
            <Text color={'#219653'}>+2 ADA (+1.22%) <span>Past 1 Hour</span></Text>

          </Box>

          <Box sx={
            {
              display: 'flex',
              gap: '0.3em'
            }
          }>
            <ArrowIcons/>
            <Popover width={250} trapFocus position="bottom" withArrow shadow="md">
              <Popover.Target>
              <Button variant="white" px={'0.8em'} py={'0.5em'}><SettingsIcon/></Button>
              </Popover.Target>
              <Popover.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
              <Flex direction="column">
                <Flex justify={'space-between'} align={'center'}>
                  <Text  fw={700} color={'#000'} size={18}>Slippage Tolerance</Text>
                  <Button variant="white" px={'0.8em'} py={'0.5em'} ><AiOutlineClose /></Button>
                </Flex>
                <Checkbox size="md" label="X-Axis" py={'0.6em'}/>
              </Flex>
              

              <Flex direction="column" >
                  <Text   fw={700} color={'#000'} size={18}>Slippage Tolerance</Text>
                <Flex direction="column">
                  <Checkbox size="md" label="X-Axis" py={'0.4em'}/>
                  <Checkbox size="md" label="Y-Axis" py={'0.4em'}/>
                  <Checkbox size="md" label="Grid" py={'0.4em'}/>
                  <Checkbox size="md" label="Decimals" py={'0.4em'}/>
                </Flex>
              </Flex>

              <Flex direction="column">
                  <Text  fw={700} color={'#000'} size={18}>Slippage Tolerance</Text>
                <Flex style={{position:'relative', display:'block'}}>
                  <Checkbox size="md" label="Autoscale" py={'0.4em'}/>
                  
                </Flex>
              </Flex>
              
              </Popover.Dropdown>
            </Popover>
            
          </Box>

          <Line/>

          <Flex gap={'1em'}>
            <Box>
              <Text size={'14px'}>Volumn</Text>
              <Text color={'#000'} weight={'bold'} size={'20px'}>12, 056 ADA</Text>
            </Box>

            <Box>
              <Text size={'14px'}>Liquidity</Text>
              <Text color={'#000'} weight={'bold'} size={'20px'}>9, 056 ADA</Text>
            </Box>
          </Flex>

          <Box onClick={collapseItem} sx={
            {
              cursor: 'pointer'
            }
          }>
            {!isOpen ?  <BsFillCaretRightFill fill={'#000'} size={'1.3em'}/>  :  <BsFillCaretDownFill fill={'#000'} size={'1.3em'}/>}
          </Box>

        </Flex>

        {
          isOpen && (
            <Box my={'1em'} h={'50vh'}  w={'100%'}
               sx={
                 {
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat',
                   backgroundSize: 'contain',
                   backgroundImage: 'url(https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679579155/foreon/Group_187_cvroru.svg)'
                 }
               }
            >

            </Box>
          )
        }

      </Box>


    </>
  )
}

export default PredictionData;