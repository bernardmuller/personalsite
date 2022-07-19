import React from "react";
import Window from "./Window";

const OldProfileWindow = ({ onClose }: { onClose: () => any }) => {
	return (
		<Window title="Bernard Muller" onClose={onClose}>
			<iframe
				src="https://bernardmuller.netlify.app/"
				width="100%"
				height="100%"
				id="inlineFrameExample"
				title="Inline Frame Example"
				className="bg-white p-0 border-none"
			/>
		</Window>
	);
};

export default OldProfileWindow;
