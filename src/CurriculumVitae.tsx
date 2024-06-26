import React, {useCallback, useEffect, useRef, useState} from "react";
import Header from "./Header";
import LeftBanner from "./LeftBanner";
import Section from "./sections/Section";
import ExperienceSubsection from "./sections/experience/ExperienceSubsection";

import experiences from "./resources/jobExperience.json";
import educations from "./resources/education.json";
import skills from "./resources/computerSkills.json";
import hobbies from "./resources/hobbies.json";
import languages from "./resources/languages.json";
import generalSkills from "./resources/generalSkills.json";
import {CVTheme} from "./theme";
import EducationSubsection from "./sections/education/EducationSubsection";
import SkillSubsection from "./sections/computer-skills/SkillSubsection";
import HobbiesSubsection from "./sections/hobbies/HobbiesSubsection";
import Contact from "./sections/banner/contact/Contact";
import Languages from "./sections/banner/languages/Languages";
import GeneralSkills from "./sections/banner/general-skills/GeneralSkills";
import ExperienceSubsectionDivider from "./sections/experience/ExperienceSubsectionDivider";
import {useRefDimensions} from "./refDimensions.hook";

type ExperienceType = (typeof experiences)[number]
type Tag = ExperienceType["tags"][number]

const IMPORTANT_TAGS: Tag[]= []

function CurriculumVitae() {

	const { height: headerHeight, ref } = useRefDimensions<HTMLDivElement>();

	useEffect(() => {
		console.log(headerHeight)
	}, [headerHeight]);

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
				display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start",
				flexGrow: 1,
			}}>
				<LeftBanner
					numberOfPages={3}
					pageHeight={"11in"}
					headerHeight={headerHeight}
				>
					<Contact/>
					<Section title={"Skills"}>
						<GeneralSkills skills={generalSkills}/>
					</Section>
					<Section title={"Languages"}>
						<Languages languages={languages}/>
					</Section>
				</LeftBanner>
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
								topMargin={index === 7}
							/>,
						)}
						<ExperienceSubsectionDivider label={"School-related projects"}/>
						{experiences.filter(experienceValue => experienceValue.type === "School related project")
							.map((experienceValue: any, index) =>
							<ExperienceSubsection
								{...experienceValue}
								importantTags={IMPORTANT_TAGS}
								topMargin={index === 7}
							/>,
						)}
						<ExperienceSubsectionDivider label={"Assistantships"}/>
						{experiences.filter(experienceValue => experienceValue.type === "Assistantship")
							.map((experienceValue: any, index) =>
							<ExperienceSubsection
								{...experienceValue}
								importantTags={IMPORTANT_TAGS}
								topMargin={index === 7}
							/>,
						)}
					</Section>
					<Section title={"Computer Skills"}>
						{ (Object.keys(skills) as (keyof typeof skills)[]).map(skillCategory => (
							<SkillSubsection title={skillCategory} skills={skills[skillCategory]}/>
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
