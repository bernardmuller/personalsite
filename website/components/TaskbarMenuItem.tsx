import React, { useEffect, useState } from "react";

const TaskbarMenuItem = ({ item }: { item: Object }) => {
	return (
		<button
			onClick={() => {
				alert("works");
			}}
			className={`w-full flex flex-col hover:bg-sky-700 rounded-sm-1 px-3 py-0.5 text-white`}
		>
			{item.title}
		</button>
	);
};

export default TaskbarMenuItem;
