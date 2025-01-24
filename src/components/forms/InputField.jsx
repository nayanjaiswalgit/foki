import PropTypes from "prop-types";

export const InputField = ({
  field,
  form,
  type = "text",
  placeholder = "",
  options = [],
  onChange,
  isLoading = false,
  error,
  previewImage,
  handleFileChange,
}) => {
  // Dynamically determine which element to render
  const InputComponent = type === "select" ? "select" : "input";

  return (
    <div className="form-group">
      <label htmlFor={field.name}>{field.label}</label>
      {InputComponent === "select" ? (
        <select
          id={field.name}
          name={field.name}
          placeholder={placeholder}
          className="form-control"
          value={form.values[field.name]}
          onChange={onChange}
          disabled={isLoading}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <div>
          <input
            type="file"
            id={field.name}
            name={field.name}
            accept="image/*"
            onChange={handleFileChange}
            className="form-control"
            disabled={isLoading}
          />
          {previewImage && (
            <div className="image-preview">
              <img
                src={previewImage}
                alt="preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            </div>
          )}
        </div>
      ) : (
        <input
          type={type}
          id={field.name}
          name={field.name}
          placeholder={placeholder}
          className="form-control"
          value={form.values[field.name]}
          onChange={onChange}
          disabled={isLoading}
        />
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

// PropTypes validation
InputField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    values: PropTypes.object.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(["text", "password", "email", "select", "file"]),
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  previewImage: PropTypes.string,
  handleFileChange: PropTypes.func,
};

// Default prop values
InputField.defaultProps = {
  type: "text",
  placeholder: "",
  options: [],
  isLoading: false,
  error: "",
  previewImage: "",
  handleFileChange: () => {},
};

export default InputField;
