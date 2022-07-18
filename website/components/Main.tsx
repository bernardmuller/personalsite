import Image from "next/image";
import { useState } from "react";
import bg from "../assets/svg/bg.jpeg";
import Overlay from "./Overlay";
import Taskbar from "./Taskbar";

const Main = ({ children }: { children: any }) => {
	const [overlay, setOverlay] = useState(false);
	return (
		<div className="relative flex justify-center items-center w-full h-full overflow-hidden">
			<Taskbar
				onOverlay={(val: boolean) => setOverlay(val)}
				overlay={overlay}
			/>
			{overlay && <Overlay onClick={() => setOverlay(false)} />}
			{children}
		</div>
	);
};

export default Main;
