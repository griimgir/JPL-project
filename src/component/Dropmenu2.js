import React from 'react';

class Dropmenu extends React.Component {
    state = {
        values: []
    }
    componentDidMount() {
       fetch('https://api.spacexdata.com/v4/launchpads')
        .then(function(data) {
            return data.json();
        }).then((json)=> {
            this.setState({
               values: json
            })
        });
    }
    render(){
        return <div className="drop-down">
            <p>Select Launchpad</p>
              <select>{
                 this.state.values.map((obj) => {
                     return <option>{obj.name}</option>
                 })
              }</select>
            </div>;
    }
}

export default Dropmenu;