import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activePlan, setActivePlan] = useState<'free' | 'pro'>('free');

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">StudyGrow</span>
          </div>
          <Button className="gradient-primary hover:opacity-90 transition-opacity">
            Скачать приложение
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Учёба - не проблема. <br />
            <span className="text-gradient">Проблема - начать.</span>
          </h1>
          <p className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in text-gradient">
            Мы помогаем начать.
          </p>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in">
            StudyGrow - это приложение-помощник, который понимает, как ты учишься, когда работаешь продуктивнее и почему иногда хочется просто лечь и ничего не делать. Он помогает перестать «делать всё завтра» и наконец начать жить без вечных дедлайнов, бессонных ночей и саможаления.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="gradient-primary hover:opacity-90 text-lg px-8 py-6 animate-pulse-glow">
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6">
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-2xl font-semibold mb-4">
              Прокрастинация - главный враг студента.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Не потому что «лень», а потому что сложно начать, непонятно как распределить время, а больших задач просто страшно касаться.
            </p>
          </div>
          
          <Card className="glass p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gradient">StudyGrow решает это комплексно:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "Scissors", text: "разбивает даже огромную задачу на маленькие шаги" },
                { icon: "Calendar", text: "расставляет их по расписанию так, чтобы не было перегруза" },
                { icon: "Bell", text: "напоминает начать вовремя" },
                { icon: "Trophy", text: "мотивирует \"играть\" дальше в собственное развитие" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow">
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>
                  <p className="text-lg pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center text-lg text-muted-foreground">
            <p className="font-semibold text-foreground">Результат:</p>
            <p>меньше стресса, больше порядка в голове и ясности.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Как это <span className="text-gradient">работает?</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Представь, что у тебя есть личный ассистент и немного игрового мира - и они работают вместе.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "Brain",
                title: "Интеллектуальное планирование",
                description: "подстраивается под твой реальный ритм: приложение видит, когда ты активен, и предлагает оптимальное время для заданий."
              },
              {
                icon: "BellRing",
                title: "Умные напоминания",
                description: "появляются не просто «когда попало», а когда ты действительно можешь сесть и сделать дело."
              },
              {
                icon: "Gamepad2",
                title: "Игровая мотивация",
                description: "за каждый выполненный шаг ты получаешь баллы, открытия, достижения - это маленькие, но приятные победы."
              },
              {
                icon: "Heart",
                title: "Виртуальный питомец",
                description: "растёт, когда ты работаешь, и грустит, когда откладываешь всё на потом. Он как милый друг, которого не хочется расстраивать."
              },
              {
                icon: "ShieldOff",
                title: "Режим «Не трогай телефон»",
                description: "защита от соблазна «просто на минутку зайти в соцсети»."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="glass p-6 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 animate-float">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>


        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Кому подходит, <span className="text-gradient">а кому не подходит</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Icon name="CheckCircle" size={28} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-400">Подходит</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Студентам 1-4 курсов, особенно с высокой нагрузкой: ИТ, дизайн, менеджмент, архитектура и другие.",
                  "Тем, кто устал срывать дедлайны, писать все за ночь до сдачи и жить в хаосе.",
                  "Тем, кто хочет сформировать привычку работать без перегрузов и паники.",
                  "После пар «немного отдыхаешь» с телефоном, и вот уже вечер, а дела не сделаны.",
                  "Не знаешь, с чего начать большую задачу."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="glass p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <Icon name="XCircle" size={28} className="text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-400">Не подходит</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Уже идеально управляешь своим временем и у тебя нет проблем с прокрастинацией.",
                  "Не готов уделять и 5 минут в день планированию.",
                  "Тем, кто вообще не планирует и не хочет менять привычки.",
                  "Тем, кому не нравится геймификация и «история с питомцем».",
                  "Тем, кто ищет просто обычный календарь - StudyGrow делает гораздо больше."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="X" size={20} className="text-red-400 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Что умеет <span className="text-gradient">StudyGrow</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Все инструменты для продуктивной учёбы в одном приложении
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Puzzle",
                text: "Разбивает большие дела на маленькие шаги - и вдруг то, что казалось «невозможно начать», становится простым."
              },
              {
                icon: "TrendingUp",
                text: "Показывает прогресс - и ты видишь, что действительно двигаешься, а не топчешься на месте."
              },
              {
                icon: "Zap",
                text: "Мотивирует через игровой процесс - работа превращается в небольшой квест."
              },
              {
                icon: "Focus",
                text: "Следит за концентрацией - меньше отвлечений = больше свободного времени."
              },
              {
                icon: "BarChart3",
                text: "Помогает распределять нагрузку заранее - не приходиться делать всё в последнюю ночь."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="glass p-6 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Тарифы</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              className={`glass p-8 cursor-pointer transition-all ${activePlan === 'free' ? 'border-primary scale-105' : ''}`}
              onClick={() => setActivePlan('free')}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Бесплатный</h3>
                <div className="text-5xl font-bold text-gradient mb-4">0₽</div>
                <p className="text-muted-foreground">Навсегда бесплатно</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Базовый планировщик",
                  "Виртуальный питомец",
                  "Умные напоминания",
                  "Режим фокуса",
                  "Базовая статистика"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full gradient-primary hover:opacity-90">
                Начать бесплатно
              </Button>
            </Card>

            <Card 
              className={`glass p-8 cursor-pointer transition-all relative overflow-hidden ${activePlan === 'pro' ? 'border-primary scale-105' : ''}`}
              onClick={() => setActivePlan('pro')}
            >
              <Badge className="absolute top-4 right-4 bg-accent text-white">Популярно</Badge>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Pro</h3>
                <div className="text-5xl font-bold text-gradient mb-4">299₽</div>
                <p className="text-muted-foreground">в месяц</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Всё из бесплатного",
                  "Расширенная аналитика",
                  "Улучшенное планирование",
                  "Дополнительные питомцы",
                  "Наборы аксессуаров",
                  "Приоритетная поддержка",
                  "Без рекламы"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full gradient-accent hover:opacity-90">
                Попробовать Pro
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Отзывы</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Максим",
                age: 20,
                text: "Раньше садился за комп и итог - через 10 минут листаю видосы на телефоне. Сейчас приложение ловит момент, когда я залипаю, и пишет: \"хочешь закрыть одно маленькое дело?\". И я закрываю. Удивительно, но работает."
              },
              {
                name: "Лена",
                age: 19,
                text: "У меня была куча разрозненных задач по ui, и я постоянно ловила себя на \"потом\". Тут всё разбилось на маленькие штуки, и мозг такой: ну ладно, это-то я сделаю."
              },
              {
                name: "Алина",
                age: 20,
                text: "Смешно, но меня держит в тонусе не система, а этот мелкий виртуальный зверек. Он так грустит, когда я забиваю, что я реально чувствую себя не очень и иду делать задания"
              },
              {
                name: "Даша",
                age: 22,
                text: "Я не люблю, когда подобные приложения связывают с играми. Но мне понравилось другое: оно реально видит, когда я перегорела. Один раз приложение предложило \"поставить паузу\" и расписало нагрузку на неделю вперёд. Спасло."
              },
              {
                name: "Владимир",
                age: 23,
                text: "Если коротко: я перестал чувствовать вину за несделанные дела. Раньше список дел пугал. Теперь шаги маленькие, реально можно успеть."
              }
            ].map((review, idx) => (
              <Card key={idx} className="glass p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-xl font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}, {review.age}</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">«{review.text}»</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Метрики</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "64%", label: "пользователей легче начинать работу" },
                { value: "2.1x", label: "меньше перегрузов у студентов с работой" },
                { value: "33%", label: "меньше пропущенных дедлайнов" }
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className="text-5xl font-bold text-gradient mb-2">{metric.value}</div>
                  <p className="text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Истории <span className="text-gradient">использования</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Кейсы: истории из жизни
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Bus",
                title: "Учёба в маршрутке",
                text: "Данил ездит 40 минут до универа. Приложение заметило, что это его «живое время» — и стало подкидывать короткие задачи. Теперь он делает половину рутинных дел по дороге."
              },
              {
                icon: "Briefcase",
                title: "Студентка совмещает учёбу и подработку",
                text: "Полина работает 5 часов в день и постоянно \"проваливалась\" в дедлайны: приходила домой уставшая и уже ничего не делала. Приложение заметило, что у нее стабильно есть \"живые\" короткие промежутки по пути домой, и начало предлагать маленькие шаги именно тогда. 90% микро-задач она стала закрывать по дороге, а дома наконец появилось время отдыхать."
              },
              {
                icon: "AlertTriangle",
                title: "Когда в один день внезапно всё навалилось",
                text: "У Димы набилось 7 задач на четверг: две лабораторные, отчёт и мини-тест. Он понял, что физически не успеет. Приложение предложило перенести часть дел, распределив их на три дня, и оставило на четверг только самое критичное. Он закрыл дедлайн без стресса и нормально выспался — впервые за две недели."
              }
            ].map((story, idx) => (
              <Card key={idx} className="glass p-6 hover:scale-105 transition-transform">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
                  <Icon name={story.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{story.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Сравнение</span>
          </h2>

          <Card className="glass overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 font-bold text-lg">Возможность</th>
                    <th className="text-center p-6 font-bold text-lg text-gradient">StudyGrow</th>
                    <th className="text-center p-6 font-bold text-lg text-muted-foreground">Обычный планировщик</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Виртуальный питомец", studygrow: true, other: false },
                    { feature: "Игровая система мотивации", studygrow: true, other: false },
                    { feature: "Разбивка задач автоматически", studygrow: true, other: false },
                    { feature: "Рекомендации по времени", studygrow: true, other: "partial" },
                    { feature: "Режим «Не трогай телефон»", studygrow: true, other: false }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-6">{row.feature}</td>
                      <td className="p-6 text-center">
                        {row.studygrow ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                              <Icon name="Check" size={20} className="text-green-400" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                              <Icon name="X" size={20} className="text-red-400" />
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.other === true ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                              <Icon name="Check" size={20} className="text-green-400" />
                            </div>
                          </div>
                        ) : row.other === "partial" ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                              <Icon name="Minus" size={20} className="text-yellow-400" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                              <Icon name="X" size={20} className="text-red-400" />
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Готов <span className="text-gradient">начать?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Перестань откладывать на завтра. Начни сегодня - бесплатно.
          </p>
          <Button size="lg" className="gradient-primary hover:opacity-90 text-lg px-12 py-8 text-xl animate-pulse-glow">
            Скачать StudyGrow
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">StudyGrow</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 StudyGrow. Помогаем студентам начать учиться.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;