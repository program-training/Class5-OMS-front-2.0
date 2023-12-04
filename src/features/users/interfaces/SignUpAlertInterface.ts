// With God's Help
interface AlertInfo {
  type: "success" | "error";
  message: string;
}
export interface SignUpAlertInterface {
  alert: AlertInfo | null;
  handleAlertClose: () => void;
}
