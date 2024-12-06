import {Typography} from "@mui/material";
import {CVTheme} from "../../../theme";

export default function Contact() {

	return <div style={{
		display: "flex", flexDirection: "column",
		justifyContent: "center", alignItems: "center",
		gap: 20,
		width: "100%",
		paddingBottom: CVTheme.headerMargin,
	}}>
		<div style={{width: "60%"}}>
			<Typography style={CVTheme.headingSection}>{"PHONE"}</Typography>
			<Typography style={CVTheme.contact}>+33781389029</Typography>
		</div>
		<div style={{width: "60%"}}>
			<Typography style={CVTheme.headingSection}>{"EMAIL"}</Typography>
			<Typography style={CVTheme.contact} component={"a"}
			            href={"mailto:leo.wolff@free.fr"}>leo.wolff@free.fr</Typography>
		</div>
		{process.env.ADDRESS && <div style={{width: "60%"}}>
			<Typography style={CVTheme.headingSection}>{"ADDRESS"}</Typography>
			<Typography style={CVTheme.contact}>{ process.env.ADDRESS }</Typography>
		</div>}
	</div>;
}