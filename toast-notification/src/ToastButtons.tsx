import Button from "./Button";

function ToastButtons({ addToast }) {
    const handleInfoToast = () => addToast("bg-blue-500", "Info Toast");
    const handleSuccessToast = () => addToast("bg-green-500", "Success Toast");
    const handleErrorToast = () => addToast("bg-red-500", "Error Toast");
    const handleWarningToast = () => addToast("bg-orange-500", "Warning Toast");

    return (
        <div>
            <Button onClick={handleInfoToast}>Info</Button>
            <Button onClick={handleSuccessToast}>Success</Button>
            <Button onClick={handleErrorToast}>Error</Button>
            <Button onClick={handleWarningToast}>Warning</Button>
        </div>
    );
}

export default ToastButtons;
