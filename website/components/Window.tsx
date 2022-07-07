import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { Stack } from "@mui/material";

export class Window extends React.Component {
	eventLogger = (e: MouseEvent, data: Object) => {
		console.log("Event: ", e);
		console.log("Data: ", data);
	};

	render() {
		return (
			<Draggable
				handle=".handle"
				defaultPosition={{ x: 0, y: 0 }}
				scale={1}
			>
				<div
					style={{
						width: "900px",
						height: "650px",
						backgroundColor: "#F7F7F7",
						boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
						borderRadius: "10px",
						border: "0.5px solid  rgba(0, 0, 0, 0.4)",
					}}
				>
					<Stack
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
							boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
							alignItems: "center",
							zIndex: "10",
						}}
					>
						<Stack
							direction="row"
							spacing={1}
							position="absolute"
							left="0.8rem"
						>
							<div
								style={{
									height: "15px",
									width: "15px",
									backgroundColor: "#FF5F57",
									borderRadius: "50%",
								}}
							></div>
							<div
								style={{
									height: "15px",
									width: "15px",
									backgroundColor: "#FEBC2E",
									borderRadius: "50%",
								}}
							></div>
							<div
								style={{
									height: "15px",
									width: "15px",
									backgroundColor: "#2BC840",
									borderRadius: "50%",
								}}
							></div>
						</Stack>
						Bernard Muller
					</Stack>
					<iframe
						src="https://bernardmuller.netlify.app/"
						width="100%"
						height="93%"
						id="inlineFrameExample"
						title="Inline Frame Example"
					/>
				</div>
			</Draggable>
		);
	}
}
