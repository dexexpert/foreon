import {Box, Flex, Button, Text} from "@mantine/core";
import ContainerLayout from "@/layouts/containerLayout";
import {FilterButton, FilterSearchBox} from "@/components/market/filterKits";
import {listData} from "@/utils/datas";
import {useRouter} from "next/router";


export const HomeTab = function () {

  const route = useRouter();

  return (
    <>
      <Box my={'1em'}>
        <ContainerLayout>
          <Box>

            <Flex gap={'2em'} my={'4em'} justify={'center'} wrap={'wrap'}>



              <Box
                bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'}
                sx={
                  {
                    borderRadius: '2em !important',
                    padding: '1px'
                  }
                }>
                <Box
                  bg={'white'}
                  px={
                    {
                      base: '0.5em',
                      lg: '1em'
                    }
                  }

                  py={
                    {
                      base: '1em',
                      lg: '1em'
                    }
                  }
                  sx={
                    {


                      borderRadius: '2em !important',
                      alignItems: 'center',
                      display: 'flex',

                      flexWrap: 'wrap'
                    }
                  }
                >
                  {
                    listData.map((items, index) => {
                      const pathMatch = route.pathname === items.path
                      return (
                        <>

                          <Button key={index} bg={'none'}  className={pathMatch ? 'btn-grade' : 'btn-normal'}
                                  sx={
                                    {
                                      borderRadius: '80px',
                                    }}>
                            <Text color={pathMatch ? 'white' : ''}>{items.name}</Text>
                          </Button>

                        </>
                      )
                    })
                  }
                </Box>
              </Box>

            </Flex>


          </Box>
        </ContainerLayout>
      </Box>
    </>
  )
}


