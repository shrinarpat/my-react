import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

const Login = () => {
  const navigate = useNavigate();
  const handleNavigation = () => navigate("/");
  return (
    <div className="login flex justify-center flex-col items-center py-12">
      <h1 className="font-bold text-2xl mb-8">Formik Login Form</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            handleNavigation();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[80%] mx-auto"
          >
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray-200 px-4 py-2 m-4 rounded-md"
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray-200 px-4 py-2 m-4 rounded-md"
            />
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-green-100 rounded-md cursor-pointer m-4 w-[50%] mx-auto"
            >
              {" "}
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
