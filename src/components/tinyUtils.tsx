import { Button, Box, Text, Flex } from '@mantine/core';

const ButtonInterface = ({ children, p, ...props }: any) => {
  return (
    <>
      {/* <Button bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'}
            className={'btnColor'}
                 sx={
                     {
                         borderRadius:'10px'
                     }
                 }

            px={'4em'} py={'1.9em'}>
            <Text color={'white'}>{children}</Text>
         </Button> */}
      <Box
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
      </Box>
    </>
  );
};

//input fields

const InputItem = () => {
  return <></>;
};

export { ButtonInterface, InputItem };
