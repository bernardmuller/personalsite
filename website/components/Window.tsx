import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import WindowActionButtons from "./WindowActionButtons";

const Window = ({ children, title }: { children: any; title: string }) => {
	const controls = useDragControls();
	const [fullScreen, setFullScreen] = useState(false);

	function startDrag(event: any) {
		controls.start(event);
	}
	return (
		<motion.div
			drag
			dragListener={false}
			dragControls={controls}
			dragMomentum={false}
			className="w-screen h-screen flex justify-center items-center relative overflow-hidden"
		>
			<motion.div
				layout
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
				}}
				className={`${
					fullScreen ? "w-full h-full relative" : "w-3/6 h-4/6"
				} bg-slate-100 shadow-lg rounded-xl z-0`}
			>
				<div
					onPointerDown={startDrag}
					className="handle relative flex justify-center 
						items-center w-full z-10 shadow-xl p-1 bg-mac-ui-2
						 text-mac-ui-txt bg-gradient-to-b from-mac-ui-2
						  to-mac-ui-1 h-8 border-t border-l border-r border-stone-400 rounded-t-xl"
				>
					<WindowActionButtons
						fullScreen={fullScreen}
						onFullScreen={() => setFullScreen((prev) => !prev)}
					/>
					<span className="text-sm">{title}</span>
				</div>
				<div className="h-full rounded-b-xl overflow-hidden">
					{children}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Window;
