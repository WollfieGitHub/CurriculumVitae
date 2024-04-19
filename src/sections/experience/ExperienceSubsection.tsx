import {Typography} from "@mui/material";
import {CVTheme} from "../../theme";
import {WorkspacePremium, WorkspacePremiumOutlined} from "@mui/icons-material";

interface ExperienceSubsectionProps {
	startDate: string;
	endDate: string;
	title: string;
	organization: string;
	location: string;
	description: string;
	tags: string[];
	award?: boolean;
	importantTags: string[];
	topMargin?: boolean;
}

export default function ExperienceSubsection(
	{
		startDate, endDate,
		title, organization,
		location, description,
		award,
		tags, importantTags,
		topMargin
	}: ExperienceSubsectionProps,
) {

	const isImportant = importantTags.some(importantTag => tags.includes(importantTag));

	return <div className={topMargin ? "start-of-page" : ""} style={{
		display: "table", breakInside: "avoid",
	}}>
		<div style={{
			display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start",
			breakInside: "avoid", overflow: "visible"
		}}>
			<Typography variant={"subtitle2"} style={CVTheme.jobDates}>{`${startDate} - ${endDate}`}</Typography>
			<Typography variant={"subtitle1"} style={{...CVTheme.jobDetails}} component={"span"}>
				{award && <WorkspacePremiumOutlined style={{fontSize: CVTheme.jobDetails.fontSize}}/>}
				<span style={{fontWeight: isImportant ? "bold" : undefined}}>
				{title}
			</span>
				{` • ${organization} • ${location}`}
			</Typography>
			<Typography variant={"body1"} style={CVTheme.jobDescription}>{description}</Typography>
		</div>
	</div>;
}