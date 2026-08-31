interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <h1 className="text-2xl font-bold text-center text-slate-800">
      {title}
    </h1>
  );
}

export default Header;