const services = [
  {
    icon: '📊',
    title: 'Стратегический консалтинг',
    description:
      'Разрабатываем стратегию роста, анализируем рынок и конкурентов, помогаем выйти на новые направления с минимальными рисками.',
  },
  {
    icon: '⚙️',
    title: 'Операционное управление',
    description:
      'Оптимизируем бизнес-процессы, выстраиваем систему KPI и управления командой — чтобы бизнес работал без вашего постоянного участия.',
  },
  {
    icon: '💰',
    title: 'Финансовый директор на аутсорсе',
    description:
      'Берём на себя финансовое планирование, управленческий учёт, контроль денежных потоков и отношения с банками.',
  },
  {
    icon: '🚀',
    title: 'Запуск бизнеса с нуля',
    description:
      'Сопровождаем на всех этапах: от идеи до первых продаж. Бизнес-план, юридическое оформление, подбор команды и первые клиенты.',
  },
  {
    icon: '🔍',
    title: 'Аудит компании',
    description:
      'Глубокий анализ текущего состояния бизнеса: выявляем узкие места, потери прибыли и точки роста с конкретным планом действий.',
  },
  {
    icon: '👥',
    title: 'HR и построение команды',
    description:
      'Помогаем нанять правильных людей, выстроить корпоративную культуру и систему мотивации, которая удерживает сильных сотрудников.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">
            Что мы делаем
          </p>
          <h2 className="text-4xl font-light text-gray-900 md:text-5xl">Наши услуги</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:border-black hover:bg-black hover:shadow-xl"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-medium text-gray-900 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 group-hover:text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
