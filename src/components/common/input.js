
const Input = ({ label, formik, name , type="text" }) => {
    return (
      <div className="container">
        <label className="flex justify-end mb-2 mt-3 text-gray-500" htmlFor={name}>{label}</label>
        <input
        className="rounded-md  px-2 py-1 bg-gray-50 border-2 focus: outline-none focus:border-0 focus:ring-1 focus:ring-blue-300"
          id={name}
          type={type}
          {...formik.getFieldProps(name)}
          name={name}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="text-red-500">{formik.errors[name]}</div>
        )}
      </div>
    );
  };
  
  export default Input;
  