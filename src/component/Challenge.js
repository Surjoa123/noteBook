function Challenge({ challenge }) {
  return (
    <div style={{width:"13rem"}}>
      <div className="card" style={{width: "18rem;"}}>
        <div className="card-body">
          <h5 className="card-title" style={{textAlign: "center"}}>{challenge.name}</h5>
          <p className="card-text" style={{textAlign: "center"}}>
          {challenge.description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{textAlign: "center"}}>{challenge.month}</li>
        </ul>
      </div>
    </div>
  );
}
export default Challenge;
