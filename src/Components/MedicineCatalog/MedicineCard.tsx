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
  const [instruction, setInstruction] = useState<string>(
    medicine.specialInstruction
  );

  useEffect(() => {
    setEyeSelection(medicine.eyeSelection);
    setEditFreq(medicine.frequency);
    setInstruction(medicine.specialInstruction);
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
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInstruction(event.target.value);
    if (onUpdate) {
      onUpdate({ ...medicine, specialInstruction: event.target.value });
    }
  };

  const handleSubmit = () => {
    if (mode === 'add') {
      onSelect({
        ...medicine,
        eyeSelection: selectEye,
        frequency: editFreq,
        specialInstruction: instruction,
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
    return instruction.split('\n').map((line, index) => (
      <div key={index}>{line}</div>
    ));
  };
  return (
    <div className='medicine-card'>
      {/* edit is the review on the selected medicine */}
      {mode === 'review' ? (
        <>
          <h4 className='selected-med-card-name'>{medicine.medicineName}</h4>
          {medicine.eyeSelection && (
            <p><strong>Eyes: </strong>{getEyeSelectionText(medicine.eyeSelection)}</p>
          )}
          {/* <p>Cap Color: {medicine.capColor}</p> */}

          <p><strong>Frequency: </strong>{medicine.frequency}</p>
          <div>
            <strong>Special Instruction:</strong>
            {renderTaperSchedule()}
          </div>
        </>
      ) : (
        <>
          <h4 className='medicine-med-card-name'>{medicine.medicineName}</h4>
          <div className='eye-radio-btn'>
            <label>Eyes: </label>
            <label>
              Left
              <input
                type='radio'
                name='left'
                checked={selectEye.left}
                onChange={handleRadioChange}
              />{' '}
            </label>
            <label>
              Right
              <input
                type='radio'
                name='right'
                checked={selectEye.right}
                onChange={handleRadioChange}
              />{' '}
            </label>
            <label>
              Both
              <input
                type='radio'
                name='both'
                checked={selectEye.both}
                onChange={handleRadioChange}
              />{' '}
            </label>
          </div>
          <div className='freq-radio-btn'>
            <label>Frequency: </label>
            <input
              type='text'
              value={editFreq}
              onChange={handleFrequencyChange}
            />
          </div>
          <div className='edit-instruction'>
            <label>Special Instruction: </label>
            <textarea className='instruction-text-area'
              value={instruction}
              onChange={handleInstructionChange}
            />
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
