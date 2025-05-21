import {Typography} from "@mui/material";
import {CVTheme} from "../../../theme";

interface GeneralSkillsProps {
	skills: string[]
}

export default function GeneralSkills(
	{ skills }: GeneralSkillsProps,
) {

	return <div style={{
		width: "100%", flex: 1, height: "100%",
		display: "flex", flexDirection: "column",
		justifyContent: "space-evenly", alignItems: "start",
		columnGap: 50, rowGap: 10,
	}}>
		{skills.map(skill =>
			<Typography style={{
				...CVTheme.language,
				gridColumn: "auto / span 1", gap: "0.5em", textAlign: "left",
				whiteSpace: "nowrap",
			}}>
				<span style={{color: CVTheme.listSeparator}}>{"● "}</span>
				{`${skill}`}
			</Typography>
		)}
	</div>;
}