import React from 'react';

import { Label, Input } from './styles';

function InputType({
  type = 'text',
  id = '',
  className = '',
  name = '',
  value = '',
  placeholder = '',
  style = {},
  disabled = '',
  label = '',
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) {
  return (
    <Label htmlFor={id}>
      {label}
      <Input
        type={type}
        id={id}
        className={className}
        name={name}
        value={value}
        placeholder={placeholder}
        style={style}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Label>
  );
}

export default InputType;
