import {Box, Button, Table ,  Flex, Text} from '@mantine/core';
import ContainerLayout from "@/layouts/containerLayout";
import { useState } from 'react';


const InWalletPredictions =() => {
  const [liquidity, setLiquidity] = useState(false);
  const [position, setPosition] = useState(false);
  const elements = [
    {name:1, market: 'Import duty to increase in Q2', position: 'Yes', price: '25 ADA',  shares: '589.1',payout: '700 ADA' ,button:'claim'},
    {name:2, market: 'United to win Arsenal', position: 'Yes', price: '25 ADA',  shares: '589.1',payout: '700 ADA',button:'claim' },
    {name:3, market: 'Biden to run for second tenure', position: 'No', price: '25 ADA',  shares: '589.1',payout: '700 ADA',button:'claim' },

  ];

  const rowliquidity = elements.map((element) => (
    <tr key={element.name}>
      <td><Text>{element.market}</Text></td>
      <td>{element.position}</td>
      <td>{element.price}</td>
      <td>{element.shares}</td>
      <td>{element.payout}</td>
      <td>
        <Button
              px={'0.3em'}
              sx={{
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)',
              }}
            >
              <Text color={'#fff'}>claim</Text>
            </Button>
      </td>
    </tr>
  ));

  const rowPosition = elements.map((element) => (
    <tr key={element.name}>
      <td><Text fw={700}>{element.market}</Text></td>
      <td>{element.position}</td>
      <td>{element.price}</td>
      <td>{element.shares}</td>
      <td>{element.payout}</td>
    </tr>
  ));


  return (
    <>
     <Box sx={{
       border: '0.5px solid #E9DDFF',
       borderRight: 'none',
       borderLeft: 'none',
       padding: '1.5em 0'
     }}>

       <Flex justify={'center'} gap={'1em'}>
         <Button w={'105px'} bg={position ? 'none' : '#E9DDFF'} h={'36px'} onClick={() => {
              setPosition(true);
              setLiquidity(false);
            }}
            sx={position ? 
              {
                borderRadius: '5px ',
                border: '2px solid blue'
              } :
              {
                borderRadius: '5px ',
                
              }
            }>
           <Text>Position</Text>
         </Button>


         <Button w={'105px'} bg={position ? '#E9DDFF' : 'none'} h={'36px'} onClick={() => {
            setPosition(false);
            setLiquidity(true);
            }} 
            sx={liquidity ?
              {
                borderRadius: '5px ',
                border: '2px solid blue'
              } :
              {
                borderRadius: '5px ',
                
              }
            }>
           <Text>Liquidity</Text>
         </Button>

         <Button w={'105px'} bg={'#E9DDFF'} h={'36px'}
                 sx={
                   {
                     borderRadius: '5px '
                   }
                 }>
           <Text>History</Text>
         </Button>
       </Flex>

      <ContainerLayout>
        <Table my={'1em'} verticalSpacing="sm" fontSize="md">
          <thead>
          <tr>
            <th>Market</th>
            <th>Position</th>
            <th>Price</th>
            <th>Shares</th>
            <th>Payout</th>
          </tr>
          </thead>
          <tbody >
            {position ? rowPosition : rowliquidity}
          </tbody>
        </Table>
      </ContainerLayout>


     </Box>
    </>
  )
}

export default InWalletPredictions;