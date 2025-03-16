import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      alert("Email đã tồn tại!");
      return;
    }

    users.push({
      fullName: form.fullName,
      email: form.email,
      password: form.password,
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Bạn có thể đăng nhập.");
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          🎉 Tạo Tài Khoản
        </h2>
        <p className="text-center mb-6 text-sm text-gray-200">
          Gia nhập MovieZone và khám phá thế giới điện ảnh!
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm">Họ và tên</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Nguyễn Văn A"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Xác nhận mật khẩu</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-2 rounded-xl transition duration-300 shadow-lg hover:shadow-2xl"
          >
            🚀 Đăng Ký Ngay
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-200">
          Đã có tài khoản?{" "}
          <Link
            to={"/login"}
            className="text-yellow-300 underline hover:text-yellow-400"
          >
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
