import {Typography} from "@mui/material";
import {CVTheme} from "../../../theme";

interface LanguagesProps {
	languages: { [language: string]: string }
}

export default function Languages(
	{ languages }: LanguagesProps,
) {

	return <div style={{
		display: "grid", gridTemplateColumns: `repeat(${Math.min(Object.keys(languages).length, 5)}, 1fr)`,
		gap: 10, width: "100%",
	}}>
		{ Object.entries(languages).map(([ language, level ]) =>
			<div style={{
				display: "flex", flexDirection: "row",
				justifyContent: "start", alignItems: "start",
				gridColumn: "auto / span 1", gap: "0.5em",
			}}>
				<span style={{color: CVTheme.listSeparator}}>{"● "}</span>
				<Typography style={{ ...CVTheme.language, textAlign: "left"}}>
					{language}
						<br/><Typography
						sx={theme => ({ ...CVTheme.language, color: theme.palette.text.secondary })}
						component={"span"}
						color={"text.secondary"}
					>
						{level}
					</Typography>
				</Typography>
			</div>
		)}
	</div>;
}