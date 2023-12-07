import { useState } from 'react';
import { IoHeart } from "react-icons/io5";

const HeartOption = ({id, sentence, onChange}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(!checked);
    onChange(event.target.checked);
  };

  return (
    <div className="flex items-center my-1">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleCheckboxChange}
        className="hidden"
      />

      <label htmlFor={id}
      className="flex gap-5 items-center w-full text-left cursor-pointer">
        {checked ? 
        <IoHeart 
        className="text-blue border border-2 border-blue rounded-lg p-1 cursor-pointer" 
        size={33}/> 
        : 
        <div className="h-[33px] w-[33px] border border-2 border-outline-gray rounded-lg p-1"/>}

        {sentence}
      </label>
    </div>
  );
};

export default HeartOption;