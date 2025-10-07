import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const apps = [
  {
    id: 1,
    name: "Tok-Tok",
    description: "Самая популярная видео-платформа Империи",
    icon: "📱",
    rating: 3.9,
    downloads: "1.2 млрд",
    category: "independent",
    details: "Снимай зуки, делись контентом, становись звездой!",
    type: "Видео Платформа",
    free: true
  },
  {
    id: 2,
    name: "DeepTube",
    description: "Единая видео-платформа для всего",
    icon: "🎬",
    rating: 4.2,
    downloads: "1.9 млрд",
    category: "government",
    details: "Фильмы, блоги, готовка, экстрим и многое другое",
    type: "Видео Платформа",
    free: true
  },
  {
    id: 3,
    name: "Ani",
    description: "Твоя новая ИИ подруга",
    icon: "💜",
    rating: 4.0,
    downloads: "10+ млн",
    category: "independent",
    details: "Живое общение, 3D-аватар, настраиваемый характер",
    type: "ИИ Чат",
    free: true
  },
  {
    id: 4,
    name: "NeGramm",
    description: "Передовой мессенджер Империи",
    icon: "💬",
    rating: 4.1,
    downloads: "1.05 млрд",
    category: "government",
    details: "Чаты, группы, стикеры и ИИ-помощник",
    type: "Мессенджер",
    free: true
  },
  {
    id: 5,
    name: "Governed",
    description: "Все госуслуги в одном приложении",
    icon: "🏛️",
    rating: 4.3,
    downloads: "2.56 млрд",
    category: "government",
    details: "Штрафы, запись к врачу, пенсии, документы",
    type: "Гос. Сервис",
    free: true
  },
  {
    id: 6,
    name: "Кабинет Военнослужащего",
    description: "Помощь военным на фронте",
    icon: "🎖️",
    rating: 4.0,
    downloads: "20 млн",
    category: "government",
    details: "Сбор средств, новости, благодарности",
    type: "Сервис",
    free: true
  },
  {
    id: 7,
    name: "DeepDisk",
    description: "Облачное хранилище с ИИ",
    icon: "☁️",
    rating: 4.0,
    downloads: "210 млн",
    category: "government",
    details: "14 ГБ бесплатно, умный поиск, синхронизация",
    type: "Облако",
    free: false
  },
  {
    id: 8,
    name: "Deep Watch",
    description: "Стриминговый сервис",
    icon: "📺",
    rating: 4.1,
    downloads: "1.1 млрд",
    category: "government",
    details: "Фильмы, сериалы, эксклюзивный контент",
    type: "Стриминг",
    free: false
  }
];

const Index = () => {
  const [sortByRating, setSortByRating] = useState(false);
  
  const sortApps = (appsList: typeof apps) => {
    if (sortByRating) {
      return [...appsList].sort((a, b) => b.rating - a.rating);
    }
    return appsList;
  };
  
  const governmentApps = sortApps(apps.filter(app => app.category === "government"));
  const independentApps = sortApps(apps.filter(app => app.category === "independent"));
  const allApps = sortApps(apps);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="fixed inset-0 animate-gradient"
        style={{
          background: "linear-gradient(-45deg, #FFB3D9, #9b87f5, #4A148C, #1A0B2E)",
        }}
      />
      
      <div className="relative z-10">
        <nav className="glass-effect sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB3D9] to-[#4A148C] flex items-center justify-center">
                  <Icon name="Smartphone" size={24} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold">DeepApps</h1>
              </div>
              <div className="flex gap-6">
                <a href="#home" className="hover:text-accent transition-colors font-medium">Главная</a>
                <a href="#apps" className="hover:text-accent transition-colors font-medium">Приложения</a>
                <a href="#government" className="hover:text-accent transition-colors font-medium">Государственные</a>
              </div>
            </div>
          </div>
        </nav>

        <section id="home" className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 text-lg px-6 py-2 bg-accent/20 text-accent hover:bg-accent/30">
              🆓 Все приложения бесплатны
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Недралическая Империя
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Свыше 100+ млн независимых приложений и игр.<br />
              Государственные сервисы для вашего удобства.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Card className="glass-effect border-accent/20">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-accent">100+ млн</div>
                  <div className="text-sm text-muted-foreground">Независимых приложений</div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-secondary/20">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-secondary">1+ млн</div>
                  <div className="text-sm text-muted-foreground">Игр</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="apps" className="container mx-auto px-4 py-20">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
              <TabsList className="glass-effect">
                <TabsTrigger value="all">Все приложения</TabsTrigger>
                <TabsTrigger value="independent">Независимые</TabsTrigger>
                <TabsTrigger value="government">Государственные</TabsTrigger>
              </TabsList>
              
              <Button
                onClick={() => setSortByRating(!sortByRating)}
                variant={sortByRating ? "secondary" : "outline"}
                className="glass-effect"
              >
                <Icon name={sortByRating ? "ArrowDownWideNarrow" : "ArrowUpDown"} size={16} className="mr-2" />
                {sortByRating ? "По рейтингу" : "Сортировка"}
              </Button>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allApps.map((app) => (
                  <Card key={app.id} className="bg-[#1A0B2E]/90 backdrop-blur-md hover:scale-105 transition-all duration-300 border-white/10 hover:border-white/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-5xl">{app.icon}</div>
                        <div className="flex flex-col items-end gap-2">
                          {app.free && (
                            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                              FREE
                            </Badge>
                          )}
                          {app.category === "government" && (
                            <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                              <Icon name="Building2" size={14} className="mr-1" />
                              ГОС
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-white">{app.name}</CardTitle>
                      <CardDescription className="text-base text-white/80">{app.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/70 mb-4">{app.details}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                          <span className="font-medium text-white">{app.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/60">
                          <Icon name="Download" size={16} />
                          <span>{app.downloads}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-4 w-full justify-center py-2 border-white/20 text-white/80">
                        {app.type}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="independent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {independentApps.map((app) => (
                  <Card key={app.id} className="bg-[#1A0B2E]/90 backdrop-blur-md hover:scale-105 transition-all duration-300 border-white/10 hover:border-white/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-5xl">{app.icon}</div>
                        {app.free && (
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            FREE
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl text-white">{app.name}</CardTitle>
                      <CardDescription className="text-base text-white/80">{app.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/70 mb-4">{app.details}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                          <span className="font-medium text-white">{app.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/60">
                          <Icon name="Download" size={16} />
                          <span>{app.downloads}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-4 w-full justify-center py-2 border-white/20 text-white/80">
                        {app.type}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="government">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {governmentApps.map((app) => (
                  <Card key={app.id} className="bg-[#1A0B2E]/90 backdrop-blur-md hover:scale-105 transition-all duration-300 border-secondary/30 hover:border-secondary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-5xl">{app.icon}</div>
                        <div className="flex flex-col items-end gap-2">
                          {app.free && (
                            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                              FREE
                            </Badge>
                          )}
                          <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                            <Icon name="Building2" size={14} className="mr-1" />
                            ГОС
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-white">{app.name}</CardTitle>
                      <CardDescription className="text-base text-white/80">{app.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/70 mb-4">{app.details}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                          <span className="font-medium text-white">{app.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/60">
                          <Icon name="Download" size={16} />
                          <span>{app.downloads}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-4 w-full justify-center py-2 border-white/20 text-white/80">
                        {app.type}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="container mx-auto px-4 py-20">
          <Card className="glass-effect border-accent/30">
            <CardContent className="p-12 text-center">
              <Icon name="Shield" size={64} className="mx-auto mb-6 text-accent" />
              <h2 className="text-3xl font-bold mb-4">
                Безопасность и Свобода
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Все приложения проходят проверку безопасности. Экосистема DeepApps предоставляет
                свободу выбора между государственными и независимыми разработчиками.
              </p>
            </CardContent>
          </Card>
        </section>

        <footer className="glass-effect mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-muted-foreground">
              <p className="text-sm">
                © 2025 DeepApps Ecosystem • Недралическая Империя
              </p>
              <p className="text-xs mt-2">
                Empire Government Company ICN
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;