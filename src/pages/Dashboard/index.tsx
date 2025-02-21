import { useState, useEffect } from "react";
import Checkbox from "@components/ui/Checkbox/Checkbox";
import { Select } from "@components/ui/Input/Select";
import { selectOptions } from "@constants/formOptions";
import { useFetchDailyTips } from "@services/tips/useFetchDayTips";
import Loader from "@components/Loader";
import { useCheckTips } from "@services/tips/useCheckTips";
import { getUserDailyTips, useDailyTips } from "@contexts/DailyTipsContext";

const DashboardPage = () => {
  const { state } = useDailyTips();
  const [selectedCategory, setSelectedCategory] = useState<string>("Energy");

  // Fetch daily tips based on the selected category
  const { isLoading, isError } = useFetchDailyTips(
    selectedCategory.toLowerCase()
  );
  const userDailyTips = getUserDailyTips(state.dailyTips);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (userDailyTips) {
      setChecked(userDailyTips.isChecked);
    }
  }, [userDailyTips]);

  // Set a tip as checked
  const { mutate: checkTip } = useCheckTips();
  const handleCheckboxChange = () => {
    if (!checked) {
      setChecked((prev) => !prev);
      checkTip(userDailyTips?.id, {
        onError: () => {
          // Revert local state if the mutation fails
          setChecked((prev) => !prev);
        },
      });
    }
  };

  // Handle category selection
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <p className="text-lg text-red-500">Error loading daily tip.</p>;
  }

  return (
    <div className="p-4 font-mont md:p-6">
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
          src={userDailyTips?.picture}
          alt={userDailyTips?.category}
        />
      </div>

      {/* Tip Text and Checkbox */}
      <div className="flex flex-col items-center justify-center mt-10 lg:flex-row">
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          customLabelColor="gray"
        />
        <p className="text-lg mt-5 lg:mt-0 lg:w-[700px] text-center">{`"${userDailyTips?.tip}"`}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
