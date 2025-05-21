import React, {useCallback, useEffect, useRef, useState} from "react";
import Header from "./Header";
import Banner from "./Banner";
import Section from "./sections/Section";
import ExperienceSubsection from "./sections/experience/ExperienceSubsection";

import experiences from "./resources/jobExperience.json";
import educations from "./resources/education.json";
import skills from "./resources/computerSkills.json";
import hobbies from "./resources/hobbies.json";
import languages from "./resources/languages.json";
import generalSkills from "./resources/generalSkills.json";
import relevantCourses from "./resources/relevantCourses.json";
import {CVTheme} from "./theme";
import EducationSubsection from "./sections/education/EducationSubsection";
import SkillSubsection from "./sections/computer-skills/SkillSubsection";
import HobbiesSubsection from "./sections/hobbies/HobbiesSubsection";
import Contact from "./sections/banner/contact/Contact";
import Languages from "./sections/banner/languages/Languages";
import GeneralSkills from "./sections/banner/general-skills/GeneralSkills";
import ExperienceSubsectionDivider from "./sections/experience/ExperienceSubsectionDivider";
import {useRefDimensions} from "./refDimensions.hook";
import RelevantCourses from "./sections/courses/RelevantCourses";
import { Typography } from "@mui/material";

type ExperienceType = (typeof experiences)[number]
type Tag = ExperienceType["tags"][number]

const IMPORTANT_TAGS: Tag[]= []

function CurriculumVitae() {

	const { height: headerHeight, ref } = useRefDimensions<HTMLDivElement>();

	return (
		<div className="App" style={{
			width: "100%", height: "100%",
			backgroundColor: CVTheme.backgroundColor,
			boxSizing: "border-box",
			printColorAdjust: "exact",

			display: "flex", flexDirection: "column",
			justifyContent: "start", alignItems: "start",
		}}>
			<Header ref={ref} />
			<div id={"content"} style={{
				display: "flex", flexDirection: "column", width: "100%",
				justifyContent: "start", alignItems: "center", gap: 10,
			}}>
				<Banner
					numberOfPages={1}
					pageHeight={"29.7cm"}
					headerHeight={headerHeight}
				>
					<div style={{
						boxSizing: "border-box",
						width: "100%", paddingLeft: CVTheme.sectionPadding,
						display: "flex", flexDirection: "row",
						justifyContent: "start", alignItems: "center",
						marginTop: 10, marginBottom: 10,
					}}>
						<Contact/>
					</div>
					<div style={{
						boxSizing: "border-box",
						width: "100%", display: "flex", flexDirection: "column",
						justifyContent: "start", alignItems: "start",
					}}>
						<Section title={"Languages"} style={{ flex: 0, }}>
							<Languages languages={languages}/>
						</Section>
						<div style={{
							flex: 0, minWidth: "33%",
							boxSizing: "border-box",
							width: "100%", display: "flex", flexDirection: "row",
							justifyContent: "start", alignItems: "start"
						}}>
							<Section title={"Skills"} style={{ flex: 0, height: "100%", minWidth: "fit-content" }}>
								<GeneralSkills skills={generalSkills}/>
							</Section>
							<Section title={"Relevant Courses"} style={{ flex: 1, }}>
								<RelevantCourses courses={relevantCourses}/>
							</Section>
						</div>
					</div>
				</Banner>
				<div style={{
					width: "100%", paddingTop: CVTheme.headerMargin,
					display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start",
				}}>
					<Section title={"Education"}>
						{ educations.map(education =>
							<EducationSubsection {...education}/>
						) }
					</Section>
					<Section title={"Experience"}>

						{experiences.filter(experienceValue => experienceValue.type === "Experience")
							.map((experienceValue: any, index) =>
							<ExperienceSubsection
								{...experienceValue}
								importantTags={IMPORTANT_TAGS}
							/>,
						)}
						<ExperienceSubsectionDivider label={"Notable projects"}/>
						{experiences.filter(experienceValue => experienceValue.type === "School related project")
							.map((experienceValue: any, index) =>
							<ExperienceSubsection
								{...experienceValue}
								importantTags={IMPORTANT_TAGS}
							/>,
						)}
						<ExperienceSubsectionDivider label={"Teaching assistant positions"}/>
						<ExperienceSubsection
							award
							organization={"EPFL"}
							location={"Lausanne"}
							tags={[]}
							title={"Teaching assistant and course development consultant positions"}
							description={`
								From September 2022 until now, involved in multiple courses from EPFL as a teaching assistant
								where I assisted students with the courses' content. More recently, worked as course development 
								consultant where I created and consulted on a course's project.
								Received IC Teaching Assistant award in 2022 awarded for contribution to
								teaching excellence. More details are available as an appendix below.
							`}
							startDate={"Sep 2022"}
							endDate={"Dec 2024"}
							importantTags={IMPORTANT_TAGS}
						/>
					</Section>
					<Section title={"Computer Skills"}>
						{ (Object.keys(skills) as (keyof typeof skills)[]).map((skillCategory, index) => (
							<SkillSubsection
								title={skillCategory}
								skills={skills[skillCategory]}
							/>
						)) }
					</Section>
					<Section title={"Hobbies"}>
						{ hobbies.map(hobby =>
							<HobbiesSubsection {...hobby}/>
						) }
					</Section>
					<Section title={"Appendix"} style={{ pageBreakBefore: "always" }}>
						<ExperienceSubsectionDivider label={"Teaching assistant positions"}/>

						{experiences.filter(experienceValue => experienceValue.type === "Assistantship")
							.map((experienceValue: any, index) =>
								<ExperienceSubsection
									{...experienceValue}
									importantTags={IMPORTANT_TAGS}
								/>,
							)}
					</Section>
				</div>
			</div>
		</div>
	);
}

export default CurriculumVitae;
