import { useState } from "react";
import { Button } from "@components/ui/Button";
import Checkbox from "@components/ui/Checkbox/Checkbox";
import { Select } from "@components/ui/Input/Select";
import { selectOptions } from "@constants/formOptions";
import { useFetchDailyTips } from "@services/tips/useFetchDayTips";
import Loader from "@components/Loader";

const DashboardPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Energy");

  // Fetch daily tips based on the selected category
  const {
    data: dailyTip,
    isLoading,
    isError,
  } = useFetchDailyTips(selectedCategory.toLowerCase());

  // Handle category selection
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p className="text-lg text-red-500">Error loading daily tip.</p>;
  }

  return (
    <div className="font-mont">
      {/* Category Selection */}
      <div className="flex justify-center mt-5">
        <div className="w-[150px]">
          <Select
            label="Select a Category"
            formField={true}
            options={selectOptions}
            className="text-sm"
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      {/* Tip Image */}
      <div className="flex justify-center mt-5">
        <img
          className="w-[650px] h-[350px]"
          src={dailyTip?.data?.picture}
          alt={dailyTip?.data?.category}
        />
      </div>

      {/* Tip Text and Checkbox */}
      <div className="flex items-center justify-center mt-10">
        <Checkbox />
        <p className="text-lg w-[700px] text-center">{`"${dailyTip?.data?.tip}"`}</p>
      </div>

      {/* Next Tip Button */}
      <div className="flex justify-center mt-5">
        <Button
          title={"Next tip"}
          withIcon={false}
          variant="contained"
          size="medium"
          className="flex justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
