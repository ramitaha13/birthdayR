import React, { useState } from "react";
import {
  Heart,
  ArrowLeft,
  ArrowRight,
  Gem,
  HeartHandshake,
} from "lucide-react";
import honeymoonImg from "../assets/1.JPG";
import weddingImg from "../assets/2.JPG";
import engagementImg from "../assets/3.JPG";

const CORRECT_ANSWERS = ["2024-06-19"];

const CATEGORIES = [
  {
    key: "engagement",
    label: "الخطوبة",
    sub: "💕",
    icon: HeartHandshake,
    image: engagementImg,
    // TODO: add more photos from this chapter — just add more entries here.
    photos: [engagementImg],
    // TODO: replace these with your own words to each other.
    sentences: [
      "من أول يوم حسيت إنك الشخص الصح.",
      "يوم الخطوبة كان بداية أحلى حكاية.",
      "كل لحظة معك كانت تستاهل الانتظار.",
    ],
  },
  {
    key: "wedding",
    label: "العرس",
    sub: "💍",
    icon: Gem,
    image: weddingImg,
    photos: [weddingImg],
    sentences: [
      "يوم العرس وقفنا سوا قدام الكل وقلنا نعم لبعض.",
      "من هداك اليوم صرنا احنا الاثنين قصة وحدة.",
      "كل تفصيل بهداك اليوم كان نابع من حبنا.",
    ],
  },
  {
    key: "honeymoon",
    label: "شهر العسل",
    sub: "❤️",
    icon: Heart,
    image: honeymoonImg,
    photos: [honeymoonImg],
    sentences: [
      "أول أيامنا لحالنا، وكل يوم كان أحلى من يلي قبله.",
      "ضحكنا، تهنا، واكتشفنا الدنيا سوا.",
      "شهر العسل خلص، بس القصة لسا مكملة.",
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

function MemoriesPage({ onSelectCategory }) {
  return (
    <div
      dir="rtl"
      className="relative min-h-screen w-full overflow-hidden p-6 sm:p-12"
      style={{ background: PAGE_BG }}
    >
      <FloatingHearts />
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12">
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
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#E8A0A8]/60 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map(({ key, label, sub, icon: Icon, image }) => (
            <button
              key={key}
              type="button"
              onClick={() => onSelectCategory(key)}
              className="group relative aspect-[3/4] rounded-[28px] overflow-hidden border border-[#5A2A3A] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:border-[#E8A0A8]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A0A8]"
            >
              <img
                src={image}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120710] via-[#1A0A16]/40 to-[#2B0F1E]/10" />
              <div className="absolute inset-0 border border-white/10 rounded-[28px]" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#F7ECE1]/10 backdrop-blur-sm border border-[#E8A0A8]/50 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
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
      </div>

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(1.3); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function CategoryDetailPage({ category, onBack }) {
  const { label, sub, photos, sentences } = category;
  return (
    <div
      dir="rtl"
      className="relative min-h-screen w-full overflow-hidden p-6 sm:p-12"
      style={{ background: PAGE_BG }}
    >
      <FloatingHearts />
      <div className="relative max-w-2xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-[#C98BA0] hover:text-[#E8A0A8] text-sm mb-10 transition-colors"
        >
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
          رجوع
        </button>

        <div className="flex flex-col items-center mb-12">
          <Heart
            className="w-6 h-6 text-[#E8A0A8] mb-4"
            fill="currentColor"
            strokeWidth={0}
          />
          <h1
            className="text-center text-[#F7ECE1] text-4xl sm:text-5xl mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {label}
          </h1>
          <span className="text-lg">{sub}</span>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#E8A0A8]/60 to-transparent" />
        </div>

        <div className="flex flex-col gap-10">
          {photos.map((photo, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="rounded-[28px] overflow-hidden border border-[#5A2A3A] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]">
                <img
                  src={photo}
                  alt={`${label} ${i + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
              {sentences[i] && (
                <p
                  className="text-center text-[#F7ECE1] text-lg sm:text-xl leading-relaxed px-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {sentences[i]}
                </p>
              )}
            </div>
          ))}

          {sentences.slice(photos.length).map((sentence, i) => (
            <p
              key={`extra-${i}`}
              className="text-center text-[#F7ECE1] text-lg sm:text-xl leading-relaxed px-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {sentence}
            </p>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(1.3); opacity: 0; }
        }
      `}</style>
    </div>
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
      `}</style>
    </div>
  );
}
