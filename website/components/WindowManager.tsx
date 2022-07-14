import React from "react";
import OldProfileWindow from "./OldProfileWindow";

const WindowManager = ({ profile }: { profile: boolean }) => {
	if (profile) {
		return <OldProfileWindow />;
	}
	return null;
};

export default WindowManager;
