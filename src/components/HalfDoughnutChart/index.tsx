import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import { ReactNode } from "react";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export interface DataProps extends ChartData<"doughnut"> {
  cutout: string;
}

type HalfDoughnutChartProps = {
  data: DataProps;
  showLegend?: boolean;
  middleElement?: ReactNode;
  description?: ReactNode;
};

const HalfDoughnutChart = ({
  data,
  showLegend = true,
  middleElement,
  description,
}: HalfDoughnutChartProps) => {
  // Chart options with custom text in the center
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90, // Start angle (rotated upwards)
    circumference: 180, // Sweep angle (half circle)
    elements: {
      arc: {
        cutout: "70%", // Adjusts the inner radius (reduces bar thickness)
      } as any,
    },
    plugins: {
      legend: {
        display: showLegend,
        position: "bottom",
        labels: {
          usePointStyle: true, // Use custom point style for rounded markers
          boxWidth: 308, // Size of the rounded marker
          padding: 15, // Padding between legend items
        },
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      // Custom plugin to render "Hello" text inside the doughnut
      datalabels: {
        display: true,
        formatter: () => "Hello", // Text to display inside the doughnut
        font: {
          size: 30, // Font size for the text
          weight: "bold", // Bold text
        },
        color: "#333", // Text color
        align: "center", // Align text in the center
        anchor: "center", // Anchor text in the center
      },
    } as any,
  };

  return (
    <div className="flex flex-col items-center w-full ">
      <div style={{ width: "90%", height: "170px" }} className="relative">
        <Doughnut data={data ?? []} options={options} />
        {middleElement}
      </div>
      {description}
    </div>
  );
};

export default HalfDoughnutChart;
