import {Box, Button, Table ,  Flex, Text} from '@mantine/core';
import ContainerLayout from "@/layouts/containerLayout";


const WalletPredictions =() => {
  const elements = [
    {name:1, trade: 'yes', price: '25 ADA', shares: '589.12',  payout: '700 ADA' },
    {name:2, trade: 'yes', price: '25 ADA', shares: '589.12',  payout: '700 ADA' },
    {name:3, trade: 'yes', price: '25 ADA', shares: '589.12',  payout: '700 ADA' },
    {name:4, trade: 'yes', price: '25 ADA', shares: '589.12',  payout: '700 ADA' },
    {name:5, trade: 'yes', price: '25 ADA', shares: '589.12',  payout: '700 ADA' },

  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.trade}</td>
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

       {/* <Flex justify={'center'} gap={'1em'}>
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
       </Flex> */}

      <ContainerLayout>
        <Table my={'2em'} verticalSpacing="sm" fontSize="md">
          <thead>
          <tr>
            <th>Trade</th>
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