import {Typography} from "@mui/material";
import {CVTheme} from "./theme";

import Picture from "./resources/WOLFF-Leo.jpg";
import React, {forwardRef} from "react";
import Contact from "./sections/banner/contact/Contact";


const BANNER_HEIGHT = "2.01in";
const BANNER_WIDTH = "1.05in";
const PICTURE_WIDTH = `calc(${BANNER_WIDTH} * 1.6)`;

export default forwardRef<HTMLDivElement>(function Header(
		{}, ref,
	) {

		return <div ref={ref} style={{
			width: "100%",
			display: "flex", flexDirection: "row",
			justifyContent: "start", alignItems: "end",
			gap: 20, flexShrink: 0, minHeight: 0,
			paddingBottom: 15,
		}}>
			<div style={{
				position: "relative",
				marginLeft: 80, marginRight: 40, marginBottom: 40,
				minWidth: BANNER_WIDTH, width: BANNER_WIDTH, height: BANNER_HEIGHT,
				borderBottomLeftRadius: 16, borderBottomRightRadius: 16,
				backgroundColor: CVTheme.surfaceColor,
				printColorAdjust: "exact",
			}}>
				<img
					src={Picture}
					alt={"Headshot of Leo Wolff"}
					style={{
						borderRadius: "50%", width: PICTURE_WIDTH, height: "auto",
						marginTop: `calc((${BANNER_HEIGHT} - ${PICTURE_WIDTH})/2)`,
						marginLeft: `calc((${BANNER_WIDTH} - ${PICTURE_WIDTH})/2)`,
						border: `solid 5px ${CVTheme.surfaceColor}`,
						boxSizing: "border-box",
					}}
				/>
			</div>
			<div style={{
				paddingRight: 20, paddingBottom: 10,
			}}>
				<Typography variant={"h2"} style={CVTheme.headingSurname}>WOLFF</Typography>
				<Typography variant={"h2"} style={CVTheme.defaultHeading}>Léo</Typography>
				<Typography variant={"h3"} style={{...CVTheme.headingEmploy, marginTop: 10}}>
					EPFL Student, Education in Computer Science, Management and Entrepreneurship
				</Typography>
				<Typography variant={"h4"} color={"text.secondary"} style={CVTheme.headingOrientation}>
					Orientation in Strategy, Innovation & Entrepreneurship
				</Typography>
				<Typography variant={"subtitle2"} style={{...CVTheme.headingDetails, marginTop: 10}}>
					23 years old, French citizenship, Driving License, Swiss resident (B permit).
				</Typography>
			</div>

		</div>;
	},
);