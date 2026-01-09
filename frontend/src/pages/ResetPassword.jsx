import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const reset = async () => {
    await axios.post(
      `http://localhost:5000/api/auth/reset-password/${token}`,
      { password }
    );
    alert("Password reset successful");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={reset}
          className="bg-green-600 text-white w-full p-2 rounded"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
          }
