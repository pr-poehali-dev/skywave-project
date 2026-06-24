import { useState } from 'react';

const LEADS_URL = 'https://functions.poehali.dev/4a589d58-dbeb-47a6-a0ad-99e0dfa3a849';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(LEADS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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

          {/* Контакты */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: '📞', label: 'Телефон', value: '+7 (915) 037-33-77', href: 'tel:+79150373377' },
              { icon: '✉️', label: 'Email', value: 'info@klinkov.ru', href: 'mailto:info@klinkov.ru' },
              { icon: '💬', label: 'Telegram', value: '@klinkov_cg', href: 'https://t.me/klinkov_cg' },
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

          {/* Форма заявки */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-left md:p-12">
            <h3 className="mb-8 text-2xl font-light text-gray-900">Оставить заявку</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <span className="text-5xl">✅</span>
                <p className="text-xl font-light text-gray-800">Заявка отправлена!</p>
                <p className="text-gray-500">Мы свяжемся с вами в течение рабочего дня.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-gray-400 underline hover:text-gray-700"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">
                      Ваше имя *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">
                      Телефон *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (999) 000-00-00"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-black"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">
                    Опишите вашу задачу
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Расскажите о вашем бизнесе и задаче, с которой нужна помощь..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-black"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500">
                    Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-2 w-full rounded-full bg-black py-4 text-base font-medium text-white transition hover:bg-gray-800 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Отправляем...' : 'Получить бесплатную консультацию'}
                </button>

                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs text-gray-400">или</span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                <a
                  href="https://t.me/klinkov_cg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white py-4 text-base font-medium text-gray-700 transition hover:border-[#2AABEE] hover:text-[#2AABEE]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Написать в Telegram
                </a>
              </form>
            )}
          </div>
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