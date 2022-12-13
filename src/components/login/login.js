import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Input from "../common/input";
import logo from "../../assets/images/logo192.png";

let initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values) => {
  axios
    .post("https://dummyjson.com/auth/login", {
      username: values.username,
      password: values.password,
    })
    .then((res) => {
      alert("ورود با موفقیت انجام شد");
      console.log(res);
      localStorage.setItem("values", JSON.stringify(res.data.token));
    })
    .catch((error) => {
      alert("نام کاربری یا رمز عبور اشتباه است");
    });
};

const validationSchema = Yup.object({
  username: Yup.string().required("نام کاربری را وارد کنید"),
  password: Yup.string().required("رمز عبور را وارد کنید"),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className="bg-white flex  justify-evenly mt-8 max-w-xl text-center items-center shadow-lg ml-60">
      <div className="flex flex-col items-center justify-center text-center h-80 ml-4 ">
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="username" label="نام کاربری" />
          <Input formik={formik} name="password" label="رمز عبور" />
          <button
            className="mt-4 bg-blue-300 rounded-md py-1 px-3 text-white cursor-pointer ml-8"
            type="submit"
          >
            ورود به حساب کاربری
          </button>
          <p className="text-xs text-blue-500 mt-2 cursor-pointer ml-16">رمز عبور را فراموش کردم </p>
        </form>
      </div>
      <hr className="w-0.5 bg-gray-100  h-72 ml-16 " />
      <img src={logo} alt="logo image" className="ml-4" />
    </div>
  );
};

export default LoginForm;
