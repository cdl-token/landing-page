import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#AF52DE',
			custom: {
				bg: "#060606",
			}
  		},
  		fontFamily: {
  			neue: ["var(--font-neue-machina)"],
  			apfel: ["var(--font-apfel)"]
  		},
  		animation: {
  			slideIn: 'slideIn 1s ease-out forwards'
  		},
  		keyframes: {
  			slideIn: {
  				'0%': {
  					transform: 'translateX(-200px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
