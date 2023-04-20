import {useState, useRef, useEffect} from 'react';
import ContainerLayout from '@/layouts/containerLayout';
import {Box, Drawer, Flex, List, Text, Button,Modal, Group,} from '@mantine/core';
import {largeView, smallView} from '../../utils/responsiveParams';
import Image from 'next/image';
import {FaBars} from 'react-icons/fa';
import {ButtonInterface} from '../tinyUtils';
import {MdOutlineClose} from 'react-icons/md';
import Link from 'next/link';
import Stacky from './stack';
import {useDisclosure} from "@mantine/hooks";
import {HomeConnectedButton} from '../homeConnected';

const navs = [
  {
    title: 'Market',
    path: '/market',
  },
  {
    title: 'Home',
    path: '/home',
  },

  {
    title: 'Blog',
    path: 'https://foreonnetwork.medium.com/',
  },
  {
    title: 'Community',
    path: '/',
    submenu: [
      {
        title: 'Twitter',
        path: 'https://twitter.com/foreonnetwork',
      },
      {
        title: 'Medium',
        path: 'https://foreonnetwork.medium.com/',
      },
      {
        title: 'Discord',
        path: 'https://discord.gg/mu4SHREWg9',
      },
      {
        title: 'Telegram',
        path: 'https://t.me/foreonnetwork',
      },
      {
        title: 'Reddit',
        path: 'https://www.reddit.com/r/foreonnetwork/',
      },
    ],
  },
];
const MarketHeader = ({handleEvent}: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // state to track whether sidebar is open
  const sidebarRef = useRef(null);
  const [connect, setConnect] = useState(false);
  const [opened, {open, close}] = useDisclosure(false);
  

  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // toggle sidebar state
  };

  const openModal = () => {
    console.log("afs")
    
    
  }

  const [hover, setHover] = useState<string>('none');

  useEffect(() => {
    //@ts-ignore
    function handleClickOutside(event) {
      //@ts-ignore
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef,connect]);

  return (
    <>
      
      <ContainerLayout>
        <Box>
          <Flex align={'center'} py={'em'} justify={'space-between'}>
            <Box>
              <a href={'/market'}>
                <Image
                  height={100}
                  width={100}
                  alt={'Logo'}
                  src={
                    'https://res.cloudinary.com/dhkccnvyn/image/upload/v1678193119/foreon/Frame_y0uzob.svg'
                  }
                />
              </a>
            </Box>

            <Box>

              <Box display={{...smallView}} sx={
                {
                  alignItems: 'center',
                  gap: '0.5em',

                }
              }>

                <Flex align={'center'} gap={'1em'}>
                  {/* <Button w={'145px'} h={'48px'}
                          radius={'16px'} onClick={handleEvent}
                          bg={'linear-gradient(135deg, #00A9B7 -1.33%, #4C32F2 47.36%, #9F00BE 95.53%)'}><Text
                    color={'#fff'}>Connect Wallet</Text></Button> */}
                    <Box onClick={handleEvent}>
                    
                    <HomeConnectedButton>addr24..76</HomeConnectedButton>
                    
                  </Box>
                  <Box>
                    {!sidebarOpen ? (
                      <FaBars
                        size={'1.2em'}
                        fill={'#22005D'}
                        onClick={open}
                      />
                    ) : (
                      <MdOutlineClose
                        size={'1.5em'}
                        fill={'#22005D'}
                        onClick={close}
                      />
                    )}
                  </Box>
                </Flex>

              </Box>

              <Box display={{...largeView}}>
                {/* @ts-ignore */}
                <Flex align={'center'}>
                  <List
                    display={'flex'}
                    listStyleType="none"
                    sx={{
                      cursor: 'pointer',
                    }}
                  >
                    {navs.map(({title, path, submenu},index) => {
                      return (
                        <List.Item
                          mx={'2.5em'}
                          key={index}
                          sx={{
                            color: '#22005D',
                            position: 'relative',
                            '& ul': {
                              display: hover,
                              position: 'absolute',
                              top: '2.5em',

                              cursor: 'pointer',
                              left: '0',
                              minWidth: '11rem',
                              padding: '1em',
                              backgroundColor: '#fff',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                              zIndex: 9999,
                            },
                            '&:hover ul': {
                              display: 'block',
                            },
                          }}
                        >
                          {submenu ? (
                            <>
                              <Box
                                className={'duplicate'}
                                onMouseEnter={() =>
                                  hover !== 'block'
                                    ? setHover('block')
                                    : setHover('none')
                                }
                                style={{
                                  color: '#22005D',
                                  fontSize: '18px',
                                }}
                              >
                                {title}
                              </Box>

                              <List
                                onMouseLeave={() => setHover('none')}
                                sx={{
                                  listStyleType: 'none',
                                  padding: '2em',
                                  marginTop: '2em ',
                                  marginRight: '9em',
                                  width: '170px',
                                  margin: '1em -3em',
                                  borderRadius: '10px',
                                  textAlign: 'center',
                                }}
                              >
                                  {submenu.map((item, index1) => (
                                  //@ts-ignore
                                  <a
                                    key={index1}
                                    href={item?.path}
                                    
                                    className={'remove-link'}
                                  >
                                    {/* @ts-ignore */}

                                    <Text
                                      className={'duplicate'}
                                      sx={{
                                        color: '#22005D',
                                        margin: '1.5em 0',
                                      }}
                                    >
                                      {item?.title}
                                    </Text>
                                  </a>
                                ))}

                              </List>
                            </>
                          ) : (
                            <Link
                              href={path}
                              style={{
                                listStyleType: 'none',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                              }}
                            >
                              <Text color={'#22005D'}>{title}</Text>
                            </Link>
                          )}
                        </List.Item>
                      );
                    })}
                  </List>

                  <Box onClick={handleEvent}>
                    
                    <HomeConnectedButton>addrr242...8876</HomeConnectedButton>
                    
                  </Box>

                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </ContainerLayout>

      <Drawer opened={opened} onClose={close}>
        <List
          display="flex"
          sx={{
            flexDirection: 'column',
            listStyleType: 'none',
            justifyContent: 'center',
            textAlign: 'left',
            padding: '8em 1em',
            gap: '2em',
          }}
        >
          {navs.map(({title, path},index3) => {
            return (
              <>
                <a key={index3} href={path} className={'remove-link'} >
                  <Text
                    my={'1em'}
                    sx={{
                      cursor: 'pointer',
                      color: '#22005D',
                      textAlign: 'center'
                    }}
                  >
                    {title}
                  </Text>
                </a>
              </>
            );
          })}
        </List>
      </Drawer>

    </>
  );
};

export default MarketHeader;
