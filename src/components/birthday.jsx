import React, { useState } from "react";
import {
  Heart,
  ArrowLeft,
  ArrowRight,
  Gem,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import honeymoonImg from "../assets/1.JPG";
import weddingImg from "../assets/2.JPG";
import engagementImg from "../assets/3.JPG";
import engagementImg2 from "../assets/4.JPG";
import engagementImg3 from "../assets/5.JPG";
import engagementImg4 from "../assets/6.JPG";
import engagementImg5 from "../assets/7.JPG";
import engagementImg6 from "../assets/8.JPG";
import engagementVideo from "../assets/22.MP4";
import weddingImg2 from "../assets/9.JPG";
import weddingImg3 from "../assets/10.JPG";
import weddingImg4 from "../assets/11.JPG";
import weddingImg5 from "../assets/12.JPG";
import weddingImg6 from "../assets/13.JPG";
import honeymoonImg2 from "../assets/14.JPG";
import honeymoonImg3 from "../assets/15.JPG";
import honeymoonImg4 from "../assets/16.JPG";
import honeymoonImg5 from "../assets/17.JPG";
import honeymoonImg6 from "../assets/18.JPG";
import honeymoonImg7 from "../assets/19.JPG";
import honeymoonImg8 from "../assets/20.JPG";
import honeymoonVideo from "../assets/21.MP4";

const CORRECT_ANSWERS = ["2024-06-19"];

const CATEGORIES = [
  {
    key: "engagement",
    label: "الخطوبة",
    sub: "💕",
    icon: HeartHandshake,
    image: engagementImg,
    // Intro text shown above the gallery on this category's page.
    intro:
      "فترة الخطوبة كانت من أحلى الفترات بحياتنا، فترة عشنا فيها مشاعر حلوة، ضحكنا وفرحنا وحلمنا سوا بالأيام اللي جاية. كل يوم كان يقرّبنا أكتر من بعض، وكل لحظة كانت تزيد حماسي لليوم اللي رح نبدأ فيه حياتنا سوا. كانت فترة مليانة تفاصيل وذكريات حلوة مستحيل أنساها، ورح تضل دايمًا إلها مكانة خاصة بقلبي، لأنها كانت بداية الطريق لأجمل شي صار بحياتي… إنك صرتي مرتي وشريكة حياتي ❤️",
    photos: [
      engagementImg2,
      engagementImg3,
      engagementImg4,
      engagementImg5,
      engagementImg6,
    ],
    video: engagementVideo,
    // TODO: replace these with your own words to each other.
    sentences: [
      "كانت بداية حكايتنا الحلوة، وبداية أجمل مرحلة بحياتي.",
      "كل لحظة بهالفترة كانت مليانة فرحة وحماس للي جاي.",
      "كنت مبسوط وأنا بشوف حلمنا شوي شوي عم بصير حقيقة.",
      "فترة الخطوبة رح تضل من أحلى الذكريات بقلبي.",
      "من هون بلشنا نعدّ الأيام لحتى نصير سوا ببيت واحد. ❤️",
    ],
  },
  {
    key: "wedding",
    label: "العرس",
    sub: "💍",
    icon: Gem,
    image: weddingImg,
    intro:
      "يوم عرسنا كان من أجمل وأهم الأيام بحياتي، اليوم اللي استنيته بفرح وحماس كبير. كل لحظة فيه كانت مميزة، من أول نظرة لآخر لحظة باليوم. فرحتي ما كانت بس بالعرس والاحتفال، كانت لأنّي عرفت إنو من هاليوم رح نبلّش حياتنا الحقيقية سوا، ونشارك كل تفاصيلها الحلوة والصعبة. مستحيل أنسى شعوري وأنا بشوفك بهاليوم، ورح يضل يوم عرسنا ذكرى محفورة بقلبي طول العمر… اليوم اللي صرتي فيه مرتي رسميًا، وبلّشت أحلى مرحلة بحياتي معك ❤️💍",
    photos: [weddingImg2, weddingImg3, weddingImg4, weddingImg5, weddingImg6],
    sentences: [
      "يوم عرسنا كان من أسعد وأجمل أيام حياتي.",
      "بهاليوم حسّيت إنو بلشنا فصل جديد من حياتنا سوا.",
      "كل لحظة، كل ضحكة وكل نظرة بيناتنا بهاليوم مستحيل أنساها.",
      "كنت مبسوط من قلبي، لأن الشخص اللي بحبه صار شريك حياتي.",
      "كان يوم مليان حب وفرحة، وذكرى رح تضل معنا طول العمر. 🤍",
    ],
  },
  {
    key: "honeymoon",
    label: "شهر العسل",
    sub: "🌴",
    icon: Heart,
    image: honeymoonImg,
    intro:
      "شهر العسل كان من أحلى وأمتع الفترات اللي عشناها سوا، كانت أول رحلة إلنا كزوج وزوجة وأول أيام نعيشها سوا بعد العرس. كل لحظة كانت إلها طعم خاص، من الضحك والمغامرات للأوقات الهادية اللي قضيناها مع بعض. استمتعت بكل ثانية معك، وصنعنا ذكريات بتمنى نرجع نعيشها مرة ثانية. والأجمل بكل الرحلة ما كان المكان ولا السفر… الأجمل كان إنك كنتِ معي، وإنها كانت بداية حياتنا الجديدة سوا ❤️🌴",
    photos: [
      honeymoonImg2,
      honeymoonImg3,
      honeymoonImg4,
      honeymoonImg5,
      honeymoonImg6,
      honeymoonImg7,
      honeymoonImg8,
    ],
    video: honeymoonVideo,
    sentences: [
      "شهر العسل كان من أحلى الفترات اللي عشناها سوا.",
      "انبسطت بكل لحظة، من أبسط التفاصيل لأجمل المغامرات.",
      "ضحكنا، طلعنا، سافرنا وعشنا أيام بتمنى لو ترجع من جديد.",
      "أحلى شي بالرحلة ما كان المكان… كان إنك كنت معي. ❤️",
      "كانت أول رحلة إلنا كزوج وزوجة، وعشان هيك رح تضل إلها مكانة خاصة بقلبي.",
    ],
  },
];

const PAGE_BG =
  "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,160,168,0.18) 0%, transparent 60%), radial-gradient(circle at 85% 90%, rgba(201,139,160,0.12) 0%, transparent 55%), linear-gradient(180deg, #2B0F1E 0%, #1A0A16 55%, #120710 100%)";

function FloatingHearts() {
  const hearts = [
    { left: "8%", size: 14, delay: "0s", duration: "9s" },
    { left: "22%", size: 9, delay: "2.5s", duration: "11s" },
    { left: "68%", size: 12, delay: "1s", duration: "10s" },
    { left: "85%", size: 8, delay: "3.5s", duration: "8s" },
    { left: "48%", size: 10, delay: "5s", duration: "12s" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h, i) => (
        <Heart
          key={i}
          className="absolute text-[#E8A0A8]/25"
          style={{
            left: h.left,
            bottom: "-5%",
            width: h.size,
            height: h.size,
            animation: `float-up ${h.duration} ease-in ${h.delay} infinite`,
          }}
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function PageShell({ children, maxWidth = "max-w-5xl" }) {
  return (
    <div
      dir="rtl"
      className="relative min-h-screen w-full overflow-hidden p-6 sm:p-12 animate-[page-fade_0.6s_ease-out]"
      style={{ background: PAGE_BG }}
    >
      <FloatingHearts />
      <div className={`relative ${maxWidth} mx-auto`}>{children}</div>
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(1.3); opacity: 0; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes page-fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function MemoriesPage({ onSelectCategory }) {
  return (
    <PageShell>
      <div className="flex flex-col items-center mb-12 animate-[fade-in-up_0.7s_ease-out_both]">
        <Heart
          className="w-6 h-6 text-[#E8A0A8] mb-4"
          fill="currentColor"
          strokeWidth={0}
        />
        <h1
          className="text-center text-[#F7ECE1] text-4xl sm:text-5xl mb-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          يلا نتذكّر هاللحظات
        </h1>
        <p className="text-[#C98BA0] text-sm tracking-wide">
          ❤️ كل لحظة إلها حكاية
        </p>
        <p className="text-[#F7ECE1] text-base mt-2">
          أحلى زوجة بالدنيا، زوجتي ❤️
        </p>
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#E8A0A8]/60 to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {CATEGORIES.map(({ key, label, sub, icon: Icon, image }, i) => (
          <button
            key={key}
            type="button"
            onClick={() => onSelectCategory(key)}
            style={{ animationDelay: `${i * 0.12}s` }}
            className="group relative aspect-[3/4] rounded-[28px] overflow-hidden border border-[#5A2A3A] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:rotate-[0.5deg] hover:border-[#E8A0A8]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A0A8] animate-[fade-in-up_0.7s_ease-out_both]"
          >
            <img
              src={image}
              alt={label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120710] via-[#1A0A16]/40 to-[#2B0F1E]/10" />
            <div className="absolute inset-0 border border-white/10 rounded-[28px]" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE1]/10 backdrop-blur-sm border border-[#E8A0A8]/50 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <Icon className="w-4 h-4 text-[#E8A0A8]" strokeWidth={1.75} />
              </div>
              <span
                className="text-[#F7ECE1] text-xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {label}
              </span>
              <span className="text-sm">{sub}</span>
            </div>
          </button>
        ))}
      </div>
    </PageShell>
  );
}

function CategoryDetailPage({ category, onBack }) {
  const { label, sub, photos, sentences, intro, video } = category;

  return (
    <PageShell maxWidth="max-w-2xl">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-[#C98BA0] hover:text-[#E8A0A8] text-sm mb-10 transition-colors animate-[fade-in-up_0.6s_ease-out_both]"
      >
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
        رجوع
      </button>

      <div className="flex flex-col items-center mb-10 animate-[fade-in-up_0.7s_ease-out_both]">
        <Sparkles className="w-5 h-5 text-[#E8A0A8] mb-4" />
        <h1
          className="text-center text-[#F7ECE1] text-4xl sm:text-5xl mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {label}
        </h1>
        <span className="text-lg">{sub}</span>
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#E8A0A8]/60 to-transparent" />
      </div>

      {intro && (
        <p
          className="text-center text-[#F7ECE1]/90 text-base sm:text-lg leading-loose mb-14 px-2 animate-[fade-in-up_0.7s_ease-out_both]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {intro}
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 animate-[fade-in-up_0.8s_ease-out_both]"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-[#5A2A3A] shadow-[0_15px_35px_-15px_rgba(0,0,0,0.6)] bg-[#120710] transition-transform duration-500 hover:scale-105">
              <img
                src={photo}
                alt={`${label} ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            {sentences[i] && (
              <p className="text-center text-[#F7ECE1] text-sm leading-relaxed px-1">
                {sentences[i]}
              </p>
            )}
          </div>
        ))}
      </div>

      {video && (
        <div className="mt-10 rounded-[24px] overflow-hidden border border-[#5A2A3A] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] animate-[fade-in-up_0.8s_ease-out_both]">
          <video
            src={video}
            controls
            playsInline
            className="w-full h-auto block"
          />
        </div>
      )}

      {sentences.slice(photos.length).length > 0 && (
        <div className="flex flex-col gap-4 mt-10">
          {sentences.slice(photos.length).map((sentence, i) => (
            <div
              key={`extra-${i}`}
              className="flex items-center gap-3 px-4 animate-[fade-in-up_0.8s_ease-out_both]"
              style={{ animationDelay: `${(photos.length + i) * 0.12}s` }}
            >
              <div className="hidden sm:block h-px w-8 bg-gradient-to-l from-transparent to-[#E8A0A8]/50" />
              <p
                className="text-center text-[#F7ECE1] text-lg leading-relaxed mx-auto"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {sentence}
              </p>
              <div className="hidden sm:block h-px w-8 bg-gradient-to-r from-transparent to-[#E8A0A8]/50" />
            </div>
          ))}
        </div>
      )}
    </PageShell>
  );
}

export default function BirthdayGate() {
  const [value, setValue] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [showMemories, setShowMemories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [shake, setShake] = useState(false);
  const [touched, setTouched] = useState(false);

  if (showMemories) {
    if (activeCategory) {
      const category = CATEGORIES.find((c) => c.key === activeCategory);
      return (
        <CategoryDetailPage
          category={category}
          onBack={() => setActiveCategory(null)}
        />
      );
    }
    return <MemoriesPage onSelectCategory={setActiveCategory} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    const cleaned = value.trim();
    if (CORRECT_ANSWERS.includes(cleaned)) {
      setUnlocked(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div
      dir="rtl"
      className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden"
      style={{ background: PAGE_BG }}
    >
      <FloatingHearts />
      <div className="relative w-full max-w-md">
        {!unlocked ? (
          <form
            onSubmit={handleSubmit}
            className={`relative rounded-[28px] border border-[#5A2A3A] bg-[#2B0F1E]/70 backdrop-blur-md p-8 sm:p-10 shadow-[0_25px_70px_-20px_rgba(232,160,168,0.25)] transition-transform ${
              shake ? "animate-[shake_0.5s_ease-in-out]" : ""
            }`}
          >
            <div className="flex justify-center mb-7">
              <div className="w-16 h-16 rounded-full bg-[#E8A0A8]/10 border border-[#E8A0A8]/40 flex items-center justify-center">
                <Heart
                  className="w-6 h-6 text-[#E8A0A8]"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </div>
            </div>

            <h1
              className="text-center text-[#F7ECE1] text-2xl sm:text-3xl mb-3 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              اليوم يوم مميز بالنسبة إليّ.
            </h1>
            <p className="text-center text-[#C98BA0] text-sm mb-9 leading-relaxed">
              عشان نكمل، لازم تكتب تاريخ مميز إلنا. ❤️
            </p>

            <input
              type="date"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`w-full text-center text-lg tracking-wider rounded-xl bg-[#120710] border ${
                touched && !CORRECT_ANSWERS.includes(value.trim())
                  ? "border-[#D9647A]"
                  : "border-[#5A2A3A]"
              } text-[#F7ECE1] placeholder-[#8A5C6B] py-3.5 px-4 outline-none focus:border-[#E8A0A8] transition-colors`}
              style={{ colorScheme: "dark" }}
              autoFocus
            />

            {touched && !CORRECT_ANSWERS.includes(value.trim()) && (
              <p className="text-[#D9647A] text-xs mt-3 text-center">
                زة مش التاريخ الصح، جرّب/ي مرة تانية
              </p>
            )}

            <button
              type="submit"
              className="mt-9 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-[#E8A0A8] to-[#D98A9B] hover:from-[#F0B0B8] hover:to-[#E39AAB] text-[#2B0F1E] font-medium py-3.5 transition-colors"
            >
              دخول
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            </button>
          </form>
        ) : (
          <div className="relative rounded-[28px] border border-[#E8A0A8]/40 bg-[#2B0F1E]/70 backdrop-blur-md p-10 text-center shadow-[0_25px_80px_-15px_rgba(232,160,168,0.35)]">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#E8A0A8]/15 border border-[#E8A0A8]/50 flex items-center justify-center">
                <Heart
                  className="w-7 h-7 text-[#E8A0A8]"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </div>
            </div>
            <h2
              className="text-[#F7ECE1] text-3xl mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              أهلاً فيك ❤️
            </h2>
            <p className="text-[#C98BA0] text-sm leading-relaxed mb-9">
              التاريخ الصح، اليوم الصح. يلا نكمل سوا
            </p>
            <button
              onClick={() => setShowMemories(true)}
              className="w-full rounded-xl bg-gradient-to-l from-[#E8A0A8] to-[#D98A9B] hover:from-[#F0B0B8] hover:to-[#E39AAB] text-[#2B0F1E] font-medium py-3.5 transition-colors"
            >
              كمل
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(1.3); opacity: 0; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes page-fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
