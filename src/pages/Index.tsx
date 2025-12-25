import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const newProducts = [
    {
      id: 1,
      name: 'ЧПУ Фрезер 3040',
      price: 185000,
      oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 5,
      reviews: 12,
      badge: 'Новинка',
      badgeColor: 'bg-secondary'
    },
    {
      id: 2,
      name: 'Лазерный гравер CO2 80W',
      price: 245000,
      oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      rating: 5,
      reviews: 8,
      badge: 'Новинка',
      badgeColor: 'bg-secondary'
    },
    {
      id: 3,
      name: 'ЧПУ Станок 6090 Pro',
      price: 325000,
      oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 5,
      reviews: 15,
      badge: 'Новинка',
      badgeColor: 'bg-secondary'
    },
    {
      id: 4,
      name: 'Фрезер Desktop Mini',
      price: 95000,
      oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 4,
      reviews: 6,
      badge: 'Новинка',
      badgeColor: 'bg-secondary'
    }
  ];

  const hitProducts = [
    {
      id: 5,
      name: 'ЧПУ Фрезер 6040Z',
      price: 198000,
      oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 5,
      reviews: 45,
      badge: 'Хит',
      badgeColor: 'bg-accent'
    },
    {
      id: 6,
      name: 'Резной арт-объект "Волна"',
      price: 12500,
      oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      rating: 5,
      reviews: 67,
      badge: 'Хит',
      badgeColor: 'bg-accent'
    },
    {
      id: 7,
      name: 'Гравировальный станок 4040',
      price: 165000,
      oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      rating: 5,
      reviews: 38,
      badge: 'Хит',
      badgeColor: 'bg-accent'
    },
    {
      id: 8,
      name: 'Панель декоративная 3D',
      price: 8900,
      oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      rating: 5,
      reviews: 52,
      badge: 'Хит',
      badgeColor: 'bg-accent'
    }
  ];

  const saleProducts = [
    {
      id: 9,
      name: 'ЧПУ Фрезер 3020T',
      price: 125000,
      oldPrice: 159000,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 4,
      reviews: 23,
      badge: '-21%',
      badgeColor: 'bg-destructive'
    },
    {
      id: 10,
      name: 'Лазер 40W Desktop',
      price: 89000,
      oldPrice: 125000,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      rating: 4,
      reviews: 18,
      badge: '-29%',
      badgeColor: 'bg-destructive'
    },
    {
      id: 11,
      name: 'Арт-панно "Геометрия"',
      price: 6500,
      oldPrice: 9500,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      rating: 5,
      reviews: 31,
      badge: '-32%',
      badgeColor: 'bg-destructive'
    },
    {
      id: 12,
      name: 'Фрезер CNC 2030',
      price: 78000,
      oldPrice: 98000,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 4,
      reviews: 14,
      badge: '-20%',
      badgeColor: 'bg-destructive'
    }
  ];

  const ProductCard = ({ product }: any) => (
    <Card className="group overflow-hidden border hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className={`absolute top-3 right-3 ${product.badgeColor} text-white font-semibold`}>
          {product.badge}
        </Badge>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button size="icon" variant="secondary" className="hover-scale">
            <Icon name="Eye" size={20} />
          </Button>
          <Button size="icon" variant="secondary" className="hover-scale">
            <Icon name="Heart" size={20} />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[56px]">{product.name}</h3>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < product.rating ? 'fill-accent text-accent' : 'text-gray-300'}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.oldPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>
        <Button className="w-full" onClick={() => setCartItems(cartItems + 1)}>
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          В корзину
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold">CNC-MARKET</h1>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="hover:text-secondary transition-colors">Оборудование</a>
                <a href="#" className="hover:text-secondary transition-colors">Арт-объекты</a>
                <a href="#" className="hover:text-secondary transition-colors">Услуги</a>
                <a href="#" className="hover:text-secondary transition-colors">О нас</a>
                <a href="#" className="hover:text-secondary transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Оборудование ЧПУ для профессионалов
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Фрезерные и лазерные станки. Изготовление арт-объектов на заказ. Доставка по всей России.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                Каталог оборудования
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-2">Новинки</h2>
            <p className="text-muted-foreground">Последние поступления оборудования и изделий</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Смотреть все
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {newProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      <section className="bg-gradient-to-r from-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-secondary text-white p-3 rounded-lg">
                <Icon name="Truck" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Доставка по России</h3>
                <p className="text-sm text-muted-foreground">Быстрая доставка в любой регион</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent text-white p-3 rounded-lg">
                <Icon name="Shield" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Гарантия качества</h3>
                <p className="text-sm text-muted-foreground">2 года гарантии на всё оборудование</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-lg">
                <Icon name="Headphones" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Техподдержка 24/7</h3>
                <p className="text-sm text-muted-foreground">Помощь специалистов в любое время</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-2">Хиты продаж</h2>
            <p className="text-muted-foreground">Самые популярные товары нашего магазина</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Смотреть все
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {hitProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Индивидуальное производство</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Создаём уникальные арт-объекты, декоративные панели и рекламные конструкции по вашим эскизам
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
            Заказать изделие
            <Icon name="Sparkles" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-2">Акции и скидки</h2>
            <p className="text-muted-foreground">Выгодные предложения на популярные позиции</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Смотреть все
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {saleProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">CNC-MARKET</h3>
              <p className="text-sm text-white/80">
                Профессиональное оборудование ЧПУ и изготовление арт-объектов с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Фрезерные станки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лазерные граверы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Арт-объекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Комплектующие</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@cnc-market.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Промышленная 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 CNC-MARKET. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
