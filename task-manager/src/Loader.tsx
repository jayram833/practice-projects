import { FC } from "react";

const Loader: FC = function () {
    return (
        <div className="flex items-center absolute inset-0 bg-gray-200 bg-opacity-50 justify-center">
            <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>)
}
export default Loader;