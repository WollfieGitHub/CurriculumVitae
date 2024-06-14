import {Box, Typography} from "@mui/material";
import {CVTheme} from "../../theme";

interface ExperienceSubsectionDividerProps {
	label: string;
}

export default function ExperienceSubsectionDivider(
	{ label }: ExperienceSubsectionDividerProps,
) {

	return <Box>
		<Typography variant={"h5"}  style={CVTheme.headingSection}>
			{ ` - ${label} - ` }
		</Typography>
	</Box>;
}