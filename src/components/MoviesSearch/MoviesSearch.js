import React, {useState} from 'react';
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import debounce from 'lodash.debounce';
import Movies from "../Movies/Movies";



const MoviesSearch = () => {

  const [query, setQuery] = useState('');
  const [value, setValue] = useState('');

  const path = '/search/movie';

  const handleKeyUp = debounce((e) => {
      setQuery(e.target.value);
    },
    1000
  );

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      setQuery(e.target.value);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

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
            <FormControl value={value} onKeyPress={handleKeyPress} onChange={handleChange} onKeyUp={handleKeyUp} id="inlineFormInputGroup" placeholder="Search" />
          </InputGroup>
        </Form.Row>
      </Form>
      { query && <Movies urlPath={path} query={query} />}
    </div>
  );
};

export default MoviesSearch;