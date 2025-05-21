const LoginScreen: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Вхід</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Увійти
        </button>
      </form>
    </div>
  );
};
export default LoginScreen;
