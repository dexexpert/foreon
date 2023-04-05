import {Box, Modal, Text} from "@mantine/core";
import {ErrorSvg, SuccessSvg, WarningSvg} from "@/components/micro/notificationAssets";
import {ReactNode} from "react";
import {useDisclosure} from "@mantine/hooks";

interface Props {
  isOpen: any,
  children: ReactNode,
  title: string,
  onClose: any
}

export const SuccessModal = ({isOpen, children, title, onClose}: Props) => {

  return <Modal opened={isOpen} onClose={onClose}>
    <Box my={'2em'} sx={
      {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1em'
      }
    }>
      <SuccessSvg/>
      <Text color={'#000'} className={'duplicate'} size={'19px'} align={'center'}>{title}</Text>
      <Text mx={'auto'} w={'90%'} align={'center'}>{children}</Text>
    </Box>
  </Modal>
}


export const ErrorModal = ({isOpen, children, title, onClose}: Props) => {

  return <Modal opened={isOpen} onClose={onClose}>
    <Box my={'2em'} sx={
      {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1em'
      }
    }>
      <ErrorSvg/>
      <Text color={'#000'} className={'duplicate'} size={'19px'} align={'center'}>{title}</Text>
      <Text mx={'auto'} w={'90%'} align={'center'}>{children}</Text>
    </Box>
  </Modal>
}


export const WarningModal = ({isOpen, children, title, onClose}: Props) => {

  return <Modal opened={isOpen} onClose={onClose}>
    <Box my={'2em'} sx={
      {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1em'
      }
    }>
      <WarningSvg/>
      <Text color={'#000'} className={'duplicate'} size={'19px'} align={'center'}>{title}</Text>
      <Text mx={'auto'} w={'90%'} align={'center'}>{children}</Text>
    </Box>
  </Modal>
}
