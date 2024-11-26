import { useEffect, useState } from "react";
import { LogoIcon, WavesIcon } from "../../assets/icons";
import Dog from "../../assets/dog.png";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { ImageRespData, ResponseData } from "../../types";
import useResponseDataStore from "../../store/useResponseDataStore";
import useSiteImageDetailsStore from "../../store/useSiteImageDetailsStore";

// Define a type for the state being passed via `useNavigate`
interface LocationState {
  url: string;
}

let timer: number;

const LoadingPage = () => {
  const [status, setStatus] = useState(0);
  // const [progress, setProgress] = useState<number>(0);
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state as LocationState | null; // Explicitly type `state`

  const { url } = state || {};
  const { setData } = useResponseDataStore();
  const { setImgData } = useSiteImageDetailsStore();

  const calculateFormDataSize = (formData: FormData) => {
    let totalSize = 0;
    formData.forEach((value, key) => {
      // Calculate the size of the key and value
      totalSize += key.length + value.toString().length;
      if (value instanceof Blob) {
        totalSize += value.size; // Size of the Blob (e.g., file)
      }
    });
    return totalSize;
  };

  const fetchData = async () => {
    // setProgress(0); // Reset progress before starting
    let siteData = false,
      imageData = false;

    try {
      const formData = new FormData();
      formData.append("url", url!);
      formData.append("is_first", "1");
      formData.append("lang_code", "en");

      const dataSize = calculateFormDataSize(formData); // Calculate the size of FormData

      await axios
        .post<ResponseData>(
          "https://freeaccessibilitychecker.skynettechnologies.com/api/check-page-compliance-new",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Required for FormData
              "Content-Length": dataSize.toString(), // Manually add the Content-Length header
            },
          }
        )
        .then((resp) => {
          setData(resp.data);
          siteData = true;
        });

      const formImgData = new FormData();
      formImgData.append("url", url!);
      formImgData.append("is_first", "0");
      formImgData.append("lang_code", "en");
      await axios
        .post<ImageRespData>(
          "https://freeaccessibilitychecker.skynettechnologies.com/api/check-page-compliance-new",
          formImgData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Required for FormData
              "Content-Length": dataSize.toString(), // Manually add the Content-Length header
            },
          }
        )
        .then((resp) => {
          setImgData(resp.data);
          imageData = true;
        });

      if (siteData && imageData) {
        navigate("/results", { replace: true });
      }

      // console.log("API Response:", response.data); // Log API response
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  useEffect(() => {
    fetchData();
    timer = setInterval(() => {
      setStatus((prev) => (prev += 5));
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log(status);
    if (status === 100) {
      clearInterval(timer);
    }
  }, [status]);

  return (
    <div className="">
      <div className="flex flex-col items-center mt-20">
        <LogoIcon width={510} height={72} />

        <p className="mt-32 font-medium text-2xl">
          We may take a few minutes to analyze web page for the accessibility
          issues
        </p>

        <div className="w-[75.625rem] h-[20px] mt-5 rounded-full overflow-hidden">
          <div
            className="bg-purple-1 h-full"
            style={{
              width: status + "%",
              //   width: "100%",
            }}
          ></div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full  ">
        <div className="w-[317px] h-auto absolute bottom-5 left-1/2 -translate-x-1/2 ">
          <img src={Dog} alt="" className="w-full h-full object-contain" />
        </div>
        <WavesIcon className="w-full" />
      </div>
    </div>
  );
};

export default LoadingPage;
