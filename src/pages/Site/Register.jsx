import { useState } from "react";
import Background from "../../shared/site/components/Layout/Background";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    alert("Đăng ký thành công!");
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <Background />
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Đăng Ký
        </h2>

        <form onSubmit={handleRegister}>
          {/* Họ và Tên */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Họ và Tên
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập họ và tên ..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email ..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Mật khẩu */}
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
              required
            />
          </div>

          {/* Nút Đăng Ký */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Đăng Ký
          </button>
        </form>

        {/* Đã có tài khoản? */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Đã có tài khoản?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Đăng nhập ngay
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
