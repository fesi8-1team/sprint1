"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggler({ colorTheme }: { colorTheme: boolean }) {
  // 서버에서 받은 초기 값으로 설정
  const [isDark, setIsDark] = useState(colorTheme);

  // 현재 테마 상태 확인
  useEffect(() => {
    // body의 클래스를 확인해서 현재 테마 상태 가져오기
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);

    // body의 클래스 토글
    if (newMode) {
      // 다크모드로 변경
      document.documentElement.classList.add("dark");
      document.cookie = "mode=dark; path=/; max-age=31536000";
    } else {
      // 라이트모드로 변경 (dark 제거)
      document.documentElement.classList.remove("dark");
      document.cookie = "mode=light; path=/; max-age=31536000";
    }
  };

  return (
    <div className="flex items-center gap-2 transition-colors">
      <span className="text-md font-bold">Theme</span>
      <button
        onClick={toggleTheme}
        className={cn(
          "relative flex h-6 w-12 items-center rounded-full transition-colors duration-200",
          isDark ? "bg-yellow-300" : "bg-blue-100",
        )}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div
          className={cn(
            "absolute flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-200",
            isDark
              ? "translate-x-7 bg-gray-900"
              : "translate-x-1 bg-yellow-400",
          )}
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-yellow-400" />
          ) : (
            <Sun className="h-3 w-3 text-white" />
          )}
        </div>
      </button>
    </div>
  );
}
