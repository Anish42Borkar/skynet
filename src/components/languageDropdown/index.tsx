import React, { useState } from "react";

const LanguageDropdown: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const languages = [
    { code: "EN", name: "English" },
    { code: "FR", name: "French" },
    { code: "ES", name: "Spanish" },
    { code: "DE", name: "German" },
    { code: "IT", name: "Italian" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="">
      {/* Dropdown */}
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="block border border-purple-1 w-14 rounded-lg"
      >
        <option value="" disabled>
          EN
        </option>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
