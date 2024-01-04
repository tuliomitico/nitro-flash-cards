import type { Config } from 'tailwindcss'
import { colors, spacing, radii, fonts } from '@repo/tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: { ...colors, current: 'currentColor' },
    spacing,
    borderRadius: radii,
    fontFamily: {
      sans: fonts.fontFamilies.default,
      mono: 'monospace'
    },
    fontWeight: fonts.fontWeights,
    fontSize: fonts.fontSizes,
    lineHeight: fonts.lineHeights,
    boxShadow: {
      lg: '0px 0.77px 2.717px 0px rgba(0, 0, 0, 0.02), 0px 2.129px 7.513px 0px rgba(0, 0, 0, 0.03), 0px 5.125px 18.088px 0px rgba(0, 0, 0, 0.04), 0px 17px 60px 0px rgba(0, 0, 0, 0.06)'
    }
  },
  plugins: [],
}
export default config
