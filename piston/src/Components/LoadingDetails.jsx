import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Center,
    CircularProgress
  } from '@chakra-ui/react'
  import React from 'react'
  import {useSelector} from "react-redux"

  function LoadingDetails() {
    const OverlayOne = () => (

      

      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
    
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const  {loading}  = useSelector((store) => store.singleprod)


  
    return (
      <>
        {
             loading && <Modal isCentered isOpen>
            <OverlayOne />
            <ModalContent bg="none" boxShadow={"none"} >
            <Center>
            <CircularProgress isIndeterminate color='green.300' />
            </Center>
            </ModalContent>
          </Modal>
        }

      </>
    )
  }
  export default LoadingDetails;