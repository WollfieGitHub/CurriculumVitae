import {CSSProperties, ReactNode} from "react";
import {SxProps, Typography} from "@mui/material";
import {CVTheme} from "../theme";

interface SectionProps {
	title: string;
	children?: ReactNode;
	topMargin?: boolean;
	style?: CSSProperties;
	paddingBottom?: number;
}

export default function Section(
	{ title, children, topMargin = false, style, paddingBottom, }: SectionProps,
) {

	return <div
		style={{
			width: "100%", boxSizing: "border-box",
			paddingLeft: CVTheme.sectionPadding, paddingRight: CVTheme.sectionPadding, gap: 15,
			paddingBottom: paddingBottom ?? 10,
			display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start",
			...style
		}}
		className={topMargin ? "start-of-page" : ""}
	>
		<div style={{
			height: "0.25in", width: "100%",
			display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"
		}}>
			<Typography variant={"h4"} style={{ ...CVTheme.headingSection, minWidth: "fit-content", whiteSpace: "nowrap", }}>
				{ title.toUpperCase() }
			</Typography>
			<div style={{
				width: "100%", height: "100%",
				display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
			}}>
				<div style={{ height: "50%", width: "100%", borderBottom: CVTheme.sectionSeparator }}/>
				<div style={{ height: "50%", width: "100%" }}/>
			</div>
		</div>
		{ children }
	</div>;
}