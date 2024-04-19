import {ReactNode} from "react";
import {Typography} from "@mui/material";
import {CVTheme} from "../theme";

interface SectionProps {
	title: string;
	children?: ReactNode;
}

export default function Section(
	{ title, children }: SectionProps,
) {

	return <div style={{
		width: "100%", boxSizing: "border-box",
		paddingLeft: 30, paddingRight: 30, gap: 15,
		paddingBottom: 10,
		display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start"
	}}>
		<div style={{
			height: "0.25in", width: "100%",
			display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"
		}}>
			<Typography variant={"h4"} style={CVTheme.headingSection}>
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