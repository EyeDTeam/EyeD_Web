import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { MedicineCardProps } from '../../hooks/useMedicineState';
import "./EditDialog.css"
interface EditDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  medicine?: MedicineCardProps | null; // Allow null explicitly
  onUpdateMedicine: (updatedMedicine: MedicineCardProps) => void;
  onDelete: () => void;
}

const EditDialog: React.FC<EditDialogProps> = ({
  isOpen,
  setIsOpen,
  medicine,
  onUpdateMedicine,
  onDelete,
}) => {
  const [editedMedicine, setEditedMedicine] = useState<MedicineCardProps>(
    medicine || {
      id: 0,
      uniqueKey: '',
      medicineName: '',
      eyeSelection: { left: false, right: false, both: false },
      frequency: '',
      capColor: '',
      specialInstruction: '',
    }
  );

  useEffect(() => {
    setEditedMedicine(
      medicine || {
        id: 0,
        uniqueKey: '',
        medicineName: '',
        eyeSelection: { left: false, right: false, both: false },
        frequency: '',
        capColor: '',
        specialInstruction: '',
      }
    );
  }, [medicine]);

  const handleSave = () => {
    onUpdateMedicine(editedMedicine);
    setIsOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedMedicine((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEyeSelectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value as keyof typeof editedMedicine.eyeSelection;
    setEditedMedicine((prev) => ({
      ...prev,
      eyeSelection: {
        left: value === 'left',
        right: value === 'right',
        both: value === 'both',
      },
    }));
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='relative z-50'
    >
      <div className='fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75'>
        <DialogPanel className='w-full max-w-7xl mx-auto p-12 space-y-4 border bg-white text-black rounded'>
          {/* <div className='flex items-center justify-between'> */}
          <div className='edit-prescription-header'>
            <DialogTitle className='edit-prescription-title'>Edit Prescription</DialogTitle>
            <button className='edit-prescription-close-btn' onClick={() => setIsOpen(false)}>X</button>
          </div>

          <div className='grid grid-cols-1 gap-4 space-y-2'>
            <div className='flex flex-col'>
              <label>Medicine Name:</label>
              <input
                type='text'
                name='medicineName'
                value={editedMedicine.medicineName}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label>Frequency:</label>
              <input
                type='text'
                name='frequency'
                value={editedMedicine.frequency}
                onChange={handleChange}
              />
            </div>
            {/* <div className="flex flex-col">
              <label>Cap Color:</label>
              <input
                type="text"
                name="capColor"
                value={editedMedicine.capColor}
                onChange={handleChange}
              />
            </div> */}
            <div className='flex flex-col'>
              <label>Instructions:</label>
              <textarea
                name='specialInstruction'
                value={editedMedicine.specialInstruction}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label>Eye Selection:</label>
              <select
                name='eyeSelection'
                value={
                  editedMedicine.eyeSelection.left
                    ? 'left'
                    : editedMedicine.eyeSelection.right
                    ? 'right'
                    : 'both'
                }
                onChange={handleEyeSelectionChange}
              >
                <option value='left'>Left</option>
                <option value='right'>Right</option>
                <option value='both'>Both</option>
              </select>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <button onClick={onDelete} className='bg-red-500'>
                Delete
              </button>
              <button className = "save-button" onClick={handleSave}>Save</button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default EditDialog;
