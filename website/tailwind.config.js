/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: "#ffffff",
				mac: {
					"act-1-l": "#FF5F57",
					"act-1-d": "#990001",
					"act-2-l": "#FEBC2E",
					"act-2-d": "#985700",
					"act-3-l": "#2BC840",
					"act-3-d": "#055902",
					"ui-1": "#303235",
					"ui-2": "#454248",
					"ui-txt": "#BABABD",
				},
			},
			width: {
				3.5: "14px",
			},
			rotate: {
				135: "135deg",
				315: "315deg",
			},
			translate: {
				"3px": "3px",
				"2px": "2px",
				"translate-x-3px": "3px",
				"translate-x-2px": "2px",
				"-translate-y-3px": "-3px",
				"-translate-y-2px": "-2px",
				"-translate-x-3px": "-3px",
				"-translate-x-2px": "-2px",
			},
			backgroundImage: {
				"mac-bg": "url('/bg.jpeg')",
				"mac-bg-2": "url('/bg-2.jpeg')",
				"mac-bg-3": "url('/bg-3.jpeg')",
				"mac-bg-4": "url('/bg-4.jpeg')",
				"mac-bg-5": "url('/bg-5.jpeg')",
				"mac-bg-6": "url('/bg-6.jpeg')",
				"mac-bg-7": "url('/bg-7.jpeg')",
				"mac-bg-8": "url('/bg-8.jpeg')",
			},
			borderRadius: {
				"sm-1": "0.225rem",
			},
		},
	},
	plugins: [],
};
