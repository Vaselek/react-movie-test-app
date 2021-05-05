import React from 'react';

const InputElement = ({icon, name, ...inputProps}) => {
  return (
    <div className="input-group mb-3 name">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">{icon}</span>
      </div>
      <input type="text" className="form-control" aria-label={name} {...inputProps} />
    </div>
  );
};

export default InputElement;