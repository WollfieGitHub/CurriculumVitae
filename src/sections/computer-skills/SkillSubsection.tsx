import {Typography} from "@mui/material";
import SkillList from "./SkillList";
import {CVTheme} from "../../theme";

interface SkillSubsectionProps {
	title: string;
	skills: string[];
}

export default function SkillSubsection(
	{ title, skills }: SkillSubsectionProps,
) {

	return <div>
		<Typography variant={"h5"} style={CVTheme.skillHeader}>
			{ `${title}:` }
		</Typography>
		<div style={{ paddingLeft: 10, }}>
			<SkillList skills={skills}/>
		</div>
	</div>;
}