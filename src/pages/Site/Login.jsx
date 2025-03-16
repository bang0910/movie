import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Đăng nhập thành công!");
      navigate("/");
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white">
        <h2 className="text-3xl font-bold text-center mb-6">🎬 Đăng Nhập</h2>
        <p className="text-center mb-6 text-sm text-gray-200">
          Chào mừng bạn trở lại với MovieZone!
        </p>
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
              className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-yellow-400 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-2 rounded-xl transition duration-300 shadow-lg hover:shadow-2xl"
          >
            🔑 Đăng Nhập
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-200">
          Chưa có tài khoản?{" "}
          <Link
            to={"/register"}
            className="text-yellow-300 underline hover:text-yellow-400"
          >
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
