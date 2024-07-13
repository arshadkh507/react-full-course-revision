const Skill = (props) => {
  const { skillName, level, bgColor } = props;
  let levelEmojy = "💪";
  if (level === "advanced") {
    levelEmojy = "💪";
  } else if (level === "beginner") {
    levelEmojy = "👶";
  } else {
    levelEmojy = "👍";
  }

  return (
    <>
      <div className="skill" style={{ backgroundColor: `${bgColor}` }}>
        <span>{skillName}</span>
        <span>{levelEmojy}</span>
      </div>
    </>
  );
};
export default Skill;
