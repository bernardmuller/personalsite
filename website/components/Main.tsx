import Image from "next/image";
import bg from "../assets/svg/bg.jpeg";

const Main = ({ children }: { children: any }) => {
	return (
		<div className="relative flex justify-center items-center w-full h-full overflow-hidden">
			{children}
		</div>
	);
};

export default Main;
