import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Report = () => {
  const stats = [
    { value: "250+", label: "Участников", icon: "Users" },
    { value: "85%", label: "Положительных отзывов", icon: "ThumbsUp" },
    { value: "50+", label: "Образовательных материалов", icon: "BookOpen" },
    { value: "15", label: "Интерактивных игр", icon: "Gamepad2" },
  ];

  const results = [
    {
      title: "Повышение интереса к чтению",
      description: "У 78% детей увеличился интерес к самостоятельному чтению",
      percentage: 78,
    },
    {
      title: "Развитие творческих способностей",
      description: "Дети стали более активно участвовать в творческих заданиях",
      percentage: 85,
    },
    {
      title: "Улучшение понимания текста",
      description: "Заметно улучшилось понимание сюжета и характеров героев",
      percentage: 72,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Отчет проекта "В гостях у сказки"
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Результаты внедрения образовательной платформы для изучения сказок
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm"
            >
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Результаты */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Основные результаты
          </h2>
          <div className="space-y-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="border-b border-gray-100 pb-6 last:border-b-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {result.title}
                    </h3>
                    <p className="text-gray-600">{result.description}</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 ml-4">
                    {result.percentage}%
                  </div>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${result.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Методология */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Методология
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-green-500 mt-0.5"
                />
                <span className="text-gray-700">
                  Анкетирование родителей и педагогов
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-green-500 mt-0.5"
                />
                <span className="text-gray-700">
                  Наблюдение за активностью детей
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-green-500 mt-0.5"
                />
                <span className="text-gray-700">
                  Тестирование понимания текста
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-green-500 mt-0.5"
                />
                <span className="text-gray-700">Анализ творческих работ</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Планы развития
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Icon
                  name="Target"
                  size={20}
                  className="text-purple-500 mt-0.5"
                />
                <span className="text-gray-700">
                  Расширение библиотеки сказок
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="Target"
                  size={20}
                  className="text-purple-500 mt-0.5"
                />
                <span className="text-gray-700">Добавление аудиоформата</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="Target"
                  size={20}
                  className="text-purple-500 mt-0.5"
                />
                <span className="text-gray-700">
                  Создание мобильного приложения
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="Target"
                  size={20}
                  className="text-purple-500 mt-0.5"
                />
                <span className="text-gray-700">Система геймификации</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
