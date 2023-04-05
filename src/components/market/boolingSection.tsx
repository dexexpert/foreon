import { useState } from 'react';
import { Box, Text, Flex, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { BsFillCaretRightFill, BsFillCaretDownFill } from 'react-icons/bs';
import WalletPredictions from "@/components/micro/walletPredictions";

const Booking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery('(min-width: 50em)');

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box
        w={{
          sm: '100%',
          lg: '797px',
        }}
        sx={{
          border: '1px solid #E6E1E6',
          borderRadius: '16px',
          padding: '1.5em',
          margin: '1em 0',
        }}
      >
        <Flex align={'center'} wrap={'wrap'} gap={'1em'} justify={'space-between'}>
          <Flex align={'center'} gap={'1em'}>
            <Text weight={'bold'} color={'#22005D'} size={'20px'}>
              Order Book
            </Text>

            <Flex gap={'0.5em'}>
              <Button bg={'#219653'}>
                <Text color={'#fff'}>Yes</Text>
              </Button>

              <Button
                bg={'none'}
                sx={{
                  border: '1px solid gray',
                }}
              >
                <Text color={'#000'}>No</Text>
              </Button>
            </Flex>
          </Flex>

          <Flex gap={'0.5em'} align={'center'}>
            <Button
              sx={{
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)',
              }}
            >
              <Text color={'#fff'}>Asks</Text>
            </Button>

            <Button
              bg={'#E9DDFF'}
              sx={{
                border: '1px solid gray',
              }}
            >
              <Text color={'#000'}>Bids</Text>
            </Button>

            <Box onClick={toggleOpen} sx={
              {
                cursor: 'pointer'
              }
            }>
              {isOpen ? (
                <BsFillCaretDownFill fill={'#000'} size={'1.3em'} />
              ) : (
                <BsFillCaretRightFill fill={'#000'} size={'1.3em'} />
              )}
            </Box>
          </Flex>
        </Flex>
        {isOpen && (
          <Box sx={{ marginTop: '1em' }}>
            <WalletPredictions/>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Booking;
