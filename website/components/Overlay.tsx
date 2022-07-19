import React from "react";

const Overlay = ({ onClick }: { onClick: () => any }) => {
	return (
		<div
			className="fixed top-0 mt-6.5 w-screen h-screen bg-transparent z-9"
			onClick={onClick}
		></div>
	);
};

export default Overlay;
