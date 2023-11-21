import type { Config } from 'tailwindcss'
import { colors, spacing, radii, fonts } from '@repo/tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    spacing,
    borderRadius: radii,
    fontFamily: {sans: fonts.fontFamilies.default},
    fontWeight: fonts.fontWeights,
    fontSize: fonts.fontSizes,
    lineHeight: fonts.lineHeights,
  },
  plugins: [],
}
export default config
