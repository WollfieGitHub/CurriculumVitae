import {Typography} from "@mui/material";
import {CVTheme} from "../../theme";

interface EducationSubsectionProps {
	startDate: string;
	endDate: string;
	institution: string;
	location: string;
	degree: string;
	orientation?: string;
}

export default function EducationSubsection(
	{
		startDate, endDate,
		institution,
		location, degree,
		orientation,
	}: EducationSubsectionProps,
) {

	return <div>
		<Typography component={"span"} style={CVTheme.education}>
			<span style={CVTheme.educationBold}>{ `${startDate} - ${endDate}, ${institution}` }</span>
			{ `, ${location}` }
			<br/>{ degree }
			{orientation !== undefined && (<>
				<br/>
				<Typography color={"text.secondary"} fontSize={"0.8em"} fontFamily={"inherit"}>
					{`Orientation: ${orientation}`}
				</Typography>
			</>)}
		</Typography>
	</div>;
}