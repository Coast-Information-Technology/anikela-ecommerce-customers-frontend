import React, { useState, useRef, ReactText } from "react";
import useOnClickOutside from "../../hooks";

interface DropdownProps {
  value: string;
  options: ReactText[];
  placeholder: ReactText;
  onChange: (selectedValue: ReactText) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  options,
  placeholder = "Select",
  onChange,
}) => {
  const node = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleClickOutside = () => {
    setOpen(false);
  };

  const handleChange = (selectedValue: ReactText) => {
    onChange(selectedValue);
    setOpen(false);
  };
  useOnClickOutside(node, handleClickOutside);

  return (
    <div ref={node} className="custom-dropdown">
      <button
        className="custom-dropdown-toggler"
        onClick={(e) => setOpen(!open)}
      >
        {value || placeholder}
      </button>
      {open && (
        <ul className="custom-dropdown-menu">
          {options.map((opt, index) => (
            <li
              key={index}
              className="custom-dropdown-menu-item"
              onClick={(e) => handleChange(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
