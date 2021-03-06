import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import Main from "../components/Main";
import Taskbar from "../components/Taskbar";
import Window from "../components/Window";
import WindowManager from "../components/WindowManager";
import { WindowProvider } from "../contexts/windowContext";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="Bernard Muller"
				description="I am a passionate software engineer that loves building cool projects."
			/>
			<WindowProvider>
				<div className="h-screen w-screen">
					<Head>
						<title>Bernard Muller</title>
						<link rel="icon" href="/favicon.ico" />
					</Head>

					<Main>
						<div className="absolute w-full h-full bg-mac-bg-2 bg-cover bg-center bg-no-repeat -z-100" />
						<WindowManager />
					</Main>
				</div>
			</WindowProvider>
		</>
	);
};

export default Home;
