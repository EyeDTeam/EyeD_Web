//Declared the required props/params to this (PrescriptionContainer) component
interface PrescriptionContainerProps {
  children: React.ReactNode;
}

const PrescriptionContainer: React.FC<PrescriptionContainerProps> = ({
  children,
}) => {
  return <div className="prescription-container">{children}</div>;
};

export default PrescriptionContainer;
