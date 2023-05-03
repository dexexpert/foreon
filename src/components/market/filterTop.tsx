import {Box, Flex, Button, Text, TextInput,Select} from '@mantine/core';
import ContainerLayout from '@/layouts/containerLayout';
import {FilterButton, FilterSearchBox} from '@/components/market/filterKits';
import {filterData} from '@/utils/datas';
import {useRouter} from 'next/router';
import {useMediaQuery} from "@mantine/hooks";
import {IoMdArrowDropdown} from 'react-icons/io';

const searchIcon = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M11.0206 10.078L13.8759 12.9327L12.9326 13.876L10.0779 11.0207C9.01575 11.8722 7.69459 12.3353 6.33325 12.3333C3.02125 12.3333 0.333252 9.64534 0.333252 6.33334C0.333252 3.02134 3.02125 0.333344 6.33325 0.333344C9.64525 0.333344 12.3333 3.02134 12.3333 6.33334C12.3352 7.69468 11.8721 9.01584 11.0206 10.078ZM9.68325 9.58334C10.5293 8.71327 11.0018 7.54696 10.9999 6.33334C10.9999 3.75468 8.91125 1.66668 6.33325 1.66668C3.75459 1.66668 1.66659 3.75468 1.66659 6.33334C1.66659 8.91134 3.75459 11 6.33325 11C7.54687 11.0019 8.71318 10.5294 9.58325 9.68334L9.68325 9.58334Z"
    fill="white"/>
</svg>

const searchButton = <Box bg={'#5138F6'} w={'80%'} h={'80%'} sx={
  {
    borderRadius: '50%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginRight: '0.3em'
  }
}>
  {searchIcon}
</Box>

interface Buttonprops {
  handleClick: Function;
}

const FilterTop:React.FC<Buttonprops> = (props) => {
  const route = useRouter();
  const matches = useMediaQuery('(min-width: 40em)')

  return (
    <>
      <Box
        sx={{
          borderBottom: '1px solid #E9DDFF',
          paddingBottom: '2em'
        }}
      >
        <ContainerLayout>
          <Box>
            <Flex gap={'2em'} justify={'center'} wrap={'wrap'}
                  direction={{base: 'column-reverse', md: 'row', lg: 'row'}}>
              <Box w={{base: '100%', lg: '25%'}}>

                <TextInput size={'xl'} radius={'2em'} placeholder={'Search markets'}
                           rightSection={searchButton} styles={{
                  input: {border: '1px solid #E6E1E6'}
                }}/>
              </Box>
              {/* @ts-ignore */}
              <svg
                width="1"
                display={!matches ? 'none' : 'block'}
                height="52"
                viewBox="0 0 1 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="-2.18557e-08"
                  x2="0.500002"
                  y2="52"
                  stroke="#E6E1E6"
                />
              </svg>

              <Flex
                gap={{
                  base: '0.7em',
                  lg: '1em',
                }}

              >
                <FilterButton  handleClick={props.handleClick}/>

                {/* <select style={{color: 'black', fontWeight: 'medium'}} className={'foreon-select'}>
                  <option>Liquidity</option>
                  
                </select> */}
                <Select
                  
                  // className={'foreon-select'}
                  sx={{width:'135px', height:'52px', color: 'black'}}
                  defaultValue="Liquidity"
                  data={['Liquidity', 'Farm']}
                  radius="xl"
                  rightSection={<IoMdArrowDropdown size="1.5rem" />}
                  styles={{ rightSection: { pointerEvents: 'none' } }}
                />
              </Flex>

              <Box bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'}
                   sx={{
                    //  borderRadius: !matches ? '90px' : '100px',
                    borderRadius: '2em !important',
                     padding: '1px'
                   }}>
                <Box
                  
                  p={{base: '1em', lg: '0 0.5em'}}
                  h={{sm: 'none', lg: '60px'}}
                  sx={{
                    background: '#fff',
                    // borderRadius: !matches ? '90px' : '100px',
                    borderRadius: '2em !important',
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap'

                    // flexWrap: 'wrap',
                  }}
                >
                  {filterData.map((items, index) => {
                    const pathMatch = route.pathname === items.path;
                    return (
                      <>
                      <a href={items.path}>
                        <Button
                            key={index}
                            bg={'none'}
                            
                            className={pathMatch ? 'btn-grade' : 'btn-normal'}
                            sx={{
                              borderRadius: '80px',
                            }}
                          >
                            <Text color={pathMatch ? 'white' : ''}>
                              {items.name}
                            </Text>
                          </Button>
                      </a>
                        
                      </>
                    );
                  })}
                </Box>

              </Box>

            </Flex>
          </Box>
        </ContainerLayout>
      </Box>
    </>
  );
};

export default FilterTop;
