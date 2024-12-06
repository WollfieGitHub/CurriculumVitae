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
				display: "flex", flexDirection: "row",
				justifyContent: "start", alignItems: "start",
				flexGrow: 1,
			}}>
				<Banner
					numberOfPages={1}
					pageHeight={"29.7cm"}
					headerHeight={headerHeight}
				>
					<Contact/>
					<Section paddingBottom={CVTheme.headerMargin / 3} title={"Skills"}>
						<GeneralSkills skills={generalSkills}/>
					</Section>
					<Section paddingBottom={CVTheme.headerMargin / 3} title={"Languages"}>
						<Languages languages={languages}/>
					</Section>
					<Section paddingBottom={CVTheme.headerMargin / 3} title={"Relevant Courses"}>
						<RelevantCourses courses={relevantCourses}/>
					</Section>
				</Banner>
				<div style={{
					display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start",
					paddingTop: CVTheme.headerMargin
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
						<ExperienceSubsectionDivider label={"School-related projects"}/>
						{experiences.filter(experienceValue => experienceValue.type === "School related project")
							.map((experienceValue: any, index) =>
							<ExperienceSubsection
								{...experienceValue}
								importantTags={IMPORTANT_TAGS}
								topMargin={index === 1}
							/>,
						)}
						<ExperienceSubsectionDivider label={"Teaching assistant positions"}/>
						{experiences.filter(experienceValue => experienceValue.type === "Assistantship")
							.map((experienceValue: any, index) =>
							<ExperienceSubsection
								{...experienceValue}
								importantTags={IMPORTANT_TAGS}
							/>,
						)}
					</Section>
					<Section title={"Computer Skills"}>
						{ (Object.keys(skills) as (keyof typeof skills)[]).map((skillCategory, index) => (
							<SkillSubsection
								startOfPage={index === 2}
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
				</div>
			</div>
		</div>
	);
}

export default CurriculumVitae;
