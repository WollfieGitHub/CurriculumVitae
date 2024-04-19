import {Typography} from "@mui/material";
import {CVTheme} from "../../theme";

interface HobbiesSubsectionProps {
	title: string;
	description: string;
}

export default function HobbiesSubsection(
	{ title, description }: HobbiesSubsectionProps,
) {

	return <div>
		<Typography component={"span"} variant={"h5"} style={CVTheme.hobbiesHeader}>
			{ title }
			<span style={CVTheme.hobbies}>{ ` - ${description}` }</span>
		</Typography>
	</div>;
}