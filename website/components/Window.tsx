import React, { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import WindowActionButtons from "./WindowActionButtons";

const spring = {
	type: "spring",
	stiffness: 100,
	damping: 20,
};

export const Window = ({ children }) => {
	const controls = useDragControls();
	const [fullScreen, setFullScreen] = useState(false);

	function startDrag(event) {
		controls.start(event);
	}
	return (
		<motion.div
			drag
			dragListener={false}
			dragControls={controls}
			dragMomentum={false}
			className="w-screen h-screen flex justify-center items-center"
		>
			<motion.div
				layout
				transition={spring}
				className={`${
					fullScreen ? "w-screen h-screen" : "w-3/6 h-4/6"
				} bg-slate-100 shadow-lg rounded-xl border border-solid border-zinc-400 z-0 overflow-hidden`}
			>
				<div
					onPointerDown={startDrag}
					className="handle relative flex justify-center items-center w-full z-10 shadow-xl  p-1 bg-zinc-700 text-zinc-400 border-zinc-200 h-8"
				>
					<WindowActionButtons
						fullScreen={fullScreen}
						onFullScreen={() => setFullScreen((prev) => !prev)}
					/>
				</div>
				{children}
			</motion.div>
		</motion.div>
	);
};
