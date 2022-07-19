import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { IoSearch, IoPlayCircleOutline } from "react-icons/io5";
import { IoIosWifi, IoIosBluetooth, IoIosSwitch } from "react-icons/io";
import TaskbarMenu from "./TaskbarMenu";
import { FaApple, FaTools } from "react-icons/fa";
import {
	FiClock,
	FiDownload,
	FiCloud,
	FiGlobe,
	FiFolder,
	FiCommand,
} from "react-icons/fi";
import { HiOutlineDocument } from "react-icons/hi";
import { IoIosHome, IoMdDesktop } from "react-icons/io";
import { GrAppleAppStore } from "react-icons/gr";
import { BsShift } from "react-icons/bs";
import { AppCtx } from "../contexts/windowContext";

const Taskbar = ({
	overlay,
	onOverlay,
}: {
	overlay: boolean;
	onOverlay: (val: boolean) => any;
}) => {
	const context = useContext(AppCtx);

	const [date, setDate] = useState(format(new Date(), "E d LLL H:m"));
	const [focused, setFocused] = useState(false);
	const [active, setActive] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(format(new Date(), "E d LLL H:mm"));
		}, 1000);

		return () => clearInterval(interval);
	});

	useEffect(() => {
		if (!overlay) {
			setFocused(false);
			setActive(0);
		}
	}, [overlay]);

	const taskbarMenu = [
		{
			id: 1,
			title: <FaApple size={18} />,
			menu: [
				{
					title: "About This Mac",
					type: 1,
					action: () => context?.setProfile(true),
				},
				{ type: 2 },
				{ title: "System Preferences", type: 1 },
				{ title: "App Store", type: 1 },
				{ type: 2 },
				{ title: "Recent Items", type: 1 },
				{ title: "Force Quit", type: 1 },
				{ type: 2 },
				{ title: "Sleep", type: 1 },
				{ title: "Restart...", type: 1 },
				{ title: "Shut Down...", type: 1 },
				{ type: 2 },
				{ title: "Lock Screen", type: 1 },
				{ title: "Log out", type: 1 },
			],
		},
		{
			id: 3,
			title: "Finder",
			menu: [
				{ title: "New Finder Window", type: 1 },
				{ title: "New Folder", type: 1, disabled: false },
				{ title: "New Folder with Selection", type: 1, disabled: true },
				{ title: "New Smart Folder", type: 1, disabled: false },
				{ title: "New Tab", type: 1 },
				{ title: "Open", type: 1, disabled: true },
				{ title: "Open With", type: 1, disabled: true },
				{ title: "Close Window", type: 1, disabled: true },
				{ type: 2 },
				{ title: "Get Info", type: 1, disabled: false },
				{ title: "Rename", type: 1, disabled: true },
				{ title: "Compress", type: 1, disabled: true },
				{ title: "Duplicate", type: 1, disabled: true },
				{ title: "Make Alias", type: 1, disabled: true },
				{ title: "Quick Look", type: 1, disabled: true },
				{ title: "Print", type: 1, disabled: true },
				{ type: 2 },
				{ title: "Share", type: 1, disabled: true },
				{ type: 2 },
				{ title: "Show Original", type: 1, disabled: true },
				{ title: "Add to Dock", type: 1, disabled: true },
				{ type: 2 },
				{ title: "Move to Bin", type: 1, disabled: true },
				{ title: "Eject", type: 1, disabled: true },
				{ type: 2 },
				{ title: "[Colors]", type: 1, disabled: true },
				{ title: "Tags", type: 1, disabled: true },
				{ type: 2 },
				{ title: "Find", type: 1, disabled: false },
			],
		},
		{
			id: 4,
			title: "File",
			menu: [
				{ title: "New Text File", type: 1 },
				{ title: "New File...", type: 1 },
				{ title: "New Window", type: 1 },
				{ type: 2 },
				{ title: "Open...", type: 1 },
				{ title: "Open Folder...", type: 1 },
				{ title: "Open Recent", type: 1 },
				{ type: 2 },
				{ title: "Save", type: 1 },
				{ title: "Save As...", type: 1 },
				{ type: 2 },
				{ title: "Share", type: 1 },
				{ type: 2 },
				{ title: "Auto Save", type: 1 },
				{ type: 2 },
				{ title: "Close Window", type: 1 },
			],
		},
		{
			id: 5,
			title: "Edit",
			menu: [
				{ title: "Undo", type: 1 },
				{ title: "Redo", type: 1 },
				{ type: 2 },
				{ title: "Cut", type: 1 },
				{ title: "Copy", type: 1 },
				{ title: "Paste", type: 1 },
				{ title: "Select All", type: 1 },
				{ type: 2 },
				{ title: "Show Clipboard", type: 1 },
				{ type: 2 },
				{ title: "Start Dictation", type: 1 },
				{ title: "Emoji & Symbols", type: 1 },
			],
		},
		{
			id: 6,
			title: "View",
			menu: [
				{ title: "as Icons", type: 1 },
				{ title: "as List", type: 1 },
				{ title: "as Columns", type: 1 },
				{ title: "as Gallery", type: 1 },
				{ type: 2 },
				{ title: "Use Stacks", type: 1 },
				{ title: "Sort By", type: 1 },
				{ title: "Clean Up", type: 1 },
				{ title: "Clean Up By", type: 1 },
				{ type: 2 },
				{ title: "Hide Sidebar", type: 1 },
				{ title: "Hide Preview", type: 1 },
				{ type: 2 },
				{ title: "Hide Toolbar", type: 1 },
				{ title: "Show All Tabs", type: 1 },
				{ title: "Hide All Tabs", type: 1 },
				{ title: "Hide Tab Bar", type: 1 },
				{ title: "Hide Status Bar", type: 1 },
				{ type: 2 },
				{ title: "Customise Toolbar...", type: 1 },
				{ title: "Customise Touch Bar", type: 1 },
				{ type: 2 },
				{ title: "Show View Options", type: 1 },
				{ title: "Show Preview Options", type: 1 },
				{ type: 2 },
				{ title: "Enter Full Screen", type: 1 },
			],
		},
		{
			id: 7,
			title: "Go",
			menu: [
				{ title: "Back", type: 1 },
				{ title: "Forward", type: 1 },
				{ title: "Select Startup disk", type: 1 },
				{ type: 2 },
				{ title: `Recents`, type: 1, iconLeft: <FiClock size={18} /> },
				{
					title: `Documents`,
					type: 1,
					iconLeft: <HiOutlineDocument size={18} />,
				},
				{
					title: `Desktop`,
					type: 1,
					iconLeft: <IoMdDesktop size={18} />,
				},
				{
					title: `Downloads`,
					type: 1,
					iconLeft: <FiDownload size={18} />,
				},
				{ title: `Home`, type: 1, iconLeft: <IoIosHome size={18} /> },
				{
					title: `Computer`,
					type: 1,
					iconLeft: <IoMdDesktop size={18} />,
				},
				{
					title: `AirDrop`,
					type: 1,
					iconLeft: <FaApple size={18} />,
				},
				{
					title: `Network`,
					type: 1,
					iconLeft: <FiGlobe size={18} />,
				},
				{
					title: `iCloud Drive`,
					type: 1,
					iconLeft: <FiCloud size={18} />,
				},
				{ title: `Share`, type: 1, iconLeft: <FiFolder size={18} /> },
				{
					title: `Applications`,
					type: 1,
					iconLeft: <GrAppleAppStore size={18} />,
				},
				{
					title: `[icon] Utilities`,
					type: 1,
					iconLeft: <FaTools size={18} />,
				},
				{ type: 2 },
				{ title: `Recent Folders`, type: 1 },
				{ type: 2 },
				{ title: `Go to Folder...`, type: 1 },
				{ title: `Connect to Server`, type: 1 },
			],
		},
		{
			id: 8,
			title: "Window",
			menu: [
				{ title: "Minimise", type: 1 },
				{ title: "Zoom", type: 1 },
				{ title: "Move Window to Left", type: 1 },
				{ title: "Move Window to Right", type: 1 },
				{ title: "Replaced Tiled Window", type: 1 },
				{ title: "Cycle Through Windows", type: 1 },
				{ title: "Show Progress Window", type: 1 },
				{ type: 2 },
				{ title: "Show Previous Tab", type: 1 },
				{ title: "Show Next Tab", type: 1 },
				{ title: "Move Tab to New Window", type: 1 },
				{ title: "Merge All Windows", type: 1 },
				{ type: 2 },
				{ title: "Bring All to Front", type: 1 },
			],
		},
		{
			id: 9,
			title: "Help",
			menu: [
				{ title: "[ input for search ]", type: 1 },
				{ title: "macOs Help", type: 1 },
				{ type: 2 },
				{ title: "See What's New in macOs", type: 1 },
				{ title: "New to Mac? Learn the Basics", type: 1 },
			],
		},
	];

	return (
		<>
			<div className="fixed z-10 top-0 w-full bg-stone-900 items-center flex justify-between pl-2 pr-5">
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
										onOverlay(false);
										return;
									}
									onOverlay(true);
									setActive(id);
									setFocused(true);
								}}
								item={item}
								onActive={(id) => setActive(id)}
								key={item.id}
								title={item.title}
							/>
						))}
					</ul>
				</div>
				<div className="flex text-mac-ui-txt text-sm">
					<ul className="flex gap-6 text-sm text-mac-ui-txt items-center">
						<IoIosBluetooth size={17} />
						<IoPlayCircleOutline size={17} />
						<IoIosWifi size={17} />
						<IoSearch size={17} />
						<IoIosSwitch size={17} />
						<li>{date}</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Taskbar;
