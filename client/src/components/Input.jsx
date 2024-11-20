import propTypes from "prop-types";

const Input = ({ label, type, placeholder, onChange, name, id, value }) => {
  return (
    <div className="flex flex-col capitalize gap-2 w-full">
      <label htmlFor={id} className="text-[#5D607D]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="placeholder:text-[#A2A2A2] placeholder:capitalize p-2 rounded border-2"
        value={value}
        onChange={onChange}
        name={name}
        id={id}
      />
    </div>
  );
};

Input.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  name: propTypes.string,
  id: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default Input;
