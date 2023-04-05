import { InputBase} from "@mantine/core";
import {BiSearch} from 'react-icons/bi';
import {Box , Button , Text } from "@mantine/core";
import styles from '../../styles/market.module.css'

export const FilterSearchBox =()=> {

  return (
    <>


      <Box pos={'relative'} >
        <input  className={'foreon-input'} placeholder={'Search Market'}/>
        <Box bg={'#5138F6'} pos={'relative'} bottom={'2.9em'} right={'-12.7em'} w={'2.5em'} h={'2.5em'} p={'0.5em'}
             sx={
               {

                 borderRadius: '50%',
                 textAlign: 'center',
                 display: 'center',
                 justifyContent:'center',

               }
             }>
          <BiSearch size={'1.5em'} fill={'#fff'} />
        </Box>
      </Box>


    </>
  )
}



export const FilterButton =()=> {
  return (
    <>
     <Button  color={'#00000'} radius={'25px'} h={'52px'}  p={'8px'} w={'96px'} bg={'none'}
     sx={{border: '1px solid #E6E1E6'}}>
       <Text color={'#000'}>Filter</Text>
     </Button>
    </>
  )
}



