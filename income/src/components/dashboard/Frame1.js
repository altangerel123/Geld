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
import { ModalContext } from "../../app/layout";
import { useContext } from "react";

export default function Frame1() {
  const { newRecords } = useContext(ModalContext);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const labels = newRecords.map((item) => item.addCategory);

  const data = {
    labels,
    datasets: [
      {
        label: "Expense",
        data: newRecords.map((item) =>
          item.expense === true ? item.amount : null
        ),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Income",
        data: newRecords.map((item) =>
          item.expense === false ? item.amount : null
        ),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
    ],
  };

  return (
    <div className="bg-white rounded-[18px]">
      <p className="px-[24px] py-[16px] font-normal text-[16px] border-b-[1px]">
        Income - Expense
      </p>
      <div className="flex justify-center py-[32px] h-[400px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
