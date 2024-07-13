import Skill from "./Skill";

const SkillList = (props) => {
  const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB",
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00",
    },
  ];

  return (
    <div className="skill-list">
      {skills.map((item) => {
        const { skill, level, color } = item;

        return <Skill skillName={skill} level={level} bgColor={color} />;
      })}
    </div>
  );
};

export default SkillList;
