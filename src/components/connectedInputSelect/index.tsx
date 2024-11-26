import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import { DownArrowIcon, GlobeIcon } from "../../assets/icons";

const listData = [
  "WCAG 2.0, 2.1 & 2.2",
  "ADA Title lll",
  "ATAG 2.0",
  "Section 508",
  "California Unruh",
  "European EN 301 549",
  "Australian DDA",
  "UK Equality Act",
  "Israeli Standard 55680",
  "Ontario AODA",
  "Canada ACA",
];

type ConnectedInputSelectProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ConnectedInputSelect = ({ onChange }: ConnectedInputSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("WCAG 2.0, 2.1 & 2.2");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center  shadow-sm">
      {/* Text Input */}
      <div className="flex items-center gap-1 border-y border-l rounded-tl rounded-bl w-full overflow-hidden">
        <GlobeIcon width={26} height={26} className="fill-black ml-1" />
        <input
          type="text"
          placeholder="Enter website URL"
          className="flex-1 px-4 py-2 w-full focus:outline-none"
          onChange={onChange}
        />
      </div>

      {/* Select Box */}
      {/* <select className="bg-white border border-purple-1 text-purple-1 font-bold rounded-tr rounded-br px-4 py-2 w-[280px] focus:outline-none focus:none outline-none ">
        {listData.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select> */}
      <div ref={dropdownRef} className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2  w-[280px] flex justify-between items-center border border-purple-1 text-purple-1 font-bold rounded-tr rounded-br focus:outline-none focus:ring-none focus:ring-blue-400"
        >
          {selected}{" "}
          <DownArrowIcon width={15} height={17} className="stroke-purple-1" />
        </button>
        {isOpen && (
          <ul
            className={`${styles.scroll} absolute z-10 mt-0 w-[280px] max-h-[280px] overflow-hidden overflow-y-scroll bg-white text-purple-1 font-bold border rounded-b shadow-lg`}
          >
            {listData.map((opt, index) => (
              <li
                onClick={() => handleSelect(opt)}
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ConnectedInputSelect;
