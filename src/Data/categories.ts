import { MedicineCardProps } from "../hooks/useMedicineState";

export interface CategoryMedicines {
  category: string;
  medicines: MedicineCardProps[];
}

/*

  Format for frequency string template
  ---------------------------------------
  In the default frequency string, you may include any static text and the following tokens in curly braces:

  {times} - This will be replaced with a dropdown allowing selection from "1 time", "2 times", …, "10 times".
  {hours} - This will be replaced with a dropdown allowing selection from "1 hour", "2 hours", …, "12 hours".
  {days}  - This will be replaced with a dropdown allowing selection from "1 day", "2 days", …, "6 days".
  {weeks} - This will be replaced with a dropdown allowing selection from "1 week", "2 weeks", "3 weeks", "4 weeks".

Any other text is rendered as-is.

 */


export const categories: CategoryMedicines[] = [
  {
    category: "Glaucoma",
    medicines: [
      {
        id: 1,
        uniqueKey: "1",
        medicineName: "Timolol",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "",
        specialInstruction: "N/A",
      },
      {
        id: 2,
        uniqueKey: "2",
        medicineName: "Dorzolamide/Timolol (Cosopt)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "",
        specialInstruction: "N/A",
      },
      {
        id: 3,
        uniqueKey: "3",
        medicineName: "Latanoprost",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "",
        specialInstruction: "N/A",
      },
      {
        id: 4,
        uniqueKey: "4",
        medicineName: "Brimonidine/Timolol (Combigan)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "",
        specialInstruction: "N/A",
      },
      {
        id: 5,
        uniqueKey: "5",
        medicineName: "Brimonidine(Alphagan)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "",
        specialInstruction: "N/A",
      },
      {
        id: 6,
        uniqueKey: "6",
        medicineName: "Dorzolamide (Trusopt), Brinzolamide (Azopt)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "",
        specialInstruction: "N/A",
      },
    ],
  },
  {
    category: "Steroids/Cycloplegics",
    medicines: [
      {
        id: 7,
        uniqueKey: "7",
        medicineName: "Prednisolone (Pred Forte)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Every {hours} ({times}/Day)",
        capColor: "N/A",
        specialInstruction:"Taper Schedule: \nX/day for 1 week (_/_/_),\nX/day for 1 week (_/_/_),\nX/day for 1 week (_/_/_),\nX/day for 1 week (_/_/_),\nStop(Date:_/_/_),\nContinue: X/day until next visit",
      },
      {
        id: 8,
        uniqueKey: "8",
        medicineName: "Atropine",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "N/A",
        specialInstruction:"",
      },
      {
        id: 9,
        uniqueKey: "9",
        medicineName: "Cyclopentolate",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "N/A",
        specialInstruction:"",
      },
    ],
  },
  {
    category: "NSAIDs/Antibiotics",
    medicines: [
      {
        id: 10,
        uniqueKey: "10",
        medicineName: "Ketorolac",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "N/A",
        specialInstruction: "Taper Schedule: \nX/day for 1 week (_/_/_),\nX/day for 1 week (_/_/_),\nX/day for 1 week (_/_/_),\nX/day for 1 week (_/_/_),\nStop(Date:_/_/_),\nContinue: X/day until next visit",
      },
      {
        id: 11,
        uniqueKey: "10",
        medicineName: "Ofloxacin",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "N/A",
        specialInstruction: "N/A",
      },
      {
        id: 12,
        uniqueKey: "12",
        medicineName: "Moxifloxacin (Vigamox)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "N/A",
        specialInstruction: "N/A",
      },
    ],
  },
  {
    category: "Lubricants/Ointments",
    medicines: [
      {
        id: 13,
        uniqueKey: "13",
        medicineName: "Preservative Free Artificial Tears (Refresh)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Every {hours} ({times}/Day)",
        capColor: "N/A",
        specialInstruction: "N/A",
      },
      {
        id: 14,
        uniqueKey: "14",
        medicineName: "Preservative Free Artificial Tears (Refresh)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Every {hours} ({times}/Day)",
        capColor: "N/A",
        specialInstruction: "N/A",
      },
      {
        id: 15,
        uniqueKey: "15",
        medicineName: "Lubricating Ointment",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day Before Bed",
        capColor: "N/A",
        specialInstruction: "N/A",
      },
    ],
  },
];
