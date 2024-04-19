import {Typography} from "@mui/material";
import {CVTheme} from "../../theme";

interface SkillListProps {
	skills: string[];
}

const MAX_OPACITY = 1;
const MIN_OPACITY = 0.5;

const ENABLE_OPACITY_SHIFT = false;

export default function SkillList(
	{ skills }: SkillListProps,
) {
	const decrement = (MAX_OPACITY - MIN_OPACITY) / skills.length

	return <Typography component={"span"} variant={"body1"} style={CVTheme.skillList}>
		<span style={{ opacity: MAX_OPACITY }}>{ skills[0] }</span>
		{ skills.slice(1).map((skill, i) =>
			<>
				<span key={2*i} style={{ color: CVTheme.listSeparator }}>{" ● "}</span>
				<span key={2*i+1} style={{ opacity: (ENABLE_OPACITY_SHIFT ? MAX_OPACITY - (i+1) * decrement : 1) }}>{ skill }</span>
			</>
		) }
	</Typography>;
}