import React from 'react'
import { Dropdown } from 'react-bootstrap';

function CustomDropDown({ variant, id, btnLabel, children, className, align }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant={variant} id={id} className={className}>
        {btnLabel}
      </Dropdown.Toggle>
      {children}
      
    </Dropdown>
  );
}

export default CustomDropDown;
