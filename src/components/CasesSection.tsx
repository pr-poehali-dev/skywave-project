const cases = [
  {
    tag: 'Розничная торговля',
    title: 'Сеть магазинов электроники',
    challenge: 'Убыточные 3 из 5 точек, отсутствие управленческого учёта, хаос в закупках.',
    result: 'Вышли в плюс через 4 месяца. Выручка выросла на 38% за год.',
    metrics: [
      { value: '+38%', label: 'выручка' },
      { value: '4 мес', label: 'до прибыли' },
      { value: '×2', label: 'оборачиваемость' },
    ],
  },
  {
    tag: 'Производство',
    title: 'Завод строительных материалов',
    challenge:
      'Собственник работал 80 часов в неделю, не было системы управления и делегирования.',
    result: 'Выстроили операционку, наняли COO. Собственник сократил участие до 20 часов в неделю.',
    metrics: [
      { value: '−60ч', label: 'нагрузка собственника' },
      { value: '+25%', label: 'производительность' },
      { value: '3 мес', label: 'внедрение' },
    ],
  },
  {
    tag: 'IT-компания',
    title: 'Агентство по разработке ПО',
    challenge: 'Компания не могла масштабироваться: теряли клиентов из-за срывов дедлайнов.',
    result: 'Внедрили систему проектного управления. Выручка удвоилась за 8 месяцев.',
    metrics: [
      { value: '×2', label: 'выручка' },
      { value: '95%', label: 'дедлайны в срок' },
      { value: '8 мес', label: 'период роста' },
    ],
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="bg-gray-950 py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
            Наши результаты
          </p>
          <h2 className="text-4xl font-light text-white md:text-5xl">Кейсы клиентов</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <span className="mb-4 inline-block w-fit rounded-full border border-white/20 px-3 py-1 text-xs text-white/50">
                {c.tag}
              </span>
              <h3 className="mb-4 text-xl font-medium text-white">{c.title}</h3>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                Задача
              </p>
              <p className="mb-6 text-sm leading-relaxed text-gray-400">{c.challenge}</p>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                Результат
              </p>
              <p className="mb-8 text-sm leading-relaxed text-gray-300">{c.result}</p>
              <div className="mt-auto grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {c.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-2xl font-light text-white">{m.value}</p>
                    <p className="mt-1 text-xs text-gray-500">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
