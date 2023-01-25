import { getFilterValue } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

import PropTypes from 'prop-types';
import { Search2Icon } from '@chakra-ui/icons';
import { Box, Flex, Input, IconButton } from '@chakra-ui/react';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <Box textAlign="left">
      Find contacts by name
      <Flex as="form" gap="2">
        <Input
          placeholder="Try to search somebody..."
          type="text"
          name="key"
          value={filter}
          required
          onChange={changeFilter}
          _hover={{ fontWeight: 'semibold' }}
        />
        <IconButton
          colorScheme="teal"
          aria-label="Search database"
          icon={<Search2Icon />}
        />
      </Flex>
    </Box>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};
