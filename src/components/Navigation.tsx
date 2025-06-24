import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/recommendations", label: "Рекомендации", icon: "Users" },
    { path: "/report", label: "Отчет", icon: "FileText" },
  ];

  return (
    <nav className="bg-gradient-to-r from-orange-50/95 to-amber-50/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏠</span>
            <span className="text-xl font-bold text-amber-800">
              В гостях у сказки
            </span>
          </Link>

          <div className="flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-orange-200 text-amber-800 shadow-md"
                    : "text-amber-700 hover:bg-orange-100/70 hover:shadow-sm"
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
