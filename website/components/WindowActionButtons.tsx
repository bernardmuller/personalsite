import React, { useState } from "react";
import { HiMinus } from "react-icons/hi";
import { IoMdArrowDropup } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const WindowActionButtons = ({
	fullScreen,
	onFullScreen,
	onClose,
}: {
	fullScreen: boolean;
	onFullScreen: any;
	onClose: () => any;
}) => {
	const [hover, setHover] = useState(false);
	return (
		<div
			className="flex gap-2 absolute left-2.5"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<button
				type="button"
				onClick={onClose}
				className="flex justify-center flex-center rounded-full h-3.5 w-3.5 bg-mac-act-1-l"
			>
				{hover && <IoClose size={15} className="fill-mac-act-1-d" />}
			</button>
			<div className="flex justify-center flex-center rounded-full h-3.5 w-3.5 bg-mac-act-2-l">
				{hover && <HiMinus size={14} className="fill-mac-act-2-d" />}
			</div>
			<button
				type="button"
				className="flex justify-center flex-center rounded-full h-3.5 w-3.5 bg-mac-act-3-l"
				onClick={onFullScreen}
			>
				{hover && (
					<>
						<IoMdArrowDropup
							size={14}
							className={`absolute rotate-135 fill-mac-act-3-d ${
								fullScreen
									? "-translate-y-2px -translate-x-2px"
									: "translate-y-2px translate-x-2px"
							}`}
						/>
						<IoMdArrowDropup
							size={14}
							className={`absolute rotate-315 fill-mac-act-3-d ${
								fullScreen
									? "translate-y-2px translate-x-2px"
									: "-translate-y-2px -translate-x-2px"
							}`}
						/>
					</>
				)}
			</button>
		</div>
	);
};

export default WindowActionButtons;
