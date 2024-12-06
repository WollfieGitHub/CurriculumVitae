import {Box, Typography} from "@mui/material";
import {CVTheme} from "../../theme";

interface ExperienceSubsectionDividerProps {
	label: string;
	topMargin?: boolean;
}

export default function ExperienceSubsectionDivider(
	{ label, topMargin }: ExperienceSubsectionDividerProps,
) {

	return <Box className={topMargin ? "start-of-page" : ""}>
		<Typography variant={"h5"}  style={CVTheme.headingSection}>
			{ ` - ${label} - ` }
		</Typography>
	</Box>;
}