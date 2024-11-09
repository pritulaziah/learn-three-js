import { Link } from "react-router-dom";
import Routes from "@constants/route";

const examplesDict: { [key in Exclude<Routes, Routes.Main>]: string } = {
  [Routes.RagingSea]: "Raging Sea",
};

const Root = () => {
  return (
    <div className="min-h-screen grid grid-cols-8 grid-rows-6">
        {Object.entries(examplesDict).map(([link, text]) => (
            <Link
              key={link}
              to={link}
              className="flex justify-center items-center p-2 text-base font-normal text-gray-50 bg-slate-950"
            >
              {text}
            </Link>
        ))}
    </div>
  );
};

export default Root;
