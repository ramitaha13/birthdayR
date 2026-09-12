import React, { useState } from "react";
import { Lock, Unlock, Sparkles, ArrowLeft } from "lucide-react";

const CORRECT_ANSWERS = ["2024-06-19"];

export default function BirthdayGate() {
  const [value, setValue] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [shake, setShake] = useState(false);
  const [touched, setTouched] = useState(false);

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
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, #2A1B4D 0%, #17102B 55%, #0F0A1D 100%)",
      }}
    >
      <div className="w-full max-w-md">
        {!unlocked ? (
          <form
            onSubmit={handleSubmit}
            className={`relative rounded-2xl border border-[#3E2E63] bg-[#1D1436]/80 backdrop-blur-sm p-8 sm:p-10 shadow-[0_0_60px_-15px_rgba(232,185,74,0.25)] transition-transform ${
              shake ? "animate-[shake_0.5s_ease-in-out]" : ""
            }`}
          >
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-[#E8B94A]/10 border border-[#E8B94A]/40 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#E8B94A]" strokeWidth={1.75} />
              </div>
            </div>

            <h1
              className="text-center text-[#F5F0E6] text-2xl mb-2 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              اليوم يوم مميز بالنسبة إليّ.
            </h1>
            <p className="text-center text-[#B8AAD6] text-sm mb-8 leading-relaxed">
              عشان نكمل، لازم تكتب تاريخ مميز إلنا. ❤️
            </p>

            <input
              type="date"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`w-full text-center text-lg tracking-wider rounded-lg bg-[#0F0A1D] border ${
                touched && !CORRECT_ANSWERS.includes(value.trim())
                  ? "border-[#C9526B]"
                  : "border-[#3E2E63]"
              } text-[#F5F0E6] placeholder-[#5C4E80] py-3 px-4 outline-none focus:border-[#E8B94A] transition-colors`}
              style={{ colorScheme: "dark" }}
              autoFocus
            />

            {touched && !CORRECT_ANSWERS.includes(value.trim()) && (
              <p className="text-[#C9526B] text-xs mt-2 text-center">
                זה לא התאריך. נסה/י שוב
              </p>
            )}

            <button
              type="submit"
              className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-[#E8B94A] hover:bg-[#F2C866] text-[#1D1436] font-medium py-3 transition-colors"
            >
              כניסה למערכת
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            </button>
          </form>
        ) : (
          <div className="relative rounded-2xl border border-[#E8B94A]/40 bg-[#1D1436]/80 backdrop-blur-sm p-10 text-center shadow-[0_0_80px_-10px_rgba(232,185,74,0.35)]">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#E8B94A]/15 border border-[#E8B94A]/50 flex items-center justify-center">
                <Unlock className="w-7 h-7 text-[#E8B94A]" strokeWidth={1.75} />
              </div>
            </div>
            <div className="flex justify-center gap-1 mb-4 text-[#E8B94A]">
              <Sparkles className="w-4 h-4" />
              <Sparkles className="w-5 h-5" />
              <Sparkles className="w-4 h-4" />
            </div>
            <h2
              className="text-[#F5F0E6] text-3xl mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ברוך הבא פנימה
            </h2>
            <p className="text-[#B8AAD6] text-sm leading-relaxed mb-8">
              התאריך הנכון, היום הנכון. המערכת פתוחה עבורך
            </p>
            <button
              onClick={() => alert("כאן תתבצע ההפניה למערכת האמיתית")}
              className="w-full rounded-lg bg-[#E8B94A] hover:bg-[#F2C866] text-[#1D1436] font-medium py-3 transition-colors"
            >
              המשך למערכת
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
      `}</style>
    </div>
  );
}
