import { useState } from "react";

function Options({ options, setSelectedOption, selectedOption }) {

    function handleChange(e) {
        setSelectedOption(e.target.value);
    }

    return (
        <form>
            {options.map((option, i) => (
                <span key={i} className="flex flex-col">
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleChange}
                        />
                        {option}
                    </label>
                </span>
            ))}
        </form>
    );
}

export default Options;
