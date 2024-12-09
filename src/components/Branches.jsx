import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Branches = () => {
  const { translate } = useTranslation();
  return (
    <div className="mt-3">
      <div className="mt-4 space-y-4">
        {/* Egypt Branch */}
        <div className="text-sm text-third flex flex-col justify-between items-center w-full rounded-lg">
          <h2 className="text-primary dark:text-secondary text-base font-bold">
            {translate("ContactUsPage.address.EgyptAddress.title")}
          </h2>
          <div className="flex items-center justify-between w-full flex-wrap">
            <div className=" rounded-full text-third flex items-center justify-center shrink-0">
              <FaPhoneAlt />
              <a href="javascript:void(0)" className="text-third text-sm ml-4">
                <strong>0123456789</strong>
              </a>
            </div>
            <div className=" rounded-full text-third flex items-center justify-center shrink-0">
              <FaPhoneAlt />
              <a href="javascript:void(0)" className="text-third text-sm ml-4">
                <strong>0123456789</strong>
              </a>
            </div>
            <a
              href="https://goo.gl/maps/1Mv178qJendeDrrf7"
              target="_blank"
              className="mt-2">
              <img
                src={`/egypt-office.png`}
                alt="Egypt Branch Location"
                className="rounded-lg cursor-pointer w-[80px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] dark:shadow-[0_2px_10px_-3px_rgba(255,255,255,0.3)] "
              />
            </a>
          </div>
        </div>

        {/* UAE Branch */}
        <div className="text-sm text-third flex flex-col justify-between items-center w-full rounded-lg">
          <h2 className="text-primary dark:text-secondary text-base font-bold">
            {translate("ContactUsPage.address.UaeAddress.title")}
          </h2>
          <div className="flex items-center justify-between w-full flex-wrap">
            <div className=" rounded-full text-third flex items-center justify-center shrink-0">
              <FaPhoneAlt />
              <a href="javascript:void(0)" className="text-third text-sm ml-4">
                <strong>0123456789</strong>
              </a>
            </div>
            <div className=" rounded-full text-third flex items-center justify-center shrink-0">
              <FaPhoneAlt />
              <a href="javascript:void(0)" className="text-third text-sm ml-4">
                <strong>0123456789</strong>
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/MfbKPFqt3PctEAcq9"
              target="_blank"
              className="mt-2 ">
              <img
                src={`/egypt-office.png`}
                alt="UAE Branch Location"
                className="rounded-lg cursor-pointer w-[80px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] dark:shadow-[0_2px_10px_-3px_rgba(255,255,255,0.3)] "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
