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
		borderTopRightRadius: 48,
		width: "2.83in", minWidth: "2.83in",
		height: `calc(${numberOfPages} * ${pageHeight} - ${headerHeight}px)`,
		zIndex: 10,
		display: "flex", flexDirection: "column",
		justifyContent: "start", alignItems: "center",
		paddingTop: CVTheme.headerMargin,
	}}>
		{ children }
	</div>;
}