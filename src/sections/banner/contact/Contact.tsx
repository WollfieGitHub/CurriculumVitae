import {Typography} from "@mui/material";
import {CVTheme} from "../../../theme";

export default function Contact() {

	return <div style={{
		display: "flex", flexDirection: "row",
		justifyContent: "start", alignItems: "start",
		gap: 10, marginTop: 10, marginBottom: 10,
		boxSizing: "border-box",
	}}>
		<Typography style={CVTheme.contact}>
			<Typography component={"span"} style={{...CVTheme.headingSection, fontWeight: "inherit"}}>{"Phone: "}</Typography>
			+33781389029
		</Typography>
		<Typography style={CVTheme.contact}>
			<Typography component={"span"} style={{...CVTheme.headingSection, fontWeight: "inherit"}}>{"Email: "}</Typography>
			<Typography style={CVTheme.contact} component={"a"} href={"mailto:leo.wolff@free.fr"}>leo.wolff@free.fr</Typography>
		</Typography>
		{process.env.ADDRESS && <Typography style={CVTheme.contact}>
			<Typography component={"span"} style={{...CVTheme.headingSection, fontWeight: "inherit"}}>{"Address: "}</Typography>
			{ process.env.ADDRESS }
		</Typography>}
	</div>;
}