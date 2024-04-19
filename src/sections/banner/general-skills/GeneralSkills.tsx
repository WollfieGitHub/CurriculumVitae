import {Typography} from "@mui/material";
import {CVTheme} from "../../../theme";

interface GeneralSkillsProps {
	skills: string[]
}

export default function GeneralSkills(
	{ skills }: GeneralSkillsProps,
) {

	return <div style={{
		display: "flex", flexDirection: "column",
		justifyContent: "center", alignItems: "center",
		gap: 10,
	}}>
		{skills.map(skill =>
			<Typography style={{...CVTheme.language, width: "100%"}}>
				<span style={{color: CVTheme.listSeparator}}>{"● "}</span>
				{`${skill}`}
			</Typography>
		)}
	</div>;
}