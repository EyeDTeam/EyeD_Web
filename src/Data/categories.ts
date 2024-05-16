import { MedicineCardProps } from "../hooks/useMedicineState";

export interface CategoryMedicines {
  category: string;
  medicines: MedicineCardProps[];
}

export const categories: CategoryMedicines[] = [
  {
    category: "Glaucoma",
    medicines: [
      {
        id: 1,
        uniqueKey: "1",
        medicineName: "Xalatan (latanoprost)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "teal",
        specialInstruction: "",
      },
      {
        id: 2,
        uniqueKey: "2",
        medicineName: "Timolol",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "yellow",
        specialInstruction: "",
      },
      {
        id: 3,
        uniqueKey: "3",
        medicineName: "Brimonidine",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "Purple",
        specialInstruction: "",
      },
      {
        id: 4,
        uniqueKey: "4",
        medicineName: "Dorzolamide/Timolol (Cospot)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "Dark BLue",
        specialInstruction: "",
      },
    ],
  },
  {
    category: "Steroids/Cycloplegics",
    medicines: [
      {
        id: 5,
        uniqueKey: "5",
        medicineName: "Timolol",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "red",
        specialInstruction: "",
      },
    ],
  },
  {
    category: "NSAIDs/Antibiotics",
    medicines: [
      {
        id: 6,
        uniqueKey: "6",
        medicineName: "Timolol",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "red",
        specialInstruction: "",
      },
    ],
  },
  {
    category: "Lubricants/Ointments",
    medicines: [
      {
        id: 7,
        uniqueKey: "7",
        medicineName: "Timolol",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "red",
        specialInstruction: "",
      },
    ],
  },
];
