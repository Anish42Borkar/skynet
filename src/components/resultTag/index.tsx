import { CrossIcon, TickIcon } from "../../assets/icons";
import styles from "./style.module.css";

type ResultTagProps = {
  title: string;
  passed: string;
  failed: string;
};

const ResultTag = ({ title, failed, passed }: ResultTagProps) => {
  return (
    <div className={`${styles.tag} flex justify-center items-center`}>
      <div className={`${styles.innerTag} border-[0.5px] border-gray-1`}>
        <p
          className={`${styles.title} flex justify-center items-center bg-cream-pink font-extrabold text-xl`}
        >
          {title}
        </p>
        <div
          className={`${styles.resultCont} flex justify-center items-center gap-5 h-[calc(100%-50px)] `}
        >
          <p className={`flex items-center gap-2  text-sm`}>
            <p className="w-[25px] h-[25px] bg-green-success-light flex justify-center items-center rounded-full">
              <TickIcon width={15} height={11} className="fill-green-success" />
            </p>

            <span>{String(passed)} Passed</span>
          </p>
          <p className={`flex items-center gap-2 text-sm`}>
            <p className="w-[25px] h-[25px] bg-red-failed-light flex justify-center items-center rounded-full">
              <CrossIcon width={11} height={11} className="fill-red-failed" />
            </p>
            <span>{String(failed)} Failed</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultTag;
