import React, { useState, useEffect } from "react";
import collect from "collect.js";
import ColorHash from "color-hash";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function Chart() {
  const [sales, setSales] = useState([]);
  const [name, setName] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const colorHash = new ColorHash();

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Sales Revenue",
        padding: {
          bottom: 30,
        },
        weight: "bold",
        color: "#00325C",
        font: {
          size: 28,
        },
        align: "center",
      },
      datalabels: {
        display: true,
        color: "black",
        align: "center",
        labels: {
          title: {
            font: {
              weight: "bold",
            },
          },
          value: {
            color: "white",
          },
        },
        formatter: function (value) {
          return value;
        },
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3002/sales")
        .then((value) => {
          if (!value.ok) {
            setError("Could not fetch data from the server...");
          }
          return value.json();
        })
        .then((result) => {
          setSales(result);
          setIsLoading(false);

          const nameItem = collect(sales)
            .map(function (item) {
              return item.name;
            })
            .all();

          const revenueItem = collect(sales)
            .map(function (item) {
              return item.revenue;
            })
            .all();

          setName(nameItem);
          setRevenue(revenueItem);

          // console.log(`name: ${nameItem}`);
          // console.log(`revenue: ${revenueItem}`);
        })
        .catch((errorMsg) => {
          // throw Error(errorMsg.message);
          alert(errorMsg.message);
        });
    }, 1000);
  }, [sales]);

  return (
    <div className="container py-2 px-5">
      {error && (
        <div className="mb-2">
          <center>
            <strong>{error}</strong>
          </center>
        </div>
      )}
      {isLoading && (
        <div>
          <center>
            <strong>Loading...</strong>
          </center>
        </div>
      )}
      <Bar
        options={options}
        data={{
          labels: name,
          datasets: [
            {
              label: "Revenue Data",
              backgroundColor: name.map((name) => colorHash.hex(name)),
              borderColor: "rgba(0, 0, 0, 1)",
              borderWidth: 2,
              data: revenue,
            },
          ],
        }}
      />
    </div>
  );
}

export default Chart;
