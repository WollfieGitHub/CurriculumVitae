import {Typography} from "@mui/material";
import {CVTheme} from "../../theme";
import {ReactNode, useRef} from "react";

interface RelevantCoursesProps {
	courses: {
		title: string;
		description?: string;
	}[],
}

export default function RelevantCourses(
	{courses}: RelevantCoursesProps,
) {

	return <div style={{
		width: "100%", display: "flex",
		flexDirection: "column",
		justifyContent: "start", alignItems: "start",
		gap: 10,
	}}>
		{courses.map(({title, description}, index) =>
			<div style={{
				display: "table",
				breakInside: "avoid",
			}}>
				<div style={{
					display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start",
					breakInside: "avoid", overflow: "visible"
				}}>
					<Typography
						component={"span"}
						style={{...CVTheme.language}}
					>
						<span style={{color: CVTheme.listSeparator}}>{"● "}</span>
						{title}
						{description && <>
							<br/>
							<Typography
								fontFamily={CVTheme.fontFamily}
								variant={"caption"}
								component={"span"}
								color={"text.secondary"}
							>
								{description}
							</Typography>
						</>}
					</Typography>
				</div>
			</div>
		)}
	</div>
}