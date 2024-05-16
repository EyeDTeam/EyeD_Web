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

  return (
    <div
      className='medicine-card'
      style={{
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* edit is the review on the selected medicine */}
      {mode === 'review' ? (
        <>
          <h4>
            {medicine.medicineName} (ID: {medicine.id})
          </h4>
          {medicine.eyeSelection &&
            (medicine.eyeSelection.left ||
              medicine.eyeSelection.right ||
              medicine.eyeSelection.both) && (
              <p>
                Eyes:
                {(medicine.eyeSelection.left && 'Left') ||
                  (medicine.eyeSelection.right && 'Right') ||
                  (medicine.eyeSelection.both && 'Both')}
              </p>
            )}
          {/* <p>Cap Color: {medicine.capColor}</p> */}

          <p>Frequency: {medicine.frequency}</p>
          <p>Instruction: {medicine.specialInstruction}</p>
        </>
      ) : (
        <>
          <h4>{medicine.medicineName}</h4>
          <div className='eye-radio-btn'>
            <label>Eyes:</label>
            <label>
              <input
                type='radio'
                name='left'
                checked={selectEye.left}
                onChange={handleRadioChange}
              />{' '}
              Left
            </label>
            <label>
              <input
                type='radio'
                name='right'
                checked={selectEye.right}
                onChange={handleRadioChange}
              />{' '}
              Right
            </label>
            <label>
              <input
                type='radio'
                name='both'
                checked={selectEye.both}
                onChange={handleRadioChange}
              />{' '}
              Both
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
            <label>Instruction: </label>
            <input
              type='text'
              placeholder='NA'
              value={instruction}
              onChange={handleInstructionChange}
            />
          </div>
        </>
      )}

      {mode === 'add' && (
        <button type='button' onClick={handleSubmit} style={{ backgroundColor: '#29C5F6', color: 'white' }}>
          Add Medicine
        </button>
      )}
    </div>
  );
};

export default MedicineCard;
