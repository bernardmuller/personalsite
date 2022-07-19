import React, { useEffect, useState } from "react";

const TaskbarMenuItem = ({ item }: { item: any }) => {
	return (
		<button
			onClick={() => {
				if (item.action) {
					item?.action();
				}
			}}
			className={`w-full flex gap-2 hover:bg-sky-700 rounded-sm-1 px-3 py-0.5 text-white`}
		>
			{item.iconLeft && item.iconLeft}
			{item.title}
		</button>
	);
};

export default TaskbarMenuItem;
