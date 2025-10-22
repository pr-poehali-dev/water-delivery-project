import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [bottles, setBottles] = useState(1);
  const pricePerBottle = 200;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Droplet" className="text-primary" size={28} />
              <span className="text-2xl font-bold text-foreground">Вартемяжская</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                О воде
              </button>
              <button onClick={() => scrollToSection('delivery')} className="text-foreground hover:text-primary transition-colors">
                Доставка
              </button>
              <button onClick={() => scrollToSection('payment')} className="text-foreground hover:text-primary transition-colors">
                Оплата
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('order')} className="hidden md:flex">
              Заказать
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="py-20 bg-gradient-to-b from-background to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Чистая вода.<br />
                  <span className="text-primary">Прямо к двери.</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Доставка питьевой воды Вартемяжская 19 литров — свежесть и качество каждый день
                </p>
                <div className="flex gap-4">
                  <Button size="lg" onClick={() => scrollToSection('order')} className="text-lg px-8">
                    Заказать воду
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8">
                    Узнать больше
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/e775e217-e0cc-48b6-a7ac-ea693af1610e/files/da6edcab-d646-46c3-9b1a-d40330655aff.jpg" 
                  alt="Бутыль воды Вартемяжская 19л"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">О воде Вартемяжская</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Shield" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">100% чистота</h3>
                  <p className="text-muted-foreground">
                    Многоступенчатая система очистки гарантирует высочайшее качество воды
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="FlaskConical" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">Сбалансированный состав</h3>
                  <p className="text-muted-foreground">
                    Оптимальное содержание минералов для здоровья вашей семьи
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="BadgeCheck" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">Сертифицировано</h3>
                  <p className="text-muted-foreground">
                    Все необходимые сертификаты качества и безопасности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="order" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold text-center">Оформить заказ</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="bottles" className="text-lg">Количество бутылей (19л)</Label>
                      <div className="flex items-center gap-4 mt-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => setBottles(Math.max(1, bottles - 1))}
                        >
                          <Icon name="Minus" size={20} />
                        </Button>
                        <Input 
                          id="bottles"
                          type="number" 
                          value={bottles}
                          onChange={(e) => setBottles(Math.max(1, parseInt(e.target.value) || 1))}
                          className="text-center text-xl font-semibold"
                        />
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => setBottles(bottles + 1)}
                        >
                          <Icon name="Plus" size={20} />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg">
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold">Стоимость:</span>
                        <span className="text-3xl font-bold text-primary">{bottles * pricePerBottle} ₽</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {pricePerBottle} ₽ за бутыль
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input id="name" placeholder="Иван Иванов" />
                      </div>

                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                      </div>

                      <div>
                        <Label htmlFor="address">Адрес доставки</Label>
                        <Input id="address" placeholder="ул. Примерная, д. 1, кв. 1" />
                      </div>
                    </div>

                    <Button className="w-full text-lg py-6" size="lg">
                      <Icon name="ShoppingCart" className="mr-2" size={20} />
                      Оформить заказ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Условия доставки</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                      <p className="text-muted-foreground">
                        Доставим воду в удобное для вас время. При заказе до 12:00 — доставка в тот же день
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Зона доставки</h3>
                      <p className="text-muted-foreground">
                        Доставляем по всему городу. Бесплатная доставка при заказе от 3 бутылей
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Подъем на этаж</h3>
                      <p className="text-muted-foreground">
                        Наши курьеры поднимут бутыли на любой этаж. Никаких доплат
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Repeat" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Регулярная доставка</h3>
                      <p className="text-muted-foreground">
                        Настройте график постоянных поставок и экономьте время
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="payment" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Способы оплаты</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Banknote" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">Наличные</h3>
                  <p className="text-muted-foreground">Оплата курьеру при получении</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="CreditCard" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">Картой курьеру</h3>
                  <p className="text-muted-foreground">Оплата банковской картой</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Smartphone" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">Онлайн оплата</h3>
                  <p className="text-muted-foreground">Оплата через приложение</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Icon name="Phone" className="text-primary mt-1" size={24} />
                        <div>
                          <h3 className="font-bold mb-1">Телефон</h3>
                          <a href="tel:+78001234567" className="text-lg text-primary hover:underline">
                            +7 (800) 123-45-67
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Icon name="Mail" className="text-primary mt-1" size={24} />
                        <div>
                          <h3 className="font-bold mb-1">Email</h3>
                          <a href="mailto:info@vartemyazhskaya.ru" className="text-lg text-primary hover:underline">
                            info@vartemyazhskaya.ru
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Icon name="Clock" className="text-primary mt-1" size={24} />
                        <div>
                          <h3 className="font-bold mb-1">Режим работы</h3>
                          <p className="text-muted-foreground">Ежедневно с 8:00 до 22:00</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button className="w-full" size="lg">
                        <Icon name="MessageCircle" className="mr-2" size={20} />
                        Написать в WhatsApp
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <Icon name="Send" className="mr-2" size={20} />
                        Написать в Telegram
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Droplet" size={24} />
                <span className="text-xl font-bold">Вартемяжская</span>
              </div>
              <p className="text-white/70">
                Доставка чистой питьевой воды 19л
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-white/70 hover:text-white transition-colors">
                  Главная
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-white/70 hover:text-white transition-colors">
                  О воде
                </button>
                <button onClick={() => scrollToSection('delivery')} className="block text-white/70 hover:text-white transition-colors">
                  Доставка
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <p>+7 (800) 123-45-67</p>
                <p>info@vartemyazhskaya.ru</p>
                <p>Ежедневно с 8:00 до 22:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 Вартемяжская. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
