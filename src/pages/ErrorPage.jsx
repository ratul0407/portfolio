import Lottie from "lottie-react";
import errorAnimation from "../../public/Animation - 1733669647601.json";
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
function ErrorPage() {
  return (
    <div className="mx-auto w-11/12 2xl:container 2xl:w-full">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <Lottie className="h-[50vh]" animationData={errorAnimation}></Lottie>
        <h3 className="text-3xl font-semibold">
          Requested Page was not found!
        </h3>
        <div className="space-x-4">
          <Link to={-1} className="btn btn-neutral hover:bg-black/85">
            <FaArrowDown className="rotate-90" />
            Go back
          </Link>
          <Link className="btn btn-neutral hover:bg-black/85" to="/">
            <FaArrowUp className="rotate-45" />
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
