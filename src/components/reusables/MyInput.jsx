import React from "react";

const MyInput = ({
  label,
  placeholder,
  onChange,
  value,
  className,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border outline-none border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full ${className}`}
        {...rest}
      />
    </div>
  );
};

export default MyInput;
