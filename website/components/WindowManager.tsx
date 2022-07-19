import React, { useContext } from "react";
import OldProfileWindow from "./OldProfileWindow";
import { AppCtx } from "../contexts/windowContext";

const WindowManager = () => {
	const context = useContext(AppCtx);

	if (context?.profile) {
		return <OldProfileWindow onClose={() => context.setProfile(false)} />;
	}
	return null;
};

export default WindowManager;
