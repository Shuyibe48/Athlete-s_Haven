import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        className="w-1/3 md:w-1/4 mb-8"
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png"
        alt="Error"
      />
      <p className="text-red-500 text-xl text-center">Oops! Something went wrong.</p>

      <Link to='/'><h5 className="bg-green-700 mt-4 text-cyan-100 rounded font-bold py-2 px-4">Back To Home</h5></Link>
    </div>
  );
};

export default ErrorComponent;
