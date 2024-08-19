import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleGoogle = () => {
    googleLogin()
      .then((data) => {
        console.log(data, "successfully google logged in");
      })
      .catch((data) => console.log(data, "google sigin not working"));
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
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth>
            sign up
          </Button>
          
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
