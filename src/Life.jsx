export default function LifeDefination({ person, mood, size = 40 }) {
  console.log(person, mood);
  let para = "";
  if (mood == "good") para = "Life is very nice";
  else if (mood == "sad") para = "aww sad ";
  else if (mood == "boring") para = "explore somehting new";

  return (
    <p style={{ fontSize: size, color: "magenta" }}>
      {person.name} is in {person.phase} phase. <br />
      {para}
    </p>
  );
}
