import { FaApple } from "react-icons/fa";
import { format, compareAsc } from "date-fns";
import { useEffect, useState } from "react";
import { IoSearch, IoPlayCircleOutline } from "react-icons/io5";
import { IoIosWifi, IoIosBluetooth, IoIosSwitch } from "react-icons/io";
import TaskbarMenu from "./TaskbarMenu";

const Taskbar = () => {
	const [date, setDate] = useState(format(new Date(), "E d LLL H:m"));
	const [focused, setFocused] = useState(false);
	const [active, setActive] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setDate(format(new Date(), "E d LLL H:mm"));
		}, 1000);

		return () => clearInterval(interval);
	});

	const taskbarMenu = [
		{ id: 1, title: <FaApple size={18} /> },
		{ id: 2, title: "Finder" },
		{ id: 3, title: "File" },
		{ id: 4, title: "Edit" },
		{ id: 5, title: "View" },
		{ id: 6, title: "Go" },
		{ id: 7, title: "Window" },
		{ id: 8, title: "Help" },
	];

	return (
		<>
			<div className=" fixed  top-0 w-full bg-stone-900 items-center flex justify-between pl-4 pr-4">
				<div className="flex">
					<ul className="flex text-sm text-white items-center">
						{taskbarMenu.map((item) => (
							<TaskbarMenu
								id={item.id}
								focused={focused}
								active={active}
								onClick={(id) => {
									if (focused) {
										setFocused(false);
										setActive(0);
										return;
									}
									setActive(id);
									setFocused(true);
								}}
								onActive={(id) => setActive(id)}
								key={item.id}
								title={item.title}
							/>
						))}
					</ul>
				</div>
				<div className="flex text-mac-ui-txt text-sm">
					<ul className="flex gap-4 text-sm text-mac-ui-txt items-center">
						<IoIosBluetooth size={17} />
						<IoPlayCircleOutline size={17} />
						<IoIosWifi size={17} />
						<IoSearch size={17} />
						<IoIosSwitch size={17} />
						<li>{date}</li>
					</ul>
				</div>
			</div>
			{/* {active > 0 && (
				<div
					className=" absolute mt-7 w-screen h-screen bg-transparent z-10"
					onClick={() => {
						setActive(0);
						setFocused(false);
					}}
				/>
			)} */}
		</>
	);
};

export default Taskbar;
