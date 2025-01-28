// worker.js
self.addEventListener("message", function (e) {
  const { code } = e.data;

  // Overriding console.log in the worker to send logs to the main thread
  const logToMainThread = (msg) => {
    postMessage({ success: true, logs: msg });
  };

  // Capture error events and send to the main thread if any occur
  const captureError = (error) => {
    postMessage({ success: false, error: error.message });
  };

  // Redirect console.log to the main thread
  const originalLog = console.log;
  console.log = function (msg) {
    logToMainThread(msg); // Send log message to main thread
    originalLog(msg); // Also log to console (DevTools)
  };

  try {
    // Execute the user code in a safe environment
    new Function(code)(); // Evaluate the code
  } catch (error) {
    captureError(error); // If there's an error, send it back to the main thread
  }
});
