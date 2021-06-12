import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "./Piechart.css";

function Piechart() {
  const [chartPie, setChartPie] = useState({});

  const getPieData = () => {
    const url = "https://jsonplaceholder.typicode.com/users/1/todos";
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        //Map & Filter to get only status
        let statusTask = res.map((status) => {
          return status.completed;
        });
        //Create a new arry to filter unique
        statusTask = Array.from(new Set(statusTask));

        //Filter to get only complete = true
        let completes = res.filter((complete) => {
          return complete.completed === true;
        });
        completes = Object.keys(res).length;

        //Filter to get only complete = false
        let todos = res.filter((todo) => {
          return todo.completed === false;
        });
        todos = Object.keys(res).length;

        return {
          labels: statusTask,
          datasets: [
            {
              data: [completes, todos],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
              ],
            },
          ],
        };
      });
  };

  useEffect(() => {
    getPieData().then(setChartPie);
  }, []);

  return (
    <div style={{ height: "400px", width: "400px" }}>
      <h1 id="title">Status de Pendência</h1>
      <div>
        <Pie
          data={chartPie}
          option={{
            responsive: true,
          }}
        />
      </div>
    </div>
  );
}

export default Piechart;
