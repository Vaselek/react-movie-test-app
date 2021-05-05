import React, {useCallback, useEffect, useState} from 'react';
import InputElement from "../utils/InputElement";
import SearchIcon from '@material-ui/icons/Search';

const MovieSearchInput = ({onChange}) => {

  const [value, setValue] = useState('');

  useEffect(
    () => {
      const handler = setTimeout(() => {
        onChange(value)
      }, 200);

      return () => clearTimeout(handler)
    },
    [value]
  );

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  return (
    <div>
      <InputElement
        icon={<SearchIcon/>}
        value={value}
        onChange={handleChange}
        id="inlineFormInputGroup"
        name="Search"
        placeholder="Search" />
    </div>
  );
};

export default MovieSearchInput;