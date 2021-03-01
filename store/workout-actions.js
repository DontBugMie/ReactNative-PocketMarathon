export const ADD_Workout = 'ADD_Workout';

export const addWorkout = (title) =>  {
    return { type: ADD_Workout, workoutData: { title: title }}
};