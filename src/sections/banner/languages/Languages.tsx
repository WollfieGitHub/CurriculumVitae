import {Typography} from "@mui/material";
import {CVTheme} from "../../../theme";

interface LanguagesProps {
	languages: { [language: string]: string }
}

export default function Languages(
	{ languages }: LanguagesProps,
) {

	return <div style={{
		display: "flex", flexDirection: "column",
		justifyContent: "center", alignItems: "center",
		gap: 10,
	}}>
		{ Object.entries(languages).map(([ language, level ]) =>
			<Typography style={{ ...CVTheme.language, width: "100%" }}>
				<span style={{ color: CVTheme.listSeparator }}>{ "● " }</span>
				{ `${language} - ${level}` }
			</Typography>
		) }
	</div>;
}