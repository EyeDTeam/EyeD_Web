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
  const [frequencyTemplate, setFrequencyTemplate] = useState<string>(medicine.frequency);
  const [editFreq, setEditFreq] = useState<string>(medicine.frequency);
  const [frequencySelections, setFrequencySelections] = useState<{
    times: string;
    hours: string;
    days: string;
    weeks: string;
  }>({
    times: "1 time",
    hours: "1 hour",
    days: "1 day",
    weeks: "1 week",
  });
  const [instruction, setInstruction] = useState<string>(
    medicine.specialInstruction
  );
  const [isAddEnabled, setIsAddEnabled] = useState(false);

  const updateFrequencyFromSelections = (newSelections: { [key: string]: string }) => {
    const updated = frequencyTemplate.replace(/\{(times|hours|days|weeks)}(\s*(times|hours|days|weeks))?/g, (match, token) => {
      return newSelections[token] || match;
    });
    setEditFreq(updated);
    if (mode !== 'add' && onUpdate && updated !== medicine.frequency) {
      onUpdate({ ...medicine, frequency: updated });
    }
  };

  useEffect(() => {
    setEyeSelection(medicine.eyeSelection);
    setFrequencyTemplate(medicine.frequency);
    setFrequencySelections({
      times: "1 time",
      hours: "1 hour",
      days: "1 day",
      weeks: "1 week",
    });
    updateFrequencyFromSelections({
      times: "1 time",
      hours: "1 hour",
      days: "1 day",
      weeks: "1 week",
    });
    setInstruction(medicine.specialInstruction === "N/A" ? "" : medicine.specialInstruction);
  }, [medicine]);

  useEffect(() => {
    const validEyeSelection =
      selectEye.left || selectEye.right || selectEye.both;
    const validFrequency = !(editFreq.includes("{") || editFreq.includes("}"));
    setIsAddEnabled(validEyeSelection && validFrequency);
  }, [selectEye, editFreq]);

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

  const getEyeSelectionText = (eyeSelection: EyeSelection) => {
    if (eyeSelection.both) return 'Both';
    if (eyeSelection.left) return 'Left';
    if (eyeSelection.right) return 'Right';
    return 'None';
  };

  const handleInstructionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInstruction(event.target.value);
    if (onUpdate) {
      onUpdate({ ...medicine, specialInstruction: event.target.value });
    }
  };

  const handleDropdownChange = (
    tokenName: "times" | "hours" | "days" | "weeks",
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSelections = { ...frequencySelections, [tokenName]: event.target.value };
    setFrequencySelections(newSelections);
    updateFrequencyFromSelections(newSelections);
  };

  const renderFrequencyTemplate = () => {
    const parseParts = (templateStr: string) => {
      const placeholders = ['{times}', '{hours}', '{days}', '{weeks}'];
      const parts: string[] = [];
      let current = '';
      let i = 0;

      while (i < templateStr.length) {
        let matched = false;
        for (const p of placeholders) {
          if (templateStr.startsWith(p, i)) {
            if (current) parts.push(current);
            current = '';
            parts.push(p);
            i += p.length;
            matched = true;
            break;
          }
        }
        if (!matched) {
          current += templateStr[i];
          i++;
        }
      }

      if (current) parts.push(current);
      return parts;
    };

    const parts = parseParts(frequencyTemplate);
    return parts.map((part, index) => {
      const tokenMatch = part.match(/^\{(times|hours|days|weeks)}$/);
      if (tokenMatch) {
        const tokenName = tokenMatch[1] as "times" | "hours" | "days" | "weeks";
        let options: string[] = [];
        switch (tokenName) {
          case 'times':
            options = Array.from({ length: 6 }, (_, i) =>
              i === 0 ? "1 time" : `${i + 1} times`
            );
            break;
          case 'hours':
            options = Array.from({ length: 12 }, (_, i) =>
              i === 0 ? "1 hour" : `${i + 1} hours`
            );
            break;
          case 'days':
            options = Array.from({ length: 6 }, (_, i) =>
              i === 0 ? "1 day" : `${i + 1} days`
            );
            break;
          case 'weeks':
            options = Array.from({ length: 4 }, (_, i) =>
              i === 0 ? "1 week" : `${i + 1} weeks`
            );
            break;
          default:
            break;
        }
        return (
          <select
            key={index}
            value={frequencySelections[tokenName]}
            onChange={(e) => handleDropdownChange(tokenName, e)}
          >
            {options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
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
      return;
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
      {mode === 'review' ? (
        <>
          <h4 className='selected-med-card-name'>{medicine.medicineName}</h4>
          {medicine.eyeSelection && (
            <p>
              <strong>Eyes: </strong>
              {getEyeSelectionText(medicine.eyeSelection)}
            </p>
          )}
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
              <label className="mr-2 inline-flex items-center cursor-pointer hover:font-semibold">
                <input
                    type='radio'
                    name='left'
                    checked={selectEye.left}
                    onChange={handleRadioChange}
                />
                Left
              </label>
              <label className="mr-2 inline-flex items-center cursor-pointer hover:font-semibold">
                <input
                    type='radio'
                    name='right'
                    checked={selectEye.right}
                    onChange={handleRadioChange}
                />
                Right
              </label>
              <label className="inline-flex items-center cursor-pointer hover:font-semibold">
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
              {renderFrequencyTemplate()}
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
          disabled={!isAddEnabled}
          style={{
            backgroundColor: isAddEnabled ? '#0e99c2' : '#cccccc',
            color: 'white',
          }}
        >
          Add Medicine
        </button>
      )}
    </div>
  );
};

export default MedicineCard;
