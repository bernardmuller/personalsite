import React, { useState } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { Stack } from "@mui/material";
import { motion, useDragControls } from "framer-motion";
import { IoMdArrowDropup } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { HiMinus } from "react-icons/hi";
import { TbArrowsDiagonalMinimize } from "react-icons/tb";

// export class Window extends React.Component {
// 	eventLogger = (e: MouseEvent, data: Object) => {
// 		console.log("Event: ", e);
// 		console.log("Data: ", data);
// 	};

// 	render() {
// 		return (
// 			<Draggable
// 				handle=".handle"
// 				defaultPosition={{ x: 0, y: 0 }}
// 				scale={1}
// 				>
// 			</Draggable>
// 		);
// 	}
// }

//

// return (
// <>
// 	<div  />
// </>
// )

export const Window = () => {
	const controls = useDragControls();

	const [hover, setHover] = useState(false);
	const [fullScreen, setFullScreen] = useState(false);
	function startDrag(event) {
		controls.start(event);
	}
	return (
		<motion.div
			drag
			dragListener={false}
			dragControls={controls}
			dragMomentum={false}
		>
			<div
				style={{
					width: `${fullScreen ? "100vw" : "900px"}`,
					height: `${fullScreen ? "100vh" : "650px"}`,
					backgroundColor: "#F7F7F7",
					boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
					borderRadius: "10px",
					border: "0.5px solid  rgba(0, 0, 0, 0.4)",
				}}
			>
				<Stack
					onPointerDown={startDrag}
					justifyContent="space-between"
					direction="row"
					className="handle"
					style={{
						backgroundColor: "#353435",
						padding: "0.6rem",
						color: "#c4c4c4",
						borderTopRightRadius: "10px",
						borderTopLeftRadius: "10px",
						justifyContent: "center",
						width: "100%",
						boxShadow: "rgba(0, 0, 0, 0.2)",
						alignItems: "center",
						zIndex: "10",
						position: "relative",
					}}
				>
					<Stack
						direction="row"
						spacing={1}
						position="absolute"
						left="0.8rem"
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						<div
							style={{
								height: "14px",
								width: "14px",
								backgroundColor: "#FF5F57",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{hover && <IoClose size={15} color="#990001" />}
						</div>
						<div
							style={{
								height: "14px",
								width: "14px",
								backgroundColor: "#FEBC2E",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{hover && <HiMinus size={28} color="#985700" />}
						</div>
						<button
							type="button"
							style={{
								height: "14px",
								width: "14px",
								backgroundColor: "#2BC840",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
								border: "none",
							}}
							onClick={() => setFullScreen((prev) => !prev)}
						>
							{hover && (
								<>
									<IoMdArrowDropup
										size={14}
										color="#055902"
										style={{
											position: "absolute",
											transform: `rotate(135deg) ${
												fullScreen
													? "translateY(2px)"
													: "translateY(-3px)"
											}`,
										}}
									/>
									<IoMdArrowDropup
										size={14}
										color="#055902"
										style={{
											position: "absolute",
											transform: `rotate(-45deg) ${
												fullScreen
													? "translateY(2px)"
													: "translateY(-3px)"
											}`,
										}}
									/>
								</>
							)}
						</button>
					</Stack>
					Bernard Muller
				</Stack>
				<iframe
					src="https://bernardmuller.netlify.app/"
					width="100%"
					height="93%"
					id="inlineFrameExample"
					title="Inline Frame Example"
					style={{ border: "none", padding: "0.1rem" }}
				/>
			</div>
		</motion.div>
	);
};
