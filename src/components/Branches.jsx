import { useTranslation } from "../hooks/useTranslation";

const Branches = () => {
  const { translate } = useTranslation();
  return (
    <div className="mt-5">
      <div className="mt-4 space-y-4">
        {/* Egypt Branch */}
        <div className="text-sm text-third flex justify-between items-center w-full rounded-lg">
          <h2 className="text-primary dark:text-secondary text-base font-bold">
            {translate("ContactUsPage.address.EgyptAddress.title")}
          </h2>
          <div className="flex flex-col justify-center items-center ">
            <strong>{translate("ContactUsPage.EgyptBranch")}</strong>
            <span>{translate("ContactUsPage.EgyptAddress")}</span>
          </div>
          <a
            href="https://goo.gl/maps/1Mv178qJendeDrrf7"
            target="_blank"
            className="mt-2">
            <img
              src={`/egypt-office.png`}
              alt="Egypt Branch Location"
              className="rounded-lg cursor-pointer w-[100px] "
            />
          </a>
        </div>

        {/* UAE Branch */}
        <div className="text-sm text-third flex justify-between align-center w-full rounded-lg">
          <h2 className="text-primary dark:text-secondary text-base font-bold">
            {translate("ContactUsPage.address.UaeAddress.title")}
          </h2>
          <div className="flex flex-col justify-center items-center">
            <strong>{translate("ContactUsPage.UAEBranch")}</strong>
            <span>{translate("ContactUsPage.UAEAddress")}</span>
          </div>
          <a
            href="https://maps.app.goo.gl/MfbKPFqt3PctEAcq9"
            target="_blank"
            className="mt-2">
            <img
              src={`/egypt-office.png`}
              alt="UAE Branch Location"
              className="rounded-lg cursor-pointer w-[100px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Branches;
