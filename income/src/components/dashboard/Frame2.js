import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ModalContext } from "../../app/layout";
ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

export default function Frame2() {
  const { newRecords } = useContext(ModalContext);
  const data = {
    labels: newRecords.map((item) => item.addCategory),
    datasets: [
      {
        label: "# of Votes",
        data: newRecords.map((item) =>
          item.expense === true ? item.amount : null
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-white rounded-[18px]">
      <p className="px-[24px] py-[16px] font-normal text-[16px] border-b-[1px]">
        Income - Expense
      </p>
      <div className="flex justify-center py-[32px] h-[400px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
