import React, { lazy, useEffect, useState } from "react";
import Select from "react-select";
import "./style.css";

const RenderChildren = lazy(() => import("./RenderChildren"));

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
  setValue,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [locationChildrens, setLocationChildrens] = useState([]);
  const [innerChildrens, setInnerChildrens] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [listElementOffset, setListElementOffset] = useState("");

  const CustomOption = ({ innerProps, label, data }) => {
    const handleHover = (event) => {
      const hoveredMenu = document.querySelector(".hovered-menu");
      if (hoveredMenu !== null) {
        hoveredMenu.style.top = Number(event.target.offsetTop) + 30 + "px";
      }
      const childrens = options.filter(
        (location, i) => location?.parent === data.id
      );
      if (childrens?.length > 0) {
        setLocationChildrens(childrens);
        setShowMenu(true);
      } else {
        setLocationChildrens([]);
        setShowMenu(false);
      }
    };

    return (
      <div
        {...innerProps}
        onMouseEnter={handleHover}
        onMouseLeave={() => setInnerChildrens([])}
        className="custom-select-dropdown"
      >
        {label}
      </div>
    );
  };

  const handleOverList = (children, event) => {
    const newChildrens = options.filter(
      (location, i) => location?.parent === children.id
    );
    if (newChildrens?.length > 0) {
      setListElementOffset(event.target.offsetTop);
      setInnerChildrens(newChildrens);
    } else {
      setListElementOffset("");
      setInnerChildrens([]);
    }
  };

  useEffect(() => {
    if (options?.length > 0) {
      const root = options.filter((group) => group.parent === null);
      setFilteredOptions(root);
    }
  }, [options]);

  useEffect(() => {
    const selectedNewElement = document.querySelector(`.child-1`);
    if (selectedNewElement !== null && listElementOffset !== "") {
      selectedNewElement.style.display = "block";
      selectedNewElement.style.top = listElementOffset + 20 + "px";
    }
  }, [innerChildrens]);

  return (
    <div className="custom-select w-100">
      <label htmlFor="custom-select">
        {label} {required ? <strong className="required">*</strong> : ""}
      </label>
      <div className="select-field-container">
        <Select
          name={name}
          required={required ? true : false}
          value={value}
          components={{ Option: CustomOption }}
          isClearable="true"
          isSearchable="true"
          onChange={onChange}
          options={filteredOptions}
          isMulti={multi ? true : false}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          autoFocus={autoFocus ? true : false}
          className={className}
        />
        {showMenu && (
          <div className="hovered-menu">
            <div className="list-container">
              {locationChildrens?.map((children, i) => {
                return (
                  <li
                    key={Math.random()}
                    onMouseEnter={(event) => {
                      handleOverList(children, event);
                    }}
                    onClick={() => setValue(children)}
                  >
                    |-&nbsp;{children.label}
                  </li>
                );
              })}
              {innerChildrens?.length > 0 && (
                <RenderChildren
                  childrens={innerChildrens}
                  options={options}
                  setValue={setValue}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectField;
