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
        id: 5,
        uniqueKey: "5",
        medicineName: "Brimonidine (Alphagan)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "purple",
        specialInstruction: "N/A",
      },
      {
        id: 4,
        uniqueKey: "4",
        medicineName: "Brimonidine/Timolol (Combigan)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Purple",
        specialInstruction: "N/A",
      },
      {
        id: 27,
        uniqueKey: "27",
        medicineName: "Combigan PF",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Blue",
        specialInstruction: "N/A",
      },
      {
        id: 22,
        uniqueKey: "22",
        medicineName: "Brinzolamide/Brimonidine (Simbrinza)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Green/White",
        specialInstruction: "N/A",
      },
      {
        id: 6,
        uniqueKey: "6",
        medicineName: "Dorzolamide (Trusopt), Brinzolamide (Azopt)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Orange",
        specialInstruction: "N/A",
      },
      {
        id: 2,
        uniqueKey: "2",
        medicineName: "Dorzolamide/Timolol (Cosopt)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Orange",
        specialInstruction: "N/A",
      },
      {
        id: 28,
        uniqueKey: "28",
        medicineName: "Cosopt PF",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Blue",
        specialInstruction: "N/A",
      },
      {
        id: 16,
        uniqueKey: "16",
        medicineName: "Latanoprost/Xalatan/Iyuzeh/Lumigan/Travatan/Zioptan",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "Teal",
        specialInstruction: "N/A",
      },
      {
        id: 29,
        uniqueKey: "29",
        medicineName: "Netarsudil (Rhopressa)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "White/Teal",
        specialInstruction: "N/A",
      },
      {
        id: 30,
        uniqueKey: "30",
        medicineName: "Netarsudil/Latanoprost (Rocklatan)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "White/Teal",
        specialInstruction: "N/A",
      },
      {
        id: 1,
        uniqueKey: "1",
        medicineName: "Timolol/Timoptic/Betimol/Timoptic Ocudose (PF)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Yellow",
        specialInstruction: "N/A",
      },
      {
        id: 31,
        uniqueKey: "31",
        medicineName: "Latanoprostene Bunod (Vyzulta)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Once a day before bedtime",
        capColor: "White/Teal",
        specialInstruction: "N/A",
      },
    ],
  },
  {
    category: "Oral Glaucoma Medications",
    medicines: [
      {
        id: 25,
        uniqueKey: "25",
        medicineName: "Acetazolamide (Diamox)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "N/A",
        specialInstruction: "Oral medication - Available in 250mg or 500mg, ER/SR or IR formulations",
      },
      {
        id: 26,
        uniqueKey: "26",
        medicineName: "Methazolamide (Neptazane)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "N/A",
        specialInstruction: "Oral medication - Available in 25mg or 50mg",
      },
    ],
  },
  {
    category: "Steroids/Cycloplegics",
    medicines: [
      {
        id: 8,
        uniqueKey: "8",
        medicineName: "Atropine",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Red",
        specialInstruction: "",
      },
      {
        id: 9,
        uniqueKey: "9",
        medicineName: "Cyclopentolate (Cyclogyl)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Red",
        specialInstruction: "",
      },
      {
        id: 17,
        uniqueKey: "17",
        medicineName: "Difluprednate (Durezol)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "White",
        specialInstruction: "Taper as directed",
      },
      {
        id: 10,
        uniqueKey: "10",
        medicineName: "Loteprednol (Lotemax)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Pink/Purple",
        specialInstruction: "Taper as directed",
      },
      {
        id: 7,
        uniqueKey: "7",
        medicineName: "Prednisolone (Pred Forte)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Every {hours} ({times}/Day)",
        capColor: "White",
        specialInstruction: "Taper Schedule: \nX/day for 1 week (_/_/_),\nX/day for 1 week (_/_/_),\nX/day for 1 week (_/_/_),\nX/day for 1 week (_/_/_),\nStop(Date:_/_/_),\nContinue: X/day until next visit",
      },
    ],
  },
  {
    category: "NSAIDs/Antibiotics",
    medicines: [
      {
        id: 19,
        uniqueKey: "19",
        medicineName: "Ketorolac (Acular)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Gray/White",
        specialInstruction: "",
      },
      {
        id: 12,
        uniqueKey: "12",
        medicineName: "Moxifloxacin (Vigamox)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Yellow",
        specialInstruction: "N/A",
      },
      {
        id: 20,
        uniqueKey: "20",
        medicineName: "Nepafenac (Ilevro 0.3%, Nevanac 0.1%)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Gray/White",
        specialInstruction: "",
      },
      {
        id: 11,
        uniqueKey: "11",
        medicineName: "Ofloxacin (Ocuflox)",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "{times}/Day",
        capColor: "Yellow",
        specialInstruction: "N/A",
      },
    ],
  },
  {
    category: "Lubricants/Ointments",
    medicines: [
      {
        id: 29,
        uniqueKey: "29",
        medicineName: "Artificial Tears",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Every {hours} OR {times}/Day",
        capColor: "Various",
        specialInstruction: "Use as needed for comfort",
      },
      {
        id: 15,
        uniqueKey: "15",
        medicineName: "Lubricating Ointment",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "At bedtime OR {times}/Day",
        capColor: "N/A",
        specialInstruction: "May cause temporary blurred vision",
      },
      {
        id: 13,
        uniqueKey: "13",
        medicineName: "Preservative Free Artificial Tears",
        eyeSelection: { left: false, right: false, both: false },
        frequency: "Every {hours} OR {times}/Day",
        capColor: "N/A",
        specialInstruction: "N/A",
      },
    ],
  },
];