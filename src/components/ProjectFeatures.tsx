import Icon from "@/components/ui/icon";

const ProjectFeatures = () => {
  const features = [
    {
      icon: "BookOpen",
      title: "Образовательные материалы",
      description:
        "Методические пособия и интерактивные задания для изучения сказок",
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: "Gamepad2",
      title: "Интерактивные элементы",
      description: "Игры, викторины и творческие задания для детей",
      color: "bg-amber-100 text-amber-700",
    },
    {
      icon: "MessageCircle",
      title: "Обратная связь родителей",
      description: "Система отзывов и рекомендаций от родителей",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: "Library",
      title: "Библиотека сказок",
      description: "Коллекция народных и авторских сказок с аудио",
      color: "bg-orange-50 text-orange-800",
    },
    {
      icon: "GraduationCap",
      title: "Инструменты педагога",
      description: "Планы уроков и методические рекомендации для учителей",
      color: "bg-amber-50 text-amber-800",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-25 to-amber-25">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Возможности проекта
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Комплексная образовательная платформа для работы со сказками
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              <div
                className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
              >
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-amber-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatures;
