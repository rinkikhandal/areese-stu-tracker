import PropTypes from "prop-types";

const PinInput = ({ pinCode, setPinCode, idPrefix }) => {
  const handlePinChange = (e, index) => {
    const value = e.target.value;
    let newPinCode = [...pinCode];

    if (value === "") {
      newPinCode[index] = "";
      setPinCode(newPinCode);

      if (index > 0) {
        document.getElementById(`${idPrefix}-pin-input-${index - 1}`).focus();
      }
    } else if (/^\d$/.test(value)) {
      newPinCode[index] = value;
      setPinCode(newPinCode);

      if (index < 5) {
        document.getElementById(`${idPrefix}-pin-input-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="pin-input-div flex gap-x-2">
      {pinCode.map((digit, index) => (
        <input
          key={index}
          id={`${idPrefix}-pin-input-${index}`}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handlePinChange(e, index)}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !pinCode[index] && index > 0) {
              document
                .getElementById(`${idPrefix}-pin-input-${index - 1}`)
                .focus();
            }
          }}
          className="border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 w-7 focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider"
        />
      ))}
    </div>
  );
};

PinInput.propTypes = {
  pinCode: PropTypes.array.isRequired,
  setPinCode: PropTypes.func.isRequired,
  idPrefix: PropTypes.string.isRequired,
};

export default PinInput;
