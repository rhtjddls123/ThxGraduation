interface HeaderProps {
  isLogin?: boolean;
  onLogin?: (login: boolean) => void;
}

export default function Header({ isLogin, onLogin }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-50 shadow">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Graduation" className="h-6 text-blue-700" />
        <span className="text-lg font-bold text-blue-700">졸업을 축하해</span>
      </div>
      {isLogin && (
        <div className="flex items-center gap-4 text-blue-600">
          <span>김민수님</span>
          <button className="hover:underline" onClick={() => onLogin?.(!isLogin)}>
            로그아웃
          </button>
        </div>
      )}
    </header>
  );
}
