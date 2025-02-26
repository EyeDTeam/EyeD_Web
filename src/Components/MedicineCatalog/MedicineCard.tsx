import React, { FC, useState, useEffect } from 'react';
import './MedicineCard.css';
import {
  ExtendedMedicineCardProps,
  EyeSelection,
} from '../../hooks/useMedicineState';

const MedicineCard: FC<ExtendedMedicineCardProps> = ({
  medicine,
  onSelect,
  onUpdate,
  mode,
}) => {
  const [selectEye, setEyeSelection] = useState<EyeSelection>(
    medicine.eyeSelection
  );
  const [editFreq, setEditFreq] = useState<string>(medicine.frequency);
  // if the special instruction is N/A, initialize as empty so that the placeholder shows
  const [instruction, setInstruction] = useState<string>(
    medicine.specialInstruction
  );

  useEffect(() => {
    setEyeSelection(medicine.eyeSelection);
    setEditFreq(medicine.frequency);
    setInstruction(medicine.specialInstruction === "N/A" ? "" : medicine.specialInstruction);
  }, [medicine]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelection: EyeSelection = {
      left: event.target.name === 'left',
      right: event.target.name === 'right',
      both: event.target.name === 'both',
    };
    setEyeSelection(newSelection);
    if (onUpdate) {
      onUpdate({ ...medicine, eyeSelection: newSelection });
    }
  };

  // Helper function to format eye selection text
  const getEyeSelectionText = (eyeSelection: EyeSelection) => {
    if (eyeSelection.both) return 'Both';
    if (eyeSelection.left) return 'Left';
    if (eyeSelection.right) return 'Right';
    return 'None';
  };

  const handleFrequencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditFreq(event.target.value);
    if (onUpdate) {
      onUpdate({ ...medicine, frequency: event.target.value });
    }
  };

  const handleInstructionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInstruction(event.target.value);
    if (onUpdate) {
      onUpdate({ ...medicine, specialInstruction: event.target.value });
    }
  };

  const handleSubmit = () => {
    if (!selectEye.left && !selectEye.right && !selectEye.both) {
      alert(
        'Please select an eye (Left, Right, or Both) before adding the medicine.'
      );
      return;
    }
    if (editFreq.includes('X')) {
      alert('Please specify how frequency the medicine need to be used.');
      return; // Stop the function if no selection is made
    }
    if (mode === 'add') {
      onSelect({
        ...medicine,
        eyeSelection: selectEye,
        frequency: editFreq,
        specialInstruction: instruction === "" ? "N/A" : instruction,
        uniqueKey: medicine.uniqueKey || '',
      });
    } else {
      onUpdate &&
        onUpdate({
          ...medicine,
          eyeSelection: selectEye,
          frequency: editFreq,
          specialInstruction: instruction,
        });
    }
  };
  const renderTaperSchedule = () => {
    return instruction === "" ? "N/A" : instruction
      .split('\n')
      .map((line, index) => <div key={index}>{line}</div>);
  };
  return (
    <div className='medicine-card'>
      {/* edit is the review on the selected medicine */}
      {mode === 'review' ? (
        <>
          <h4 className='selected-med-card-name'>{medicine.medicineName}</h4>
          {medicine.eyeSelection && (
            <p>
              <strong>Eyes: </strong>
              {getEyeSelectionText(medicine.eyeSelection)}
            </p>
          )}
          {/* <p>Cap Color: {medicine.capColor}</p> */}

          <p>
            <strong>Frequency: </strong>
            {medicine.frequency}
          </p>
          <div>
            <strong>Special Instruction: </strong>
            {renderTaperSchedule()}
          </div>
        </>
      ) : (
        <>
          <h4 className='medicine-med-card-name'>{medicine.medicineName}</h4>
          <hr className="border-0 border-t border-gray-300 my-[10px] mb-2" />
          <div className="grid grid-cols-[150px_1fr] items-center mb-[10px]">
            <div className="text-left font-bold">
              <label>Eyes:</label>
            </div>
            <div className="justify-self-start text-left">
              <label className="mr-[15px] inline-flex items-center cursor-pointer hover:text-[#7b7b7b]">
                <input
                    type='radio'
                    name='left'
                    checked={selectEye.left}
                    onChange={handleRadioChange}
                />
                Left
              </label>
              <label className="mr-[15px] inline-flex items-center cursor-pointer hover:text-[#7b7b7b]">
                <input
                    type='radio'
                    name='right'
                    checked={selectEye.right}
                    onChange={handleRadioChange}
                />
                Right
              </label>
              <label className="mr-[15px] inline-flex items-center cursor-pointer hover:text-[#7b7b7b]">
                <input
                    type='radio'
                    name='both'
                    checked={selectEye.both}
                    onChange={handleRadioChange}
                />
                Both
              </label>
            </div>
          </div>
          <hr className="border-0 border-t border-gray-300 my-[10px]" />
          <div className="grid grid-cols-[150px_1fr] items-center mb-[10px]">
            <div className="text-left font-bold">
              <label>Frequency:</label>
            </div>
            <div className="text-left">
              <input
                  type='text'
                  value={editFreq}
                  onChange={handleFrequencyChange}
                  className="w-full box-border"
              />
            </div>
          </div>
          <hr className="border-0 border-t border-gray-300 my-[10px]" />
          <div className="grid grid-cols-[150px_1fr] items-center mb-[10px]">
            <div className="text-left font-bold">
              <label>Special Instruction:</label>
            </div>
            <div className="text-left">
              <input
                  type='text'
                  value={instruction}
                  placeholder="N/A"
                  onChange={handleInstructionChange}
                  className="w-full box-border"
              />
            </div>
          </div>
        </>
        )}

        {mode === 'add' && (
            <button
                type='button'
                onClick={handleSubmit}
                style={{ backgroundColor: '#29C5F6', color: 'white' }}
            >
              Add Medicine
            </button>
        )}
      </div>
  );
};

export default MedicineCard;