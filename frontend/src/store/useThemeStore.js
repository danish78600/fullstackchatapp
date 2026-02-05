import { create } from "zustand";

export const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("chat-theme") || "coffee";

  // 🔑 APPLY THEME ON LOAD
  document.documentElement.setAttribute("data-theme", savedTheme);

  return {
    theme: savedTheme,

    setTheme: (theme) => {
      localStorage.setItem("chat-theme", theme);

      // 🔑 APPLY THEME GLOBALLY
      document.documentElement.setAttribute("data-theme", theme);

      set({ theme });
    },
  };
});
