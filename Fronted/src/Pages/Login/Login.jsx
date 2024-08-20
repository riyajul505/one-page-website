import { Card, Input, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { googleLogin, emailSignUp } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    emailSignUp(data.email, data.password).then(() => {
      navigate("/");
      Swal.fire({
        title: "Logged in",
        icon: "success",
        showConfirmButton: false,
        timer: 1300,
      });
    });
  };

  const handleGoogle = () => {
    googleLogin().then(() => {
      navigate("/");
      Swal.fire({
        title: "Logged in",
        icon: "success",
        showConfirmButton: false,
        timer: 1300,
      });
    });
  };
  return (
    <div className="flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              {...register("email")}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              {...register("password")}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>

          <button className="mt-6 btn btn-primary w-full">sign up</button>
        </form>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal flex items-center justify-center"
        >
          Already have an account?{" "}
          <span className="font-medium text-gray-900 flex items-center gap-3 ">
            <button onClick={handleGoogle} className="btn btn-ghost">
              Sign In
              <FcGoogle className="text-2xl" />
            </button>
          </span>
        </Typography>
      </Card>
    </div>
  );
};

export default Login;
