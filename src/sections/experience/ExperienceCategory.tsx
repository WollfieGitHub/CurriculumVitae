import {ReactNode} from "react";
import {Typography} from "@mui/material";
import {CVTheme} from "../../theme";

interface ExperienceCategoryProps {
	categoryName: string;
	children: ReactNode
}

export default function ExperienceCategory(
	{ categoryName, children }: ExperienceCategoryProps,
) {

	return <div style={{
		display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start",
		gap: 15
	}}>
		<Typography variant={"h5"} style={CVTheme.headingSection}>
			{ categoryName }
		</Typography>
		{ children }
	</div>;
}