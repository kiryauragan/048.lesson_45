import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InputField = ({ label, name, type }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field type={type} id={name} name={name} />
    <ErrorMessage name={name} component="div" />
  </div>
);

export default InputField;
