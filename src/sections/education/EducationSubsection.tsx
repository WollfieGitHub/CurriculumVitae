import {Typography} from "@mui/material";
import {CVTheme} from "../../theme";

interface EducationSubsectionProps {
	startDate: string;
	endDate: string;
	institution: string;
	location: string;
	degree: string;
}

export default function EducationSubsection(
	{
		startDate, endDate,
		institution,
		location, degree
	}: EducationSubsectionProps,
) {

	return <div>
		<Typography component={"span"} style={CVTheme.education}>
			<span style={CVTheme.educationBold}>{ `${startDate} - ${endDate}, ${institution}` }</span>
			{ `, ${location}` }
			<br/>{ degree }
		</Typography>
	</div>;
}