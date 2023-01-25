import { useToggle } from 'hooks/useToggle';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const BasicModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useToggle();

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        onClick={onOpen}
        colorScheme="teal"
        variant="outline"
      >
        Add
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb="8" textAlign="center">
          <ModalHeader>Add new contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal;
