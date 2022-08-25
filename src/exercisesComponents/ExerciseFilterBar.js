import React from "react";

const ExerciseFilterBar = () => {
  useEffect(() => {
    const url = "https://api.api-ninjas.com/v1/exercises?";
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": "ScTUhzEBRHFYpDzy6wiOWkRwr4FxXJhiK9i3574G",
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
          .then((response) => response.json())
          .then((response) => console.log(response));
      } catch {
        console.error();
      }
    };
  }, []);
  return <div>ExerciseFilterBar</div>;
};

export default ExerciseFilterBar;
