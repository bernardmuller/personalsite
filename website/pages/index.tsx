import type { NextPage } from "next";
import Head from "next/head";
import { Window } from "../components/Window";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Bernard Muller</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div
					style={{
						backgroundImage: `url(https://wallpaperaccess.com/full/752854.jpg)`,
						position: "fixed",
						width: "100%",
						height: "100%",
						backgroundRepeat: "no-repeat",
						backgroundSize: "100% 100%",
					}}
				></div>

				<Window />
			</main>
		</div>
	);
};

export default Home;
