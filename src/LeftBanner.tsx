import {CVTheme} from "./theme";
import {ReactNode, useEffect, useRef} from "react";

interface LeftBannerProps {
	children: ReactNode,
	numberOfPages: number;
	pageHeight: string;
}

export default function LeftBanner(
	{ children, numberOfPages, pageHeight }: LeftBannerProps,
) {

	return <div style={{
		minHeight: 0,
		position: "relative",
		backgroundColor: CVTheme.surfaceColor,
		printColorAdjust: "exact",
		borderTopRightRadius: 48,
		width: "2.83in", minWidth: "2.83in",
		height: `calc(${numberOfPages} * ${pageHeight})`,
		zIndex: 10,
		display: "flex", flexDirection: "column",
		justifyContent: "start", alignItems: "center",
		paddingTop: CVTheme.headerMargin,
		gap: CVTheme.headerMargin,
	}}>
		{ children }
	</div>;
}