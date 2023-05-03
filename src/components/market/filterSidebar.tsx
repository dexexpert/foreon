import MarketBox from "@/components/market/marketBox";
import {Flex, Grid,Box,Accordion,Checkbox,Text,Dialog} from "@mantine/core";
import {RiCheckboxBlankCircleLine,RiCheckboxBlankCircleFill} from 'react-icons/ri';
const FilterSidebar =()=> {

  return (
    <>
        <Flex direction={"column"} gap={"1em"} className="filter-width" justify={'flex-start'}  py={'3em'}  px={'1.5em'}>
          <Text  span c="#22005D"  fw={700} fz="24px" weight={'500'}>Filter</Text>
            <Box>
                <Accordion variant="separated" radius="md" className="filter-box-width" 
                  styles={{
                    item: {
                      // styles added to all items
                      backgroundColor: '#fff',
                      border: `1px solid #5138F6`,
            
                      // styles added to expanded item
                      '&[data-active]': {
                        backgroundColor: '#fff',
                        border: `1px solid #5138F6`,
                      },
                    }
                }}>
                  <Accordion.Item value="photos">
                    <Accordion.Control >
                    
                    <Checkbox
                        label="My Watchlist"
                        color="black"
                      />
                    </Accordion.Control>
                    
                  </Accordion.Item>
                </Accordion>
            </Box>

            <Box>
              <Accordion variant="separated" radius="md" className="filter-box-width" 
              styles={{
                item: {
                  // styles added to all items
                  backgroundColor: '#fff',
                  border: `1px solid #dfe3e7`,
        
                  // styles added to expanded item
                  '&[data-active]': {
                    backgroundColor: '#fff',
                    border: `1px solid #5138F6`,
                  },
                }
              }}>
                <Accordion.Item value="photos">
                  <Accordion.Control >
                  
                    <Text fw={500}>Market Structure</Text>
                  </Accordion.Control>
                  <Accordion.Panel >
                    <Checkbox   size="md" py={'0.4em'} label="All"/>
                    <Checkbox size="md" py={'0.4em'} label="AMM"/>
                    <Checkbox  size="md" py={'0.4em'} label="Order Book"/>
                    </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Box>

            <Box>
              <Accordion variant="separated" radius="md" className="filter-box-width"
              styles={{
                item: {
                  // styles added to all items
                  backgroundColor: '#fff',
                  border: `1px solid #dfe3e7`,
        
                  // styles added to expanded item
                  '&[data-active]': {
                    backgroundColor: '#fff',
                    border: `1px solid #5138F6`,
                  },
                }
              }}>
                <Accordion.Item value="photos">
                  <Accordion.Control >
                    <Text fw={500}>Volume</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Checkbox size="md" py={'0.4em'} label="All"/>
                    <Checkbox size="md" py={'0.4em'} label="Under 10,000 ADA"/>
                    <Checkbox size="md" py={'0.4em'} label="10,000 ADA - 50,000 ADA"/>
                    <Checkbox size="md" py={'0.4em'} label="50,000 ADA - 100,000 ADA"/>
                    <Checkbox size="md" py={'0.4em'} label="Above 100,000 ADA"/>
                    <Checkbox size="md" py={'0.4em'} label="Custom"/>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Box>

            <Box>
              <Accordion variant="separated" radius="md" className="filter-box-width" 
              styles={{
                item: {
                  // styles added to all items
                  backgroundColor: '#fff',
                  border: `1px solid #dfe3e7`,
        
                  // styles added to expanded item
                  '&[data-active]': {
                    backgroundColor: '#fff',
                    border: `1px solid #5138F6`,
                  },
                }
              }}>
                <Accordion.Item value="photos">
                  <Accordion.Control >
                    <Text fw={500}>Liquidity</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Checkbox size="md" py={'0.4em'} label="All"/>
                    <Checkbox size="md" py={'0.4em'} label="AMM"/>
                    <Checkbox size="md" py={'0.4em'} label="Order Book"/>
                    </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Box>

            <Box>
              <Accordion variant="separated" radius="md" className="filter-box-width" 
              styles={{
                item: {
                  // styles added to all items
                  backgroundColor: '#fff',
                  border: `1px solid #dfe3e7`,
        
                  // styles added to expanded item
                  '&[data-active]': {
                    backgroundColor: '#fff',
                    border: `1px solid #5138F6`,
                  },
                }
              }}>
                <Accordion.Item value="photos">
                  <Accordion.Control >
                    <Text fw={500}>End Date</Text>
                    
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Checkbox size="md" py={'0.4em'} label="All"/>
                    <Checkbox size="md" py={'0.4em'} label="AMM"/>
                    <Checkbox size="md" py={'0.4em'} label="Order Book"/>
                    </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Box>

            <Box>
              <Accordion variant="separated" radius="md" className="filter-box-width" 
              styles={{
                item: {
                  // styles added to all items
                  backgroundColor: '#fff',
                  border: `1px solid #dfe3e7`,
        
                  // styles added to expanded item
                  '&[data-active]': {
                    backgroundColor: '#fff',
                    border: `1px solid #5138F6`,
                  },
                }
              }}>
                <Accordion.Item value="photos">
                  <Accordion.Control >
                     <Text fw={500}>State</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Checkbox size="md" py={'0.4em'} label="All"/>
                    <Checkbox size="md" py={'0.4em'} label="AMM"/>
                    <Checkbox size="md" py={'0.4em'} label="Order Book"/>
                    </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Box>
            
        </Flex>
      
        
    </>
  );
};

export default FilterSidebar;
