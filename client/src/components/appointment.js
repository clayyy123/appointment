import React, { Component } from 'react';

class Appointment extends Component {
  state = {
    step: 0,
    fields: {}
  };

  componentDidMount() {
    console.log('mounted');
  }
  render() {
    return (
      <form>
        {this.appointmentHandler()}
        <button onClick={this.nextStepHandler.bind(this)}>next step</button>
      </form>
    );
  }

  appointmentHandler() {
    const { step } = this.state;
    if (step === 0) {
      return (
        <fieldset>
          <label>Month</label>
          <select>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="March">March</option>
            <option value="April">April</option>
          </select>

          <label>Day</label>
          <input type="number" name="day" max="31" />
          <label>Year</label>
          <input type="number" name="year" min="2018" max="2020" />
        </fieldset>
      );
    } else if (step === 1) {
      return <h1> this is step 2 </h1>;
    }
  }

  nextStepHandler(e) {
    e.preventDefault();
    const { step } = this.state;
    if (step < 3) {
      this.state.step++;
      this.setState({
        step: this.state.step
      });
    }
    console.log(this.state.step);
  }
}

export default Appointment;
