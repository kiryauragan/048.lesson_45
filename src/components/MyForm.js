import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Обязательное поле"),
	email: Yup.string()
		.email("Некоректний формат email")
		.required("Обов'язкове поле"),
	phone: Yup.string()
		.matches(/^\d{12}$/, "Телефон должен состоять из 12 цифр")
		.required("Обязательное поле"),
});

const MyForm = () => {
	const initialValues = {
		name: "",
		email: "",
		phone: "",
	};

	const [submittedData, setSubmittedData] = useState(null);

	const handleSubmit = (values) => {
		setSubmittedData(values);
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<Form>
					<InputField label="Имя:" name="name" type="text" />
					<InputField label="Электронная почта:" name="email" type="email" />
					<InputField label="Телефон:" name="phone" type="text" />

					<SubmitButton label="Отправить" />
				</Form>
			</Formik>

			{submittedData && (
				<div>
					<h2>Ваши данные:</h2>
					<p>Имя: {submittedData.name}</p>
					<p>Email: {submittedData.email}</p>
					<p>Телефон: {submittedData.phone}</p>
				</div>
			)}
		</div>
	);
};

export default MyForm;
