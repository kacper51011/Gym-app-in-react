import React from "react";
import { Formik } from "formik";

function ModalForm({ modalVis, setData }) {
  return (
    <Formik
      initialValues={{
        name: "",
        gymExp: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "musisz wpisać to pole";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
        setData({ ...values });
        modalVis(true);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="modalForm" onSubmit={handleSubmit}>
          <h2>
            Welcome! Tell me something<br></br> about yourself
          </h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="text--input"
              onChange={handleChange}
              value={values.name}
            ></input>
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div>
            <label htmlFor="gymExp">
              Gym training experience <br></br>in years:
            </label>
            <select
              id="gymExp1"
              name="gymExp"
              onChange={handleChange}
              value={values.gymExp}
            >
              <option value="0">0</option>
              <option value="1-3">1-3</option>
              <option value="3+">3 or more</option>
            </select>
          </div>
          <button type="submit">SEND</button>
        </form>
      )}
    </Formik>
  );
}

export default ModalForm;
