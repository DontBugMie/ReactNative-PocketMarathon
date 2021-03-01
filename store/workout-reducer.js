import { ADD_Workout } from './workout-actions';
import Workout from '../models/workout';
const initialState = {
    workouts: []
};

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_Workout:
            const newWorkout = new Workout(new Date().toString(), action.workoutData.title);
            return {
                workouts: state.workouts.concat(newWorkout)
            };
            default:
                return state;
    }
};


