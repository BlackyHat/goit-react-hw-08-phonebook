import PropTypes from 'prop-types';

import { useToggle } from 'hooks';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalFooter,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const BasicModal = ({ id, children }) => {
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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb="8" textAlign="center">
          <ModalHeader mt={6}>Add new contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              type="submit"
              form={id}
              onClick={onClose}
            >
              Add contact
            </Button>
            <Button onClick={onClose} variant="outline">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal;

BasicModal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
