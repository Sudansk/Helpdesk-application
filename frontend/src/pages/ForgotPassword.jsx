import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const submit = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
    setToken(res.data.resetToken);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={submit}
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Generate Reset Token
        </button>

        {token && (
          <p className="text-sm mt-3 break-all">
            Reset Token: <b>{token}</b>
          </p>
        )}
      </div>
    </div>
  );
}
