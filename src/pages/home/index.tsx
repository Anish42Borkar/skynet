import { useState } from "react";
import { useNavigate } from "react-router";
import { LogoIcon } from "../../assets/icons";
import ChartComp from "../../components/chartComp";
import ConnectedInputSelect from "../../components/connectedInputSelect";
import { DataProps } from "../../components/HalfDoughnutChart";
import LanguageDropdown from "../../components/languageDropdown";
import ResultTag from "../../components/resultTag";
import styles from "./style.module.css";

const data: DataProps = {
  labels: ["A", "AA", "AAA"],
  datasets: [
    {
      data: [40, 50, 30], // Values for the chart
      backgroundColor: ["#CADAEA", "#92B6D8", "#4A6681"], // Colors for the segments
      // hoverBackgroundColor: ["#45A049", "#C0C0C0"],
      cutout: "70%",
      borderWidth: 0,
    },
  ],
} as any;

const data2: DataProps = {
  labels: ["A", "AA", "AAA"],
  datasets: [
    {
      data: [90, 10], // Values for the chart
      backgroundColor: ["#4A6681", "#CADAEA"], // Colors for the segments
      // hoverBackgroundColor: ["#45A049", "#C0C0C0"],
      cutout: "70%",
      borderWidth: 0,
    },
  ],
} as any;

const Element1 = (
  <div className="absolute top-1/2 left-1/2 -translate-y-8 -translate-x-1/2 flex flex-col justify-center">
    <p className="text-center font-bold text-[42px] leading-tight">05</p>
    <div className="text-orange-1 text-sm font-normal whitespace-nowrap">
      Requires Manual Check
    </div>
  </div>
);

const Element2 = (
  <div className="absolute top-1/2 left-1/2 -translate-y-0 -translate-x-1/2 flex flex-col justify-center">
    <p className="text-center font-bold text-[42px] leading-tight">90%</p>
    <div className="text-green-1 font-normal">Compliant</div>
  </div>
);

const HomePage = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onClick = () => {
    if (url !== "")
      navigate("/loading", {
        state: { url: url },
      });
  };

  return (
    <div className={`${styles.home} `}>
      <div className={`${styles.hero} `}>
        <div className="scale-75 flex flex-wrap md:flex-nowrap justify-center items-center h-full gap-5">
          <div className="flex gap-2 flex-col translate-y-10">
            <ChartComp
              middleElement={Element1}
              // showLegend={false}
              data={data}
              title="WCAG 2.0/2.1/2.2"
            />
            <ResultTag title="Headings" failed={"40"} passed={"10"} />
          </div>

          <div className="flex gap-2 flex-col -translate-y-10">
            <ResultTag title="Images" failed={"05"} passed={"90"} />

            <ChartComp
              middleElement={Element2}
              showLegend={false}
              data={data2}
              title="Accessibility Score"
            />
          </div>
        </div>
      </div>
      <div className="p-5 relative flex flex-col justify-between ">
        <div className="flex justify-between items-center">
          <LogoIcon width={410} height={72} />
          <LanguageDropdown />
        </div>

        <div className="">
          <p className="font-bold text-[32px] text-center mt-10">
            Our free <span className="text-purple-1">ADA</span> and{" "}
            <span className="text-purple-1">WCAG compliance</span> checker
            identifies web accessibility issues
          </p>
          <div className="px-16 mt-5">
            <ConnectedInputSelect onChange={handleInputChange} />
          </div>

          <div className="flex justify-center mt-5">
            <button
              onClick={onClick}
              className="bg-purple-1 w-[143px] text-white font-medium text-lg py-2 px-4 rounded-lg"
            >
              Start Scan
            </button>
          </div>
        </div>

        <div className="w-full  flex justify-between items-center p-5">
          <div className="flex items-center gap-5 ">
            <p className="font-bold ">Privacy Policy</p>
            <div className="w-2 h-2 bg-purple-1 rounded-full"></div>
            <p className="font-bold ">Terms & Conditions</p>
          </div>

          <span className="text-gray-2 text-sm ">
            Copyright © Skynettechnologies.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
