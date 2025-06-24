import Icon from "@/components/ui/icon";

const ProjectFeatures = () => {
  const features = [
    {
      icon: "BookOpen",
      title: "Образовательные материалы",
      description:
        "Методические пособия и интерактивные задания для изучения сказок",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: "Gamepad2",
      title: "Интерактивные элементы",
      description: "Игры, викторины и творческие задания для детей",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: "MessageCircle",
      title: "Обратная связь родителей",
      description: "Система отзывов и рекомендаций от родителей",
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      icon: "Library",
      title: "Библиотека сказок",
      description: "Коллекция народных и авторских сказок с аудио",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: "GraduationCap",
      title: "Инструменты педагога",
      description: "Планы уроков и методические рекомендации для учителей",
      color: "bg-pink-50 text-pink-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Возможности проекта
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексная образовательная платформа для работы со сказками
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
              >
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatures;
