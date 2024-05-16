import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Definition of properties for each medicine card
export interface MedicineCardProps {
  id: number;
  uniqueKey: string;
  medicineName: string;
  eyeSelection: EyeSelection;
  frequency: string;
  capColor: string;
  specialInstruction: string;
}

// Extended properties including handlers for selection and update
export interface ExtendedMedicineCardProps {
  medicine: MedicineCardProps; // Represents the full medicine card data
  onSelect: (medicine: MedicineCardProps) => void; // Handler for selecting or adding medicine
  onUpdate?: (medicine: MedicineCardProps) => void; // Optional handler for updates
  mode: 'add' | 'review'; // Mode to specify add or edit actions
}

// Type for eye selection options
export interface EyeSelection {
  left: boolean;
  right: boolean;
  both: boolean;
}

// Type to specify potential changes in a medicine card
export type MedicineChanges = {
  eyeSelection?: EyeSelection;
  frequency?: string;
  specialInstruction?: string;
};

// Custom hook to manage medicine states
export const useMedicineState = () => {
  const [selectedMedicines, setSelectedMedicines] = useState<
    MedicineCardProps[]
  >([]); //Centralized selected medicines so the below functions can modify it

  // Function to handle adding new medicine
  const handleAddMedicine = (medicine: MedicineCardProps) => {
    const newMedicine = { ...medicine, uniqueKey: uuidv4() };
    console.log('new Medicine unique key: ', newMedicine);
    setSelectedMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
  };

  // Function to update an existing medicine
  const handleUpdateMedicine = (
    uniqueKey: string,
    changes: MedicineChanges
  ) => {
    console.log('medicine id: ', uniqueKey);
    setSelectedMedicines((prevMedicines) =>
      prevMedicines.map((medicine) =>
        medicine.uniqueKey === uniqueKey
          ? { ...medicine, ...changes }
          : medicine
      )
    );
  };

  // Function to delete a medicine
  const handleDeleteMedicine = (uniqueKey: string) => {
    setSelectedMedicines((prevMedicines) =>
      prevMedicines.filter((medicine) => medicine.uniqueKey !== uniqueKey)
    );
  };

  return {
    selectedMedicines,
    handleAddMedicine,
    handleUpdateMedicine,
    handleDeleteMedicine,
  };
};
