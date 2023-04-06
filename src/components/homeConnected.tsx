import { Button, Box, Text, Flex,Image } from '@mantine/core';
import Buttons from './micro/buttons'
import {TiArrowSortedDown} from 'react-icons/ti';

const HomeConnectedButton = ({ children, p, ...props }: any) => {
  return (
    <>
      <Button rightIcon={<TiArrowSortedDown/>}
            className={'btnColor'}
                 sx={
                     {
                         borderRadius:'10px',
                         color: 'black !important',
                         fontSize: '16px',
                         overflow:'inherit !important'
                     }
                 }

            px={'1.5em'} py={'1.5em'} variant="outline">
              <Image
                  sx={{
                    margin:'10px'
                  }}
                  height={35}
                  width={35}
                  alt={'Logo'}
                  src={
                    'https://res.cloudinary.com/du59y8tjp/image/upload/v1680730832/Ellipse_1478_g2isro.png'
                  }
                />
            <Text color={'black'}>{children}</Text>
         </Button>
      {/* <Box
        sx={{
          borderRadius: '16px',
          color: 'white !important',
          width: 'fit-content',
          padding: p ? p : '1em 2em',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        className="btnColor"
        bg={
          'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'
        }
      >
        <Text
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
          }}
        >
          {children}
        </Text>
      </Box> */}
    </>
  );
};

//input fields

const InputItem = () => {
  return <>sdfasdf</>;
};

export { HomeConnectedButton, InputItem };
