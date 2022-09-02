import uuid from "react-uuid";

const workoutData = [
  {
    workoutName: "Workout based on your experience",
    componentId: uuid(),
    workoutDays: "Monday, Wednesday, Friday",
    workoutType: "FBW",
    exercises: [
      {
        exerciseName: "Deadlift",
        exerciseSets: "3",
        exerciseReps: "5",
        exerciseWeight: "50kg",
        componentId: uuid(),
      },
      {
        exerciseName: "bench press",
        exerciseSets: "3",
        exerciseReps: "5",
        exerciseWeight: "40kg",
        componentId: uuid(),
      },
      {
        exerciseName: "Pull ups",
        exerciseSets: "3",
        exerciseReps: "10",
        exerciseWeight: "0kg",
        componentId: uuid(),
      },
      {
        exerciseName: "Other",
        exerciseSets: "3",
        exerciseReps: "15",
        exerciseWeight: "20kg",
        componentId: uuid(),
      },
    ],
  },
];

export default workoutData;
