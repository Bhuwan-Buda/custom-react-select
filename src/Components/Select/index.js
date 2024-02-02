import React from "react";
import Select from "react-select";
import "./style.css";

const SelectField = ({
  name,
  label,
  required,
  value,
  onChange,
  options,
  multi,
  getOptionLabel,
  getOptionValue,
  autoFocus,
  className,
}) => {
  return (
    <div className="custom-select">
      <label htmlFor="custom-select">
        {label} {required ? <strong className="required">*</strong> : ""}
      </label>
      <div className="select-field-container">
        <Select
          name={name}
          required={required ? true : false}
          value={value}
          isClearable="true"
          isSearchable="true"
          onChange={onChange}
          options={options}
          isMulti={multi ? true : false}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          autoFocus={autoFocus ? true : false}
          className={className}
        />
      </div>
    </div>
  );
};

export default SelectField;
