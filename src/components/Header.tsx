import { useLogin } from "@/hooks/useAuth";
import { authApi } from "@/services/authService";
import { useAuthStore } from "@/store/useAuthStore";

export default function Header() {
  const { onLogin } = useLogin();
  const setLogin = useAuthStore((state) => state.setLogin);
  const isLogin = useAuthStore((state) => state.isLogin);
  const name = useAuthStore((state) => state.name);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-50 shadow">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Graduation" className="h-6 text-blue" />
        <span className="text-lg font-bold text-blue">졸업을 축하해</span>
      </div>
      {isLogin ? (
        <div className="flex items-center gap-4 text-blue">
          <span>{name}님</span>
          <button
            className="hover:underline"
            onClick={() => {
              authApi.logout();
              setLogin({ value: false, name: undefined });
            }}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <button
          className="bg-blue hover:bg-blue/80 active:bg-blue/80 py-2 px-4 rounded-xl text-white font-bold"
          onClick={onLogin}
        >
          로그인
        </button>
      )}
    </header>
  );
}
