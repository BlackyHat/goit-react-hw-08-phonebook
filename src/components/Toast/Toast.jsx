import PropTypes from 'prop-types';

import { useToast } from '@chakra-ui/react';

const CustomToast = () => {
  const toast = useToast();
  // types are: "success", "info", "warning", "error"

  const addToast = ({ info, status }) => {
    toast({
      description: info,
      status,
      position: 'top',
      isClosable: true,
      variant: 'solid',
      duration: 5000,
    });
  };

  addToast.propTypes = {
    info: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  };

  return { addToast };
};

export default CustomToast;
