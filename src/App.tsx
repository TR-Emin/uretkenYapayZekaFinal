import React, { useState } from 'react';
import { BookOpen, Code2, Users, GraduationCap, MessageSquare, Building2, Clock, Award } from 'lucide-react';
import { Chat } from './components/Chat';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[60vh] bg-blue-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            opacity: '0.3'
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Fırat Üniversitesi</h1>
          <h2 className="text-3xl mb-2">Teknoloji Fakültesi</h2>
          <h3 className="text-2xl mb-6">Yazılım Mühendisliği Bölümü</h3>
          <p className="text-xl max-w-2xl">
            2010 yılında kurulan bölümümüz, yazılım mühendisliği alanında güçlü akademik kadrosu ve 
            modern laboratuvar imkanlarıyla öğrencilerimize kaliteli eğitim sunmaktadır.
          </p>
        </div>
      </header>

      {/* Quick Info */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon={<Building2 className="w-6 h-6" />}
              title="Kontenjan"
              description="60 Öğrenci (I. Öğretim)"
            />
            <InfoCard
              icon={<Clock className="w-6 h-6" />}
              title="Eğitim Süresi"
              description="4 Yıl"
            />
            <InfoCard
              icon={<Award className="w-6 h-6" />}
              title="Derece"
              description="Yazılım Mühendisliği Lisans Diploması"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Bölüm Özellikleri</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<BookOpen className="w-8 h-8" />}
            title="Güçlü Müfredat"
            description="Yazılım geliştirme, veritabanı yönetimi, web teknolojileri, mobil uygulama geliştirme ve yapay zeka alanlarında kapsamlı eğitim"
          />
          <FeatureCard 
            icon={<Code2 className="w-8 h-8" />}
            title="Modern Laboratuvarlar"
            description="Bilgisayar laboratuvarları, yazılım geliştirme stüdyoları ve araştırma merkezleri ile pratik eğitim imkanı"
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8" />}
            title="Staj ve İş İmkanları"
            description="Sektör lideri firmalarla işbirliği, zorunlu staj programı ve mezuniyet sonrası geniş iş imkanları"
          />
        </div>
      </section>

      {/* Programs */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Eğitim Programları</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProgramCard
              title="Lisans Programı"
              duration="4 Yıl"
              description="Algoritma ve programlama, veri yapıları, yazılım mimarisi, veritabanı sistemleri, web teknolojileri ve daha fazlası"
              icon={<GraduationCap className="w-6 h-6" />}
            />
            <ProgramCard
              title="Yüksek Lisans Programı"
              duration="2 Yıl"
              description="Yapay zeka, büyük veri, bulut bilişim, siber güvenlik ve yazılım mühendisliği yönetimi alanlarında uzmanlaşma"
              icon={<GraduationCap className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <FAQCard
            question="Bölümün dili nedir?"
            answer="Eğitim dili Türkçe'dir. Ancak bazı seçmeli dersler İngilizce olarak verilebilmektedir."
          />
          <FAQCard
            question="Hangi alanlarda uzmanlaşabilirim?"
            answer="Web geliştirme, mobil uygulama geliştirme, yapay zeka, veri bilimi, siber güvenlik, oyun geliştirme gibi alanlarda uzmanlaşabilirsiniz."
          />
          <FAQCard
            question="Staj zorunlu mu?"
            answer="Evet, öğrencilerimiz mezun olabilmek için toplam 60 iş günü staj yapmak zorundadır."
          />
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4">
        <button 
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

function InfoCard({ icon, title, description }) {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProgramCard({ title, duration, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="text-blue-600 mr-2">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-blue-600 font-medium mb-2">Süre: {duration}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FAQCard({ question, answer }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

export default App;