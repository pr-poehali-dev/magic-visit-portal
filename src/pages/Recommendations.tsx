import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Recommendations = () => {
  const recommendations = [
    {
      icon: "Clock",
      title: "Оптимальное время чтения",
      description:
        "Рекомендуем читать сказки 15-20 минут в день, лучше перед сном",
      tips: [
        "Создайте уютную атмосферу",
        "Выберите тихое место",
        "Используйте мягкий свет",
      ],
    },
    {
      icon: "Users",
      title: "Возрастные группы",
      description: "Подбирайте сказки согласно возрасту и развитию ребенка",
      tips: [
        "3-4 года: простые сюжеты",
        "5-6 лет: более сложные истории",
        "7+ лет: авторские сказки",
      ],
    },
    {
      icon: "MessageSquare",
      title: "Обсуждение сказок",
      description: "Важно обсуждать прочитанное с ребенком",
      tips: [
        "Задавайте вопросы по сюжету",
        "Обсуждайте поступки героев",
        "Связывайте с реальной жизнью",
      ],
    },
    {
      icon: "Palette",
      title: "Творческие активности",
      description: "Дополняйте чтение творческими заданиями",
      tips: [
        "Рисование героев",
        "Театральные постановки",
        "Придумывание продолжения",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Рекомендации для родителей
          </h1>
          <p className="text-xl text-gray-600">
            Как эффективно использовать сказки в развитии ребенка
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {recommendations.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.tips.map((tip, tipIndex) => (
                      <li
                        key={tipIndex}
                        className="flex items-center space-x-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-8 text-center">
          <Icon name="Heart" size={48} className="mx-auto mb-4 text-white" />
          <h2 className="text-2xl font-bold mb-4">Главное правило</h2>
          <p className="text-lg">
            Читайте с удовольствием! Ваше отношение к чтению передается ребенку
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
