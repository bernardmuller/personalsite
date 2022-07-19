import { profile } from "console";
import { createContext, useState } from "react";

export interface AppContextInterface {
	profile: boolean;
	setProfile: (value: boolean) => void;
}

export const AppCtx = createContext<AppContextInterface | null>(null);

export const WindowProvider = ({ children }: { children: any }) => {
	const [profile, setProfile] = useState(true);
	return (
		<AppCtx.Provider value={{ profile, setProfile }}>
			{children}
		</AppCtx.Provider>
	);
};
