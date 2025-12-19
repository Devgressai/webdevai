/**
 * Pillar Bar Component
 * Displays a pillar score as a progress bar
 */

interface PillarBarProps {
  pillarId: string
  pillarName: string
  score: number // 0-100
  maxScore?: number // Default 100
}

export function PillarBar({
  pillarId,
  pillarName,
  score,
  maxScore = 100,
}: PillarBarProps) {
  const percentage = Math.min((score / maxScore) * 100, 100)
  const colorClass =
    score >= 80
      ? 'bg-green-500'
      : score >= 60
        ? 'bg-yellow-500'
        : score >= 40
          ? 'bg-orange-500'
          : 'bg-red-500'

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200">{pillarName}</span>
        <span className="text-slate-400">{score.toFixed(1)} / {maxScore}</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
        <div
          className={`h-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

