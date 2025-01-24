import { useFormik } from "formik";
import { useState } from "react";
import Yup from "yup";
export const useDynamicForm = (fields, initialData = {}, onSubmit) => {
  const [fieldDependencies, setFieldDependencies] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  // Formik setup
  const formik = useFormik({
    initialValues: initialData,
    validationSchema: Yup.object(
      fields.reduce((acc, field) => {
        if (field.validation) {
          acc[field.name] = Yup.string().required(field.validation.required);
        }
        return acc;
      }, {})
    ),
    onSubmit,
  });

  // Handle changes in dependent fields
  const handleFieldChange = async (e, fieldName) => {
    const { value } = e.target;
    formik.setFieldValue(fieldName, value);

    // Handle dependency fetching
    const field = fields.find((f) => f.name === fieldName);
    if (field.dependency) {
      setFieldDependencies((prev) => ({ ...prev, [field.dependency]: value }));
    }
  };

  // Handle file input changes (for image uploads)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue(e.target.name, file);

      // Preview the image if it's an image file
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result); // Store the image preview data
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return {
    formik,
    handleFieldChange,
    handleFileChange,
    fieldDependencies,
    previewImage,
  };
};
