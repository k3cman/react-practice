import React, { Fragment, Component } from 'react';
import { Header, Footer } from './Layouts/';
import Excercises from './Excercises/';
import { muscles, exercises } from './store';

export default class extends Component {
  state = {
    exercises
  };

  getExcercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((excercises, excercise) => {
        const { muscles } = excercise;
        excercises[muscles] = excercises[muscles]
          ? [...excercises[muscles], excercise]
          : [excercise];

        return excercises;
      }, {})
    );
  }
  render() {
    const exercises = this.getExcercisesByMuscles();
    return (
      <Fragment>
        <Header />

        <Excercises exercises={exercises} />

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
