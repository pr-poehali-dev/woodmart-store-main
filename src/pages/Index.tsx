import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const categories = [
    { 
      id: 1, 
      name: 'Фрезерные станки', 
      count: 45,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      gradient: 'from-blue-600 to-blue-400'
    },
    { 
      id: 2, 
      name: 'Лазерные граверы', 
      count: 32,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      gradient: 'from-orange-600 to-orange-400'
    },
    { 
      id: 3, 
      name: 'Арт-объекты', 
      count: 128,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      gradient: 'from-purple-600 to-purple-400'
    },
    { 
      id: 4, 
      name: 'Комплектующие', 
      count: 89,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      gradient: 'from-green-600 to-green-400'
    },
    { 
      id: 5, 
      name: 'Инструменты', 
      count: 56,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      gradient: 'from-red-600 to-red-400'
    },
    { 
      id: 6, 
      name: 'Материалы', 
      count: 73,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      gradient: 'from-teal-600 to-teal-400'
    },
  ];

  const newProducts = [
    {
      id: 1, name: 'ЧПУ Фрезер 3040', price: 185000, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 5, reviews: 12, badge: 'Новинка', badgeColor: 'bg-secondary'
    },
    {
      id: 2, name: 'Лазерный гравер CO2 80W', price: 245000, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      rating: 5, reviews: 8, badge: 'Новинка', badgeColor: 'bg-secondary'
    },
    {
      id: 3, name: 'ЧПУ Станок 6090 Pro', price: 325000, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 5, reviews: 15, badge: 'Новинка', badgeColor: 'bg-secondary'
    },
    {
      id: 4, name: 'Фрезер Desktop Mini', price: 95000, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 4, reviews: 6, badge: 'Новинка', badgeColor: 'bg-secondary'
    },
    {
      id: 5, name: 'Гравер портативный 50W', price: 135000, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      rating: 5, reviews: 9, badge: 'Новинка', badgeColor: 'bg-secondary'
    },
    {
      id: 6, name: 'ЧПУ Станок 4040 Plus', price: 215000, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 5, reviews: 11, badge: 'Новинка', badgeColor: 'bg-secondary'
    },
  ];

  const hitProducts = [
    {
      id: 7, name: 'ЧПУ Фрезер 6040Z', price: 198000, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 5, reviews: 45, badge: 'Хит', badgeColor: 'bg-accent'
    },
    {
      id: 8, name: 'Резной арт-объект "Волна"', price: 12500, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      rating: 5, reviews: 67, badge: 'Хит', badgeColor: 'bg-accent'
    },
    {
      id: 9, name: 'Гравировальный станок 4040', price: 165000, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      rating: 5, reviews: 38, badge: 'Хит', badgeColor: 'bg-accent'
    },
    {
      id: 10, name: 'Панель декоративная 3D', price: 8900, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      rating: 5, reviews: 52, badge: 'Хит', badgeColor: 'bg-accent'
    },
    {
      id: 11, name: 'Фрезер CNC Professional', price: 289000, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 5, reviews: 54, badge: 'Хит', badgeColor: 'bg-accent'
    },
    {
      id: 12, name: 'Арт-панно "Геометрия"', price: 15900, oldPrice: null,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      rating: 5, reviews: 41, badge: 'Хит', badgeColor: 'bg-accent'
    },
  ];

  const saleProducts = [
    {
      id: 13, name: 'ЧПУ Фрезер 3020T', price: 125000, oldPrice: 159000,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 4, reviews: 23, badge: '-21%', badgeColor: 'bg-destructive'
    },
    {
      id: 14, name: 'Лазер 40W Desktop', price: 89000, oldPrice: 125000,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      rating: 4, reviews: 18, badge: '-29%', badgeColor: 'bg-destructive'
    },
    {
      id: 15, name: 'Арт-панно "Абстракция"', price: 6500, oldPrice: 9500,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      rating: 5, reviews: 31, badge: '-32%', badgeColor: 'bg-destructive'
    },
    {
      id: 16, name: 'Фрезер CNC 2030', price: 78000, oldPrice: 98000,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
      rating: 4, reviews: 14, badge: '-20%', badgeColor: 'bg-destructive'
    },
    {
      id: 17, name: 'Гравер лазерный 30W', price: 65000, oldPrice: 89000,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
      rating: 4, reviews: 19, badge: '-27%', badgeColor: 'bg-destructive'
    },
    {
      id: 18, name: 'Декор "Орнамент"', price: 4900, oldPrice: 7500,
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
      rating: 5, reviews: 27, badge: '-35%', badgeColor: 'bg-destructive'
    },
  ];

  const news = [
    {
      id: 1,
      title: 'Новая линейка профессионального оборудования',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      date: '15 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg',
    },
    {
      id: 2,
      title: 'Акция на арт-объекты до конца месяца',
      excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      date: '12 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/28323701-098e-4fc9-a83f-8155ff56cc0d.jpg',
    },
    {
      id: 3,
      title: 'Обновление программного обеспечения',
      excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      date: '8 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/3de33599-4de1-4914-afcf-f9f8fdd5acbc.jpg',
    },
  ];

  const ProductCard = ({ product }: any) => (
    <Card className="group overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 bg-white">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <Badge className={`absolute top-3 right-3 ${product.badgeColor} text-white font-semibold shadow-lg`}>
          {product.badge}
        </Badge>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button size="icon" variant="secondary" className="hover-scale shadow-xl backdrop-blur-sm bg-white/90">
            <Icon name="Eye" size={20} />
          </Button>
          <Button size="icon" variant="secondary" className="hover-scale shadow-xl backdrop-blur-sm bg-white/90">
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
              <div className="flex items-center gap-2">
                <Icon name="Hexagon" size={32} className="text-accent" />
                <h1 className="text-2xl font-bold">ShopName</h1>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="hover:text-secondary transition-colors">Каталог</a>
                <a href="#" className="hover:text-secondary transition-colors">Акции</a>
                <a href="#" className="hover:text-secondary transition-colors">Новости</a>
                <a href="#" className="hover:text-secondary transition-colors">Доставка</a>
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

      <section className="relative h-[650px] bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/6a41afde-0278-4e7b-bc9a-a5afc5e9d9fc/files/df773fc4-2819-493c-8582-68b29c0fe01d.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-white text-sm px-4 py-2 shadow-xl animate-pulse">
              🎉 Зимняя распродажа 2024
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Профессиональное оборудование со скидкой до 40%
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud exercitation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-6 text-lg shadow-2xl hover:shadow-accent/50 transition-all">
                Смотреть каталог
                <Icon name="ArrowRight" size={22} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/20 px-10 py-6 text-lg shadow-xl">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-primary mb-3 text-center">Категории товаров</h2>
        <p className="text-center text-muted-foreground mb-10">Выберите интересующую категорию для быстрого поиска</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-0">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2 text-center">{category.name}</h3>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    {category.count} товаров
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ArrowRight" size={20} className="text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-accent/5 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">🔥 Акции и скидки</h2>
              <p className="text-muted-foreground">Не упустите выгодные предложения этой недели</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Все акции
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-2">✨ Новинки</h2>
            <p className="text-muted-foreground">Последние поступления в нашем магазине</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Смотреть все
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Icon name="Truck" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-primary">Быстрая доставка</h3>
                <p className="text-muted-foreground leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-accent to-accent/80 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Icon name="Shield" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-primary">Гарантия качества</h3>
                <p className="text-muted-foreground leading-relaxed">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Icon name="Headphones" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-primary">Поддержка 24/7</h3>
                <p className="text-muted-foreground leading-relaxed">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-2">⭐ Хиты продаж</h2>
            <p className="text-muted-foreground">Самые популярные товары среди наших покупателей</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Смотреть все
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hitProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-accent" />
          <h2 className="text-4xl font-bold mb-4">Индивидуальные заказы</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
            Оставить заявку
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-2">📰 Новости и статьи</h2>
            <p className="text-muted-foreground">Будьте в курсе последних событий и полезных материалов</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Все новости
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{item.excerpt}</p>
                <Button variant="link" className="p-0 h-auto">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Mail" size={48} className="mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h2>
            <p className="text-white/80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-black"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Hexagon" size={32} className="text-accent" />
                <h3 className="font-bold text-xl">ShopName</h3>
              </div>
              <p className="text-sm text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
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
                  +7 (XXX) XXX-XX-XX
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@example.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Примерная, д. 123
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 ShopName. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;