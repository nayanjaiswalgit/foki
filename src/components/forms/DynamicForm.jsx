import PropTypes from "prop-types";
import { useDynamicForm } from "./useDynamicForm"; // Assuming useDynamicForm is a custom hook
import { InputField } from "./InputField"; // Assuming InputField is a separate component

export const DynamicForm = ({ fields, initialData = {}, onSubmit }) => {
  const {
    formik,
    handleFieldChange,
    handleFileChange,
    fieldDependencies,
    previewImage,
  } = useDynamicForm(fields, initialData, onSubmit);

  return (
    <form onSubmit={formik.handleSubmit}>
      {fields.map((field) => {
        const { options, loading, error } = useFieldOptions(
          field.fetchOptions,
          fieldDependencies[field.dependency]
        );

        // Handle error message, either from Formik or fetched error
        const errorMessage =
          formik.errors[field.name] && formik.touched[field.name]
            ? formik.errors[field.name]
            : error;

        return (
          <div key={field.name}>
            <InputField
              field={field}
              form={formik}
              type={field.type}
              placeholder={field.placeholder}
              options={options}
              onChange={(e) => handleFieldChange(e, field.name)}
              isLoading={loading}
              error={errorMessage}
              previewImage={field.type === "file" ? previewImage : null} // Only pass preview image for file inputs
              handleFileChange={field.type === "file" ? handleFileChange : null} // Only pass file handler for file inputs
            />
          </div>
        );
      })}
      <button
        type="submit"
        disabled={formik.isSubmitting || fields.some((field) => field.loading)}
      >
        Submit
      </button>
    </form>
  );
};

// Prop Types validation for DynamicForm
DynamicForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "password", "email", "select", "file"])
        .isRequired,
      placeholder: PropTypes.string,
      fetchOptions: PropTypes.func,
      dependency: PropTypes.string, // The field this one is dependent on
    })
  ).isRequired,
  initialData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

// Default props for DynamicForm
DynamicForm.defaultProps = {
  initialData: {},
};

export default DynamicForm;
