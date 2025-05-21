
const DEFAULT_FONT_FAMILY = "Georgia";

export const CVTheme = {
	sectionPadding: 30,
	backgroundColor: "#FFFFFF",
	surfaceColor: "#D4E7DE",

	fontFamily: DEFAULT_FONT_FAMILY,

	defaultHeading: { fontFamily: DEFAULT_FONT_FAMILY, fontWeight: "bold", fontSize: "24pt", lineHeight: 1.0 },
	headingSurname: { color: "#0C6B55", fontFamily: DEFAULT_FONT_FAMILY, fontWeight: "bold", fontSize: "24pt" },
	headingEmploy: { fontFamily: DEFAULT_FONT_FAMILY, fontSize: "16pt" },
	headingOrientation: { fontFamily: DEFAULT_FONT_FAMILY, fontSize: "12pt" },
	headingDetails: { fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: 1.0 },
	headingSection: {
		color: "#0C6B55", fontFamily: DEFAULT_FONT_FAMILY, fontWeight: "bold", fontSize: "12pt",
		marginRight: 10, flexGrow: 1, flexShrink: 0,
	},
	jobDates: { fontFamily: DEFAULT_FONT_FAMILY, fontSize: "9pt", lineHeight: "1.2" },
	jobDetails: {
		color: "#406376", fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2"
	},
	jobDescription: { fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2" },

	sectionSeparator: "solid 1.5pt " + "#4A9A82",
	listSeparator: "#4A9A82",

	VBox: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
	HBox: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" },
	educationBold: { fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2", fontWeight: "bold" },
	education: { fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2" },
	skillHeader: { color: "#406376", fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2" },
	skillList: { fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2" },
	hobbiesHeader: { color: "#406376", fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2" },
	hobbies: { color: "black", fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2" },
	contact: { color: "black", fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2" },
	language: { color: "black", fontFamily: DEFAULT_FONT_FAMILY, fontSize: "11pt", lineHeight: "1.2" },

	headerMargin: 50,

}