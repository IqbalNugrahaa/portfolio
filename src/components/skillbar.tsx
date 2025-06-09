interface SkillBarProps {
    label: string;
    percentage: number; // nilai dari 0 hingga 100
}

export default function SkillBar({ label, percentage }: SkillBarProps) {
    return (
        <div className="mb-4">
            <div className="text-black font-semibold mb-1">{label}</div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full">
                <div
                    className="absolute h-2 bg-orange-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                />
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-orange-500 rounded-full"
                    style={{ left: `calc(${percentage}% - 8px)` }}
                />
            </div>
        </div>
    );
}