export type WorkExperience = {
    companyName: string;
    logoUrl: string;
    /* Optional density variants, so a fixed-size logo is not shipped at 3x to
       every display. */
    logoSrcSet?: string;
    altText: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    description: string;
};

export type SkillCategoryProps = {
    title: string;
    skills: string[];
}

export type ProjectCardProps = {
    title: string;
    image: string;
    link: string;
    description: string;
    technologies: string[];
}