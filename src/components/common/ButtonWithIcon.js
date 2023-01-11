import React from 'react'
import { Button } from 'react-bootstrap'

function ButtonWithIcon({
  label,
  variant,
  className,
  children,
  onClick,
  name,
  size
}) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={className}
      name={name}
      size={size}
    >
      {label}
      {children}
    </Button>
  );
}

export default ButtonWithIcon
