import React from 'react';

class Dropmenu extends React.Component {
    state = {
        values: []
    }
    componentDidMount() {
       fetch('https://api.spacexdata.com/v4/rockets')
        .then(function(data) {
            return data.json();
        }).then((json)=> {
            this.setState({
               values: json
            })
        });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        } 

    render(){
        return <div className="drop-down">
            <p>Select Rocket</p>
              <select onChange={this.handleChange}>{
                 this.state.values.map((obj) => {
                     return <option>{obj.name}</option>
                 })
              }
              </select>
            </div>;
    }
}

export default Dropmenu;