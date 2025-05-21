import {CVTheme} from "./theme";
import {ReactNode, useEffect, useRef} from "react";

interface LeftBannerProps {
	children: ReactNode,
	numberOfPages: number;
	pageHeight: string;
	headerHeight: number;
}

export default function Banner(
	{ children, numberOfPages, pageHeight, headerHeight }: LeftBannerProps,
) {

	return <div style={{
		boxSizing: "border-box",
		minHeight: 0,
		position: "relative",
		backgroundColor: CVTheme.surfaceColor,
		printColorAdjust: "exact",
		borderRadius: 48/2,
		width: "90%",
		zIndex: 10,
		display: "flex", flexDirection: "column",
		justifyContent: "start", alignItems: "center",
		paddingTop: 10, paddingBottom: 10,
	}}>
		{ children }
	</div>;
}