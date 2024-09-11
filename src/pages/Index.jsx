import LandingPage from '../components/LandingPage';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ウィンズ音楽教室 | オンラインレッスン特別キャンペーン</title>
        <meta name="description" content="ウィンズ音楽教室のオンラインレッスン特別キャンペーン。1年間、1回3,500円（税抜）の特別価格でレッスンを受けられます。ボーカル、ギター、ドラム、ピアノなど多彩な楽器に対応。" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="ウィンズ音楽教室 | オンラインレッスン特別キャンペーン" />
        <meta property="og:description" content="ウィンズ音楽教室のオンラインレッスン特別キャンペーン。1年間、1回3,500円（税抜）の特別価格でレッスンを受けられます。" />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:url" content="https://wins-music.gptengineer.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://wins-music.gptengineer.app" />
      </Helmet>
      <LandingPage />
    </>
  );
};

export default Index;