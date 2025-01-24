import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";

export const STATUSMAP = {
  success: {
    label: "Transaction Completed",
    icon: <FaCheckCircle className="icon-success text-green-500" />,
  },
  actionRequired: {
    label: "Action Needed",
    icon: <FaExclamationTriangle className="icon-action-required" />,
  },
  error: {
    label: "Transaction Failed",
    icon: <FaTimesCircle className="icon-error" />,
  },
  processing: {
    label: "Processing...",
    icon: <FaSpinner className="icon-processing spinner" />,
  },
};

// Optimized and clean version of getStatusDetails function
export const getStatusDetails = (status) => {
  const map_status = status ? status.toLowerCase() : "unknown";
  const statusData = STATUSMAP[map_status];

  return (
    statusData || {
      label: "Unknown Status",
      icon: <FaTimesCircle className="icon-unknown" />,
    }
  );
};
