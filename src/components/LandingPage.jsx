import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-pink-600">ウィンズ音楽教室</h1>
        </div>
        <nav className="flex items-center">
          <ul className="hidden md:flex space-x-6 mr-6">
            <li><a href="https://wins-music.com/contact/" className="hover:text-pink-600 transition-colors">お問い合わせ</a></li>
          </ul>
          <a href="https://wins-music.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:text-pink-700 transition-colors">
            メインサイト <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </nav>
      </header>

      <main>
        <section className="bg-pink-100 py-8 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">オンラインレッスン特別キャンペーン！</h2>
            <p className="text-xl md:text-2xl text-gray-800">
              このページを見た方限定：1年間、1回3,500円（税抜）の特別価格！
            </p>
          </div>
        </section>

        <section className="relative h-[70vh] flex items-center justify-center text-white" style={{backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold mb-8">音楽を楽しむ喜びを、あなたに</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">熟練講師によるマンツーマンレッスンで、基礎から実践まで丁寧に指導。様々な楽器に対応し、生徒の個性を尊重しながら楽しく音楽に取り組めるレッスンを提供します。</p>
            <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700" onClick={() => window.location.href = 'https://wins-music.com/contact/'}>
              無料体験レッスンを予約 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold mb-12 text-center text-pink-600">レッスン内容</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "ボーカル教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
                { name: "ギター教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
                { name: "ドラム教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
                { name: "ピアノ教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
                { name: "ベース教室", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
                { name: "オンラインレッスン", description: "個々のニーズに合わせた丁寧な指導を行います。初心者から上級者まで対応しています。", image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
              ].map((lesson, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <img src={lesson.image} alt={lesson.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-pink-600">{lesson.name}</h4>
                    <p className="text-gray-600">{lesson.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold mb-12 text-center text-pink-600">料金</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="mb-6 text-gray-600">レッスン料金は、コースや回数によって異なります。詳細は以下の通りです：</p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center"><CheckCircle className="mr-3 h-6 w-6 text-pink-600 flex-shrink-0" /> 入会金：10,000円（税込）→<span className="text-pink-600 font-semibold">キャンペーン価格！</span></li>
                <li className="flex items-center"><CheckCircle className="mr-3 h-6 w-6 text-pink-600 flex-shrink-0" /> オンラインレッスン：3,500円〜1回（税抜）</li>
                <li className="flex items-center"><CheckCircle className="mr-3 h-6 w-6 text-pink-600 flex-shrink-0" /> 対面レッスン：9,000円〜（税抜）</li>
                <li className="flex items-center"><CheckCircle className="mr-3 h-6 w-6 text-pink-600 flex-shrink-0" /> 体験レッスン：1回無料</li>
              </ul>
              <p className="mt-6 text-gray-600">※具体的な料金はコースや頻度によって異なります。詳細はお問い合わせください。</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-8 text-pink-600">お問い合わせ</h3>
            <p className="mb-12 text-gray-600 max-w-2xl mx-auto">レッスンに関するご質問や無料体験のお申し込みは、お気軽にお問い合わせください。</p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                <Phone className="mr-2 h-4 w-4" /> 0120-379-258
              </Button>
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                <Mail className="mr-2 h-4 w-4" /> info@wins-music.com
              </Button>
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                <MapPin className="mr-2 h-4 w-4" /> 〒150-0002 東京都渋谷区渋谷3-6-7
              </Button>
            </div>
            <div className="mt-8">
              <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700" onClick={() => window.location.href = 'https://wins-music.com/contact/'}>
                お問い合わせ・無料体験レッスンの予約 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2024 ウィンズ音楽教室. All rights reserved.</p>
          <a href="https://wins-music.com/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors inline-flex items-center">
            メインサイトはこちら <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;