import React, { useEffect, useState } from "react";

const TaskbarMenuItem = () => {
	return (
		<button
			onClick={() => {
				alert("works");
			}}
			className={`w-full flex flex-col hover:bg-sky-700 rounded-sm-1 px-3 py-0.5 text-white`}
		>
			About this Mac
		</button>
	);
};

export default TaskbarMenuItem;
