import { FaApple } from "react-icons/fa";
import { format, compareAsc } from "date-fns";
import { useEffect, useState } from "react";
import { IoSearch, IoPlayCircleOutline } from "react-icons/io5";
import { IoIosWifi, IoIosBluetooth, IoIosSwitch } from "react-icons/io";

const Taskbar = () => {
	const [date, setDate] = useState(format(new Date(), "E d LLL H:m"));
	useEffect(() => {
		const interval = setInterval(() => {
			setDate(format(new Date(), "E d LLL H:mm"));
		}, 60000);

		return () => clearInterval(interval);
	});
	return (
		<div className="w-full bg-stone-900 p-1 items-center flex justify-between pl-4 pr-4">
			<div className="flex">
				<ul className="flex gap-5 text-sm text-mac-ui-txt items-center">
					<FaApple size={20} />
					<li>Finder</li>
					<li>File</li>
					<li>Edit</li>
					<li>View</li>
					<li>View</li>
					<li>Go</li>
					<li>Window</li>
					<li>Help</li>
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
	);
};

export default Taskbar;
