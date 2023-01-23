import { getFilterValue } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

import PropTypes from 'prop-types';
import { FilterInput } from './FilterContacts.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <FilterInput>
      Find contacts by name
      <input
        type="text"
        name="key"
        value={filter}
        required
        onChange={changeFilter}
      />
    </FilterInput>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};
