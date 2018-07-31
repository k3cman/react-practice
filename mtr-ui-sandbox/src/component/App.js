import React, { Fragment, Component } from 'react';
import { Header, Footer } from './Layouts/';
import Excercises from './Excercises/';
import { muscles, exercises } from './store';

export default class extends Component {
  state = {
    exercises,
    category: 'legs'
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

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };
  render() {
    const exercises = this.getExcercisesByMuscles(),
      { category } = this.state;
    return (
      <Fragment>
        <Header />

        <Excercises exercises={exercises} category={category} />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
