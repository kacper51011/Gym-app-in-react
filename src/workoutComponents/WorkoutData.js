import uuid from "react-uuid";

const workoutData = [
  {
    workoutName: "Workout based on your experience",
    componentId: uuid(),
    workoutDays: "test",
    workoutType: "test",
    exercises: [
      {
        exerciseName: "test",
        exerciseSets: "test",
        exerciseReps: "test",
        exerciseWeight: "test",
        componentId: uuid(),
      },
      {
        exerciseName: "test2",
        exerciseSets: "test2",
        exerciseReps: "test2",
        exerciseWeight: "test2",
        componentId: uuid(),
      },
      {
        exerciseName: "test3",
        exerciseSets: "test3",
        exerciseReps: "test3",
        exerciseWeight: "test3",
        componentId: uuid(),
      },
      {
        exerciseName: "test4",
        exerciseSets: "test4",
        exerciseReps: "test4",
        exerciseWeight: "test4",
        componentId: uuid(),
      },
    ],
  },
];

export default workoutData;
