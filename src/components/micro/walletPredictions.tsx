import {Box, Button, Table ,  Flex, Text} from '@mantine/core';
import ContainerLayout from "@/layouts/containerLayout";


const WalletPredictions =() => {
  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' , payout: '10 ADA' },



  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
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
         <Button w={'105px'} bg={'none'} h={'36px'}
                 sx={
                   {
                     borderRadius: '5px ',
                     border: '2px solid blue'
                   }
                 }>
           <Text>Position</Text>
         </Button>


         <Button w={'105px'} bg={'#E9DDFF'} h={'36px'}
                 sx={
                   {
                     borderRadius: '5px '
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
        <Table my={'2em'}>
          <thead>
          <tr>
            <th>Market</th>
            <th>Position</th>
            <th>Price</th>
            <th>Shares</th>
            <th>Payout</th>
          </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ContainerLayout>


     </Box>
    </>
  )
}

export default WalletPredictions;