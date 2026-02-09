interface TimelineProps {
  steps: { number: string; title: string; description: string }[];
}

export const TimelineBlock = ({ steps }: TimelineProps) => {
  return (
    <div className="my-10 rounded-2xl py-8 px-6 md:px-10" style={{ backgroundColor: 'rgba(248, 246, 242, 0.7)' }}>
      <div className="relative pl-14">
        {steps.map((step, i) => (
          <div key={i} className="relative pb-10 last:pb-0">
            {/* Vertical line */}
            {i < steps.length - 1 && (
              <div className="absolute left-[-34px] top-12 w-[1px] h-[calc(100%-16px)]" style={{ backgroundColor: 'rgba(184, 151, 90, 0.2)' }} />
            )}
            {/* Gold circle */}
            <div
              className="absolute left-[-46px] top-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-medium"
              style={{
                backgroundColor: 'rgba(184, 151, 90, 0.9)',
                boxShadow: '0 4px 12px rgba(184, 151, 90, 0.25)',
              }}
            >
              {step.number}
            </div>
            {/* Content */}
            <div>
              <h4 className="text-navy font-medium text-[15px] mb-1.5">{step.title}</h4>
              <p className="text-neutral-500 text-[14px] font-light leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
