import { useEffect, useState } from "react";
import { LogoIcon, PdfIcon } from "../../assets/icons";
import ChartComp from "../../components/chartComp";
import { DataProps } from "../../components/HalfDoughnutChart";
import LanguageDropdown from "../../components/languageDropdown";
import useResponseDataStore from "../../store/useResponseDataStore";
import ResultTag from "../../components/resultTag";
import NoImage from "../../assets/No-Image-Placeholder.png";
import useSiteImageDetailsStore from "../../store/useSiteImageDetailsStore";

type ResultT = {
  [key in string]: {
    passed: number;
    failed: number;
  };
};

const Element2 = (
  <div className="absolute top-1/2 left-1/2 -translate-y-0 -translate-x-1/2 flex flex-col justify-center">
    <p className="text-center font-bold text-[42px] leading-tight">47%</p>
    <div className="text-red-failed font-normal">Not Compliant</div>
  </div>
);

const Element = (
  <div className="absolute top-1/2 left-1/2 -translate-y-8 -translate-x-1/2 flex flex-col justify-center">
    <p className="text-center font-bold text-[42px] leading-tight">123</p>
    <div className="text-red-failed font-normal">Failed Checks</div>
  </div>
);

const description1 = (
  <div className="font-normal text-center mt-5">
    Automated Accessibility score has limitations,{" "}
    <span className="text-blue">click here to learn more</span>
  </div>
);

const description2 = (
  <div className="font-normal text-center mt-5 mb-6">
    Not compliant under WCAG 2.1 & 2.2
  </div>
);

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

const ResultsPage = () => {
  const [results, setResults] = useState<ResultT>({});
  const { data } = useResponseDataStore();
  const { imgData } = useSiteImageDetailsStore();

  const filterResp = () => {
    const outputData = Object.entries(data?.group_data!).reduce(
      (acc: any, [key, value]) => {
        const summary = value.reduce(
          (totals: any, current: any) => {
            totals.passed += current.total_success;
            totals.failed += current.total_error;
            return totals;
          },
          { passed: 0, failed: 0 }
        );
        acc[key] = summary;
        return acc;
      },

      {}
    );

    setResults(outputData);
  };

  useEffect(() => {
    console.group(data);
    filterResp();
  }, []);

  return (
    <div className="w-full relative min-h-screen container mx-auto flex flex-col justify-between">
      <div className="">
        <div className="w-full h-[90px] px-10  border-b border-purple-1 flex justify-between items-center">
          <LogoIcon width={310} height={72} />
          <LanguageDropdown />
        </div>
        <div className="w-full h-[90px] px-10  flex flex-wrap justify-between items-center bg-cream-white">
          <p className="font-bold text-xl">
            Accessibility report for{" "}
            <span className="text-purple-1 cursor-pointer">
              {" "}
              https://www.ryansoftwares.com/{" "}
            </span>
          </p>
          <p className="text-purple-1 text-lg font-medium flex items-center gap-2 cursor-pointer">
            <PdfIcon width={21} height={26} />
            Download Free Accessibility Report
          </p>
        </div>

        <div className="px-10  bg-cream-white">
          <div className="bg-purple-2 md:h-[60px] w-full rounded-lg flex items-center gap-5 px-4">
            <p className="font-medium text-lg text-white ">
              No accessibility overlay detected, Find out how the All in One
              Accessibility would make positive impact on your website.
            </p>

            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="px-10  pb-20 pt-10 bg-cream-white">
          <div className="flex flex-wrap justify-between">
            <div className="w-[420px] h-[300px] bg-white">
              <img
                className="w-full h-full object-contain"
                src={imgData?.page_image || NoImage}
                alt=""
                srcSet=""
              />
            </div>
            <ChartComp
              width="420px"
              middleElement={Element2}
              showLegend={false}
              data={data2}
              title="Accessibility Score"
              description={description1}
            />
            <ChartComp
              width="420px"
              middleElement={Element}
              data={data2}
              title="WCAG 2.1/2.2"
              description={description2}
            />
          </div>
        </div>

        <div className="py-10 px-10 ">
          <p className="text-center font-bold text-2xl">
            Click on the categories to check the detailed information.
          </p>

          <div className="flex flex-wrap gap-4">
            {Object.entries(results).map(([key, values]) => (
              <ResultTag
                title={key}
                failed={String(values.failed)}
                passed={String(values.passed)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-10  bg-purple-1 text-white bottom-0 left-0 flex justify-between items-center p-5">
        <div className="flex items-center gap-5 ">
          <p className="font-bold ">Privacy Policy</p>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <p className="font-bold ">Terms & Conditions</p>
        </div>

        <span className=" text-sm ">Copyright © Skynettechnologies.com</span>
      </div>
    </div>
  );
};

export default ResultsPage;
