import 'bootstrap/dist/css/bootstrap.min.css'

function Dropmenu(props) {
  return(
  <div className="rocklaunch">
      <h1>Rocket: {props.RocketType[1].name}</h1>
      <h1>Launch pad: {props.LaunchpadType[1].name}</h1>
  </div>
  );
}

export default Dropmenu;