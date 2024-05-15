import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import PrescriptionContainer from './Components/PrescriptionContainer/PrescriptionContainer';
import MedicineList from './Components/MedicineCatalog/MedicineList';
import MedicineCard from './Components/MedicineCatalog/MedicineCard';
import EditDialog from './Components/Dialog/EditDialog';
import { useMedicineState, MedicineCardProps } from './hooks/useMedicineState'; // Combined import statement
import QRCode from 'qrcode.react';

const App: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  const [qrData, setQRData] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentMedicine, setCurrentMedicine] = useState<
    MedicineCardProps | undefined
  >(undefined);

  const {
    selectedMedicines,
    handleDeleteMedicine,
    handleAddMedicine,
    handleUpdateMedicine,
  } = useMedicineState();

  const generateQRCode = () => {
    if (selectedMedicines.length === 0) {
      alert('Please select at least one medicine before generating a QR code.');
      return;
    }
    const data = JSON.stringify(selectedMedicines, null, 2);
    setQRData(data);
    setShowQR(true);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div className='container'>
        <div className='leftScreen'>
          <PrescriptionContainer>
            {/* <pre>
              SelectedMedicine: {JSON.stringify(selectedMedicines, null, 2)}
            </pre> */}
            {selectedMedicines.map((medicine) => (
              <div key={medicine.uniqueKey} className='medicine-entry'>
                <MedicineCard
                  key={medicine.uniqueKey}
                  medicine={medicine}
                  onSelect={() =>
                    handleUpdateMedicine(medicine.uniqueKey, { ...medicine })
                  }
                  onUpdate={(updatedFields) =>
                    handleUpdateMedicine(medicine.uniqueKey, updatedFields)
                  }
                  mode='review'
                />
                {/* <pre>Medicine: {JSON.stringify(medicine, null, 2)}</pre> */}
                <div className='edit-delete-btn-container'>
                  <button
                    onClick={() => {
                      setCurrentMedicine(medicine);
                      setIsOpen(true);
                    }}
                    className='edit-button'
                    style={{ backgroundColor: '#29C5F6', color: 'white' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteMedicine(medicine.uniqueKey)}
                    className='delete-button'
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {selectedMedicines.length > 0 && (
              <button onClick={generateQRCode} className='generate-qr-btn'>
                Generate QR Code
              </button>
            )}
            {showQR && qrData && (
              <div className='qr-code-container'>
                <QRCode value={qrData} size={256} />
              </div>
            )}
          </PrescriptionContainer>
        </div>
        <div className='rightScreen'>
          <MedicineList onSelectMedicine={handleAddMedicine} />
        </div>
        <EditDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          medicine={currentMedicine!} // Assumes currentMedicine is not null
          onUpdateMedicine={(updatedMedicine) => {
            if (currentMedicine) {
              handleUpdateMedicine(currentMedicine.uniqueKey, updatedMedicine);
            }
          }}
          onDelete={() => {
            if (currentMedicine) {
              handleDeleteMedicine(currentMedicine.uniqueKey);
              setIsOpen(false); // Close the dialog upon deletion
            }
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
