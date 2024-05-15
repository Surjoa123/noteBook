import Challenge from "./Challenge";

function challengesList({ challenges }) {
  return (
    <div class="list-group " style={{margin:"2rem", width:"28rem", display:"flex" , flexDirection: "row",gap:"1rem"}}>
      {challenges.map((challenge) => (
        <Challenge key={challenge.id} challenge={ challenge } />
      ))}
    </div>
  );
}
export default challengesList;
