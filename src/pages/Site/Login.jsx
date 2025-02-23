import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../shared/site/components/Layout/Background";

const Login = () => {
  const apiLogin = process.env.REACT_APP_API_LOGIN;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch(apiLogin, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Đăng nhập thất bại");
      }

      localStorage.setItem("accessToken", data.accessToken);
      alert("Đăng nhập thành công!");
      window.location.href = "/home";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <Background />
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 z-10">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Đăng Nhập
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Tài Khoản
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tài khoản ..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Mật Khẩu
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu ..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Đăng Nhập
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Chưa có tài khoản?{" "}
          <Link to={"/register"} className="text-blue-500 hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
