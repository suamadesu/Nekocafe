import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const cats = [
  ['Luna', '穏やかで気品のある、人気No.1のラグドール。', 'cat-luna'],
  ['Miel', 'ふわふわの毛並みと甘えんぼな性格が魅力。', 'cat-miel'],
  ['Gris', '落ち着いた空気感で、そっと寄り添ってくれる存在。', 'cat-gris'],
  ['Noel', '好奇心たっぷりで、見ているだけでも癒される。', 'cat-noel'],
]

const services = [
  ['高級な猫たちとの時間', '美しい長毛種を中心に、穏やかで人懐っこい猫たちが在籍。', 'cat', 'lounge'],
  ['コワーキングスペース完備', 'Wi-Fi・電源・静かな席で、仕事や読書も快適に。', 'pc', 'work'],
  ['ドリンクサーバーあり', '気分に合わせて楽しめるセルフドリンクで、滞在時間をより豊かに。', 'cup', 'drink'],
]

const prices = [
  ['1hour', '¥4,800', ['猫ラウンジ利用', 'フリードリンク', 'コワーキング利用可']],
  ['2hours', '¥8,800', ['猫ラウンジ利用', 'フリードリンク', 'コワーキング利用可', 'おすすめの過ごし方'], true],
  ['Free time', '¥14,800', ['終日ゆったり滞在', 'フリードリンク', 'コワーキング利用可', '優先予約付き']],
]

function Icon({ type, className = '' }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (type === 'logo' || type === 'cat') return <svg viewBox="0 0 48 48" className={className} aria-hidden="true"><path {...common} d="M24 42c-8 0-15-5.6-15-14.1 0-7.5 5.9-12.6 9.8-17.4 1.7-2.1 2.2-4.4 2.2-4.4s5 3.4 5.5 9.7c2.1-1.4 4.5-2.1 7.5-2.2-1 3.5-2.8 6-5.4 7.7 4.9 1.9 8.4 5.8 8.4 10.3C37 38.3 31.3 42 24 42Z"/><path {...common} d="M18.3 24.5c1.1-1.4 2.3-2.1 3.7-2.1 1.5 0 2.7.7 3.6 2.1m-12.2 4.2c2.7 3.2 6.1 4.8 10.1 4.8 2.8 0 5.2-.8 7.2-2.5"/></svg>
  if (type === 'lotus') return <svg viewBox="0 0 52 32" className={className} aria-hidden="true"><path {...common} d="M26 27C18 20 17 11 26 4c9 7 8 16 0 23Z"/><path {...common} d="M25 27C14 26 7 20 8 10c9 1 14 8 17 17Zm2 0c11-1 18-7 17-17-9 1-14 8-17 17Z"/><path {...common} d="M10 27h32"/></svg>
  if (type === 'check') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...common} cx="12" cy="12" r="9"/><path {...common} d="m8 12 2.6 2.7L16.5 9"/></svg>
  if (type === 'pc') return <svg viewBox="0 0 48 48" className={className} aria-hidden="true"><rect {...common} x="10" y="12" width="28" height="19" rx="2"/><path {...common} d="M18 37h12m-6-6v6"/></svg>
  if (type === 'cup') return <svg viewBox="0 0 48 48" className={className} aria-hidden="true"><path {...common} d="M12 16h22v10a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9V16Z"/><path {...common} d="M34 19h3a4 4 0 0 1 0 8h-3M14 39h23"/></svg>
  if (type === 'calendar') return <svg viewBox="0 0 48 48" className={className} aria-hidden="true"><rect {...common} x="10" y="12" width="28" height="27" rx="3"/><path {...common} d="M17 8v8m14-8v8M10 21h28m8 4h.01m-14 0h.01m-14 7h.01m7 0h.01m7 0h.01"/></svg>
  if (type === 'card') return <svg viewBox="0 0 48 48" className={className} aria-hidden="true"><rect {...common} x="9" y="15" width="30" height="20" rx="3"/><path {...common} d="M9 21h30M16 29h10"/></svg>
  return <svg viewBox="0 0 48 48" className={className} aria-hidden="true"><path {...common} d="m13 24 8 8 16-17"/></svg>
}

function Header() {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-cream/58 backdrop-blur-xl">
    <nav className="mx-auto flex h-[110px] max-w-[1840px] items-center justify-between px-10 max-md:h-20 max-md:px-5">
      <a href="#hero" className="group flex items-center gap-3 text-muted"><Icon type="logo" className="h-11 w-11 text-gold transition group-hover:rotate-6"/><span className="font-roman text-[31px] tracking-[-.03em] max-md:text-2xl">Lueur Cat Lounge</span></a>
      <div className="flex items-center gap-16 font-serif text-[21px] text-ink max-md:hidden"><a href="#service">サービス</a><a href="#cats">猫紹介</a><a href="#price">料金</a><a className="rounded-full border border-line px-9 py-3 text-gold" href="#reserve">予約</a></div>
    </nav>
  </header>
}

function Button({ children, pale = false, className = '' }) {
  return <a href="#reserve" className={`btn ${pale ? 'btn-pale' : ''} ${className}`}>{children}<span>›</span></a>
}

function PhotoScene({ variant, className = '' }) {
  return <div className={`photo-scene ${variant} ${className}`}><div className="arch"/><div className="shelves"><i/><i/><i/></div><div className="sofa"/><div className="table"/><div className="drinkbar"><i/><i/><i/><i/><i/></div><div className="person"/><div className="cat catA"/><div className="cat catB"/><div className="cup"/></div>
}

function CatPortrait({ type }) { return <div className={`cat-portrait ${type}`}><span className="ear l"/><span className="ear r"/><span className="face"><i/><b/><em/></span><span className="ruff"/></div> }

function Hero() {
  return <section id="hero" className="section hero min-h-screen overflow-hidden pt-[110px]"><PhotoScene variant="hero-photo" className="absolute inset-y-0 right-0 w-[68%] max-lg:w-full"/><div className="hero-veil"/><div className="relative z-10 mx-auto flex min-h-[calc(100vh-110px)] max-w-[1840px] items-center px-24 max-lg:px-8"><div className="max-w-[720px] animate-fadeUp"><h1 className="headline text-[70px] leading-[1.35] tracking-[.08em] max-md:text-4xl">忙しい毎日に、<br/><span>上質な癒し</span>を。</h1><p className="mt-9 font-serif text-[25px] tracking-[.08em] text-ink max-md:text-lg">高級猫と過ごす、都会のラグジュアリー猫カフェ</p><div className="my-9 h-px w-[720px] max-w-full bg-line"/><p className="text-[17px] tracking-[.1em] text-muted max-md:text-sm">コワーキングスペース完備　/　ドリンクサーバーあり　/　厳選された美しい猫たち</p><div className="mt-14 flex gap-10 max-sm:flex-col"><Button>今すぐ予約する</Button><Button pale>サービスを見る</Button></div></div></div></section>
}

function Price() {
  return <section id="price" className="section relative overflow-hidden py-32"><PhotoScene variant="price-bg" className="absolute inset-y-0 left-0 w-[36%] opacity-70 max-lg:hidden"/><div className="relative z-10 mx-auto max-w-[1320px] px-8 text-center"><p className="label">PRICE</p><h2 className="title">過ごし方に合わせて選べる<span>料金プラン</span></h2><p className="lead">気分や用途に合わせて、シンプルで分かりやすい3つのプランをご用意しています。</p><div className="mt-20 grid grid-cols-3 gap-7 max-lg:grid-cols-1">{prices.map(([name, price, list, pop]) => <div key={name} className={`price-card ${pop ? 'popular' : ''}`}>{pop && <div className="popular-badge">POPULAR</div>}<h3>{name}</h3><p className="price">{price}</p><div className="orn"><span/><Icon type="lotus"/><span/></div><ul>{list.map(i => <li key={i}><Icon type="check"/>{i}</li>)}</ul></div>)}</div><p className="mt-10 text-[17px] tracking-[.05em] text-muted">※価格は税込です。混雑時は事前予約をおすすめします。</p><Button className="mx-auto mt-8">今すぐ予約する</Button></div></section>
}

function Cats() { return <section id="cats" className="section relative overflow-hidden py-36"><PhotoScene variant="cats-bg" className="absolute right-0 top-0 h-[420px] w-[50%] opacity-75 max-lg:hidden"/><div className="relative z-10 mx-auto max-w-[1780px] px-14 max-md:px-5"><p className="label text-left">CATS</p><h2 className="title text-left">個性まで愛したくなる、<span>在籍猫たち。</span></h2><p className="mt-7 font-serif text-[21px] tracking-[.04em] text-ink">Lueurで出会えるのは、見た目の美しさだけではなく、性格まで魅力的な猫たち。</p><div className="mt-16 grid grid-cols-4 gap-7 max-xl:grid-cols-2 max-md:grid-cols-1">{cats.map(([name, text, type]) => <article className="cat-card" key={name}><CatPortrait type={type}/><div className="p-8"><div className="flex items-center justify-between"><h3>{name}</h3><Icon type="lotus" className="h-9 w-11 text-line"/></div><div className="my-4 h-px bg-line"/><p>{text}</p></div></article>)}</div><div className="mt-14 flex items-center justify-between max-md:flex-col max-md:gap-8"><p className="text-[16px] tracking-[.04em] text-muted">※猫たちの体調により、当日の過ごし方は異なる場合があります。</p><Button>予約する</Button></div></div></section> }

function Service() { return <section id="service" className="section service relative overflow-hidden py-36"><div className="curve"/><div className="relative z-10 mx-auto grid max-w-[1680px] grid-cols-[480px_1fr] gap-16 px-16 max-xl:grid-cols-1 max-md:px-5"><div className="pt-10"><p className="label text-left">SERVICE</p><h2 className="title text-left">癒しも、集中も、<br/><span>心地よく。</span></h2><p className="mt-9 max-w-[390px] font-serif text-[20px] leading-[2] tracking-[.05em] text-ink">Lueur Cat Loungeは、上質な猫との時間と、静かに整うワークタイムを両立できるラグジュアリー猫カフェです。</p><span className="paw p1">•</span><span className="paw p2">•</span></div><div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">{services.map(([title, body, icon, scene]) => <article className="service-card" key={title}><div className="icon-bubble"><Icon type={icon}/></div><PhotoScene variant={scene}/><h3>{title}</h3><div className="mx-8 h-px bg-line"/><p>{body}</p></article>)}</div><Button className="col-span-full mx-auto mt-10">料金を見る</Button></div></section> }

function Reserve() { const steps = [['01','calendar','日時を選ぶ','ご希望の来店日時を選択'],['02','card','プランを選ぶ','滞在時間に合わせて料金プランを選択'],['03','check2','予約を確定','必要事項を入力して完了']]; return <section id="reserve" className="section reserve grid min-h-screen grid-cols-[47%_1fr] gap-16 px-12 py-12 max-xl:grid-cols-1 max-md:px-5"><PhotoScene variant="reserve-photo" className="min-h-[880px] rounded-[38px] max-xl:min-h-[520px]"/><div className="flex flex-col items-center justify-center text-center"><p className="label">RESERVE</p><h2 className="title">ご予約は、たった<span>3ステップ。</span></h2><p className="lead leading-9">事前予約で、よりスムーズにご案内。<br/>気になる日時が決まったら、お気軽にご予約ください。</p><div className="mt-16 flex w-full items-center justify-center gap-8 max-lg:flex-col">{steps.map(([num, icon, title, sub], idx) => <React.Fragment key={num}><article className="step-card"><h3>{num}</h3><div className="step-icon"><Icon type={icon}/></div><h4>{title}</h4><p>{sub}</p></article>{idx < 2 && <span className="text-5xl text-line max-lg:rotate-90">›</span>}</React.Fragment>)}</div><div className="notice"><Icon type="logo"/><p><b>初回の方へ：</b> 猫たちの体調を守るため<br className="max-md:hidden"/>ご利用前に簡単なルール説明があります。</p></div><Button className="mt-10 w-[600px] max-w-full justify-center py-7 text-[23px]">空き状況を確認する</Button><a className="mt-7 inline-flex items-center gap-4 border-b border-line pb-1 font-serif text-[18px] tracking-[.08em] text-ink" href="#">よくある質問を見る <span>›</span></a></div></section> }

function App() { return <><Header/><main><Hero/><Price/><Cats/><Service/><Reserve/></main></> }

createRoot(document.getElementById('root')).render(<App />)
