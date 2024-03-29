export interface ProgressCircleProps {
    progress: number;
}

const ProgressCircle = ({ progress }: ProgressCircleProps) => (
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle
        className="text-smoke-400 stroke-current"
        strokeWidth="12"
        cx={50}
        cy={50}
        r={40}
        fill="transparent"
      />
      <circle
        className="text-mirage-500 progress-ring__circle stroke-current"
        strokeWidth="12"
        strokeLinecap="round"
        cx={50}
        cy={50}
        r={40}
        fill="transparent"
        strokeDashoffset="calc(400 - (400 * 45) / 100)"
      />
    </svg>
)
export  { ProgressCircle }
