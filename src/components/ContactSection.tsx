export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">
            Работаем вместе
          </p>
          <h2 className="mb-6 text-4xl font-light text-gray-900 md:text-5xl">
            Готовы обсудить ваш проект?
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-gray-500">
            Расскажите о своей задаче — мы проведём бесплатную первичную консультацию
            и предложим конкретные шаги для роста вашего бизнеса.
          </p>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: '📞', label: 'Телефон', value: '+7 (999) 000-00-00', href: 'tel:+79990000000' },
              { icon: '✉️', label: 'Email', value: 'info@klinkov.ru', href: 'mailto:info@klinkov.ru' },
              { icon: '💬', label: 'Telegram', value: '@klinkov_cg', href: 'https://t.me/' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:border-black hover:bg-black"
              >
                <span className="mb-3 text-3xl">{item.icon}</span>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400 group-hover:text-white/50">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-gray-800 group-hover:text-white">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <a
            href="tel:+79990000000"
            className="inline-flex items-center rounded-full bg-black px-10 py-4 text-base font-medium text-white transition-all hover:bg-gray-800"
          >
            Получить бесплатную консультацию
          </a>
        </div>
      </div>

      <div className="mt-24 border-t border-gray-100">
        <div className="container mx-auto px-8 py-8 md:px-16">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm font-light text-gray-400">
              © 2024 ♛ Klinkov Consulting Group
            </p>
            <p className="text-sm text-gray-400">Все права защищены</p>
          </div>
        </div>
      </div>
    </section>
  );
}
