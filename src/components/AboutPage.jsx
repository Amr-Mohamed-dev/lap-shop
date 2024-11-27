import { useTranslation } from "../hooks/useTranslation";

const AboutPage = () => {
  const { translate } = useTranslation();

  return (
    <section className="pt-24 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {translate("AboutPage.title.text")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translate("AboutPage.description.text")}
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {translate("AboutPage.mission.title.text")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {translate("AboutPage.mission.text")}
          </p>
        </div>

        {/* Branches Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {translate("AboutPage.branches.title.text")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Egypt Branch */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <img
                src="/images/egypt-branch.jpg"
                alt="Egypt Branch"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {translate("AboutPage.branches.locations.egypt.text")}
              </h3>
            </div>
            {/* UAE Branch */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <img
                src="/images/uae-branch.jpg"
                alt="UAE Branch"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {translate("AboutPage.branches.locations.uae.text")}
              </h3>
            </div>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {translate("AboutPage.title.text")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="/images/laptops.jpg"
              alt="Laptops"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/mobiles.jpg"
              alt="Mobile Phones"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/images/headphones.jpg"
              alt="Headphones"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
