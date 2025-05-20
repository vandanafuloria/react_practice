export default function Images({ mood, person }) {
  console.log(mood, person);
  let img = "";
  if (mood == "good")
    img =
      "https://blog.gratefulness.me/content/images/2023/02/spring-quotes3.jpg";
  else if (mood == "boring")
    img =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnv7Yr0-of4dfqepgKvMDyCY-dpmZmtGxTFXt2Zkjseq8lhjfb0SgT93lFEKEW4S-5oVA&usqp=CAU";
  else if (mood == "sad")
    img =
      "https://hips.hearstapps.com/hmg-prod/images/sad-quotes10-1643914099.jpg?crop=1xw:1xh;center,top&resize=980:*";

  return <img style={{ width: 300 }} src={img} />;
}
