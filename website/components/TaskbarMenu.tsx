import { useState } from "react";
import TaskbarMenuItem from "./TaskbarMenuItem";

export default function TaskbarMenu({
	id,
	title,
	focused,
	active,
	item,
	onClick,
	onActive,
}: {
	id: number;
	active: number | null;
	title: any;
	focused: boolean;
	item: any;
	onClick: (id: number) => any;
	onActive: (id: number) => any;
}) {
	const [expanded, setExpanded] = useState(false);
	return (
		<div className="relative">
			<button
				onClick={() => {
					onClick(id);
				}}
				onMouseEnter={() => {
					if (focused) {
						onActive(id);
					}
				}}
				onMouseLeave={() => {
					setExpanded(false);
				}}
				className={`${active == id && "bg-stone-700"} ${
					focused && "hover:bg-stone-700"
				} px-4 h-6 py-0.5 rounded-md`}
			>
				{title}
			</button>
			{active == id && (
				<div className="flex flex-col items-center absolute bg-stone-900/60 backdrop-blur-md border border-stone-500 top-7 w-60 p-1 rounded-lg z-50">
					{item?.menu?.map((item: any) => (
						<>
							{item.type == "2" ? (
								<div className=" border-b my-1 border-stone-500 w-11/12" />
							) : (
								<TaskbarMenuItem key={item.title} item={item} />
							)}
						</>
					))}
				</div>
			)}
		</div>
	);
}
