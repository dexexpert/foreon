import { Button , Text } from '@mantine/core';
import {JSXElement} from "@babel/types";

interface Props {
  children ?: any ,
  color : string ,
  bg : string

}
const Buttons =({children , color , bg , ...props} : Props ) => {
  return (
    <>
     <Button bg={bg?bg: 'gray'}
     sx={
       {
         borderRadius: '12px',
         padding: ''
       }
     } {...props}>
       <Text  my={'2em'} color={color?color: 'white'} >{children}</Text>
     </Button>
    </>
  )
}

export default Buttons