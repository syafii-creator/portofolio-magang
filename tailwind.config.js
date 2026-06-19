/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        surface: '#1E293B',
        accent: '#38BDF8',
        success: '#22C55E',
        card: 'rgba(30, 41, 59, 0.85)',
        glow: '#7dd3fc'
      },
      boxShadow: {
        soft: '0 25px 60px rgba(15, 23, 42, 0.35)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(34,197,94,0.16), transparent 20%)'
      }
    }
  },
  plugins: []
};
