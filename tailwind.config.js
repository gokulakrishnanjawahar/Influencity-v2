/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ['class', '[data-theme="dark"]'],
      content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
      ],
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        extend: {
          colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
            'galactic-blue': 'hsl(var(--galactic-blue))',
            'neon-purple': 'hsl(var(--neon-purple))',
            'space-black': 'hsl(var(--space-black))',
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
          },
          fontFamily: {
            sans: ['"Orbitron"', 'sans-serif'],
            body: ['"Roboto Mono"', 'monospace'],
          },
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' },
            },
            'pulse-glow': {
              '0%, 100%': { boxShadow: '0 0 5px hsl(var(--galactic-blue)), 0 0 10px hsl(var(--galactic-blue)), 0 0 15px hsl(var(--neon-purple))', opacity: '1' },
              '50%': { boxShadow: '0 0 10px hsl(var(--galactic-blue)), 0 0 20px hsl(var(--galactic-blue)), 0 0 30px hsl(var(--neon-purple))', opacity: '0.8' },
            },
            'star-twinkle': {
              '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
              '50%': { opacity: '1', transform: 'scale(1.2)' },
            },
            'slide-in- ticker': {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(-100%)' },
            }
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
            'star-twinkle': 'star-twinkle 3s infinite ease-in-out',
            'slide-in-ticker': 'slide-in-ticker 20s linear infinite',
          },
          backgroundImage: {
            'glassmorphism': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            'galactic-gradient': 'linear-gradient(135deg, hsl(var(--galactic-blue)) 0%, hsl(var(--neon-purple)) 100%)',
          },
          boxShadow: {
            'glow-blue': '0 0 15px 5px hsla(var(--galactic-blue), 0.7), 0 0 5px 1px hsla(var(--galactic-blue), 0.5)',
            'glow-purple': '0 0 15px 5px hsla(var(--neon-purple), 0.7), 0 0 5px 1px hsla(var(--neon-purple), 0.5)',
          }
        },
      },
      plugins: [require('tailwindcss-animate')],
    };