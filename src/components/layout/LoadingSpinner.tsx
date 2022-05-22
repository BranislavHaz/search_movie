import spinner from "../../assets/images/loading-spinner.png";

const LoadingSpinner = () => {
  return (
    <div className="spinner-wrapper">
      <img src={spinner} className="spinner-img" alt="Loading spinner" />
    </div>
  );
};

export default LoadingSpinner;
