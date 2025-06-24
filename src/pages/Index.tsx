import Navigation from "@/components/Navigation";
import ProjectFeatures from "@/components/ProjectFeatures";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-6">🏰✨</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              В гостях у сказки
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Образовательная платформа для изучения сказок с интерактивными
              элементами, методическими материалами и системой обратной связи
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Link to="/recommendations">Рекомендации для родителей</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/report">Отчет проекта</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ProjectFeatures />

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Начните путешествие в мир сказок
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Присоединяйтесь к нашему проекту и откройте новые возможности
            обучения
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Узнать больше
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
