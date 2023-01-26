import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/filter-slice';
import { useState } from 'react';

import PropTypes from 'prop-types';
import { Search2Icon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useContacts } from 'hooks';

const Filter = () => {
  const dispatch = useDispatch();
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const { filter } = useContacts();
  const changeFilter = e => {
    setIsFilterLoading(true);
    dispatch(updateFilter(e.currentTarget.value));

    setTimeout(() => {
      setIsFilterLoading(false);
    }, 1000);
  };

  const clearInput = () => {
    dispatch(updateFilter(''));
  };

  return (
    <Box textAlign="left" my={12}>
      <Text my={2}>Find contacts by name</Text>
      <Flex as="form" gap="2" my={4}>
        <InputGroup>
          <InputLeftElement
            children={
              <IconButton
                isLoading={isFilterLoading}
                colorScheme="teal"
                aria-label="Search database"
                icon={<Search2Icon />}
                variant="ghost"
              />
            }
          />
          <Input
            placeholder="Try to search somebody..."
            type="text"
            name="key"
            value={filter}
            required
            variant="flushed"
            pl="16"
            onChange={changeFilter}
            _hover={{ fontWeight: 'semibold' }}
          />
          <InputRightElement
            children={
              filter.length > 0 && (
                <IconButton
                  color="red.500"
                  aria-label="Search database"
                  icon={<SmallCloseIcon />}
                  variant="ghost"
                  onClick={clearInput}
                />
              )
            }
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};

export default Filter;
