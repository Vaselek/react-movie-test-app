import React, {useState, useCallback} from 'react';
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import debounce from 'lodash.debounce';
import Movies from "../Movies/Movies";



const MovieSearch = () => {

  const [query, setQuery] = useState('');
  const [value, setValue] = useState('');

  const path = '/search/movie';

  const handleKeyDown = useCallback((e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      setQuery(value);
    }
  }, [setQuery, value]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  return (
    <div>
      <Form>
        <Form.Row className="align-items-center">
          <Form.Label htmlFor="inlineFormInputGroup" srOnly>
            Search
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text><SearchIcon/></InputGroup.Text>
            </InputGroup.Prepend>
          <FormControl value={value} onKeyDown={handleKeyDown} onChange={handleChange} id="inlineFormInputGroup" placeholder="Search" />
          </InputGroup>
        </Form.Row>
      </Form>
      { query && <Movies urlPath={path} query={query} />}
    </div>
  );
};

export default MovieSearch;