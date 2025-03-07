import React, { useState } from "react";
import MedicineCard from "./MedicineCard";
import { MedicineCardProps } from "../../hooks/useMedicineState";
import "../MedicineCatalog/MedicineList.css";
import { categories } from "../../Data/categories"; // Ensure this is the correct import path and structure
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

interface MedicineListProps {
  onSelectMedicine: (medicine: MedicineCardProps) => void;
}

const MedicineList: React.FC<MedicineListProps> = ({ onSelectMedicine }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleSelectMedicine = (medicine: MedicineCardProps) => {
    console.log("Selected Medicine:", medicine);
    onSelectMedicine(medicine);
  };

  return (
    <div className="medicine-list">
      {categories.map((category) => (
        <div key={category.category}>
          <button className="category-header inline-flex items-center"
            onClick={() => toggleCategory(category.category)}
          >
            {category.category}{" "}
            {expandedCategory === category.category ? <ChevronDownIcon/> : <ChevronUpIcon />}
          </button>
          {expandedCategory === category.category && (
            <div className="medicines">
              {category.medicines.map((medicine) => (
                <MedicineCard
                  key={medicine.uniqueKey}
                  medicine={medicine}
                  onSelect={handleSelectMedicine}
                  mode="add" // Set mode to "add" as this is from the selection list
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
