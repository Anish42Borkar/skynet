import { ReactNode } from "react";
import HalfDoughnutChart, { DataProps } from "../HalfDoughnutChart";

type ChartCompProps = {
  title: string;
  data: DataProps;
  showLegend?: boolean;
  middleElement?: ReactNode;
  description?: ReactNode;
  width?: string;
};

const ChartComp = ({
  data,
  title,
  showLegend = true,
  middleElement,
  description,
  width = "350px",
}: ChartCompProps) => {
  return (
    <div
      style={{
        width: width,
      }}
      className="w-[350px] min-h-[275px] h-fit rounded-[10px] bg-white flex flex-col items-center mt-1"
    >
      <p className="font-extrabold text-xl mt-5">{title}</p>
      <div className="w-full mt-5 flex justify-center">
        <HalfDoughnutChart
          data={data}
          showLegend={showLegend}
          middleElement={middleElement}
          description={description}
        />
      </div>
    </div>
  );
};

export default ChartComp;
