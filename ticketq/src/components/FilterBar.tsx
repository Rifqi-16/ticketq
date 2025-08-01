interface FilterBarProps {
  currentFilter: 'all' | 'used' | 'unused';
  onFilterChange: (filter: 'all' | 'used' | 'unused') => void;
  totalTickets: number;
  usedTickets: number;
}

type ColorType = 'indigo' | 'green' | 'red';

export default function FilterBar({ 
  currentFilter, 
  onFilterChange, 
  totalTickets, 
  usedTickets 
}: FilterBarProps) {
  const unusedTickets = totalTickets - usedTickets;

  const filterOptions: Array<{
    key: 'all' | 'used' | 'unused';
    label: string;
    count: number;
    color: ColorType;
  }> = [
    { key: 'all' as const, label: 'All Tickets', count: totalTickets, color: 'indigo' as const },
    { key: 'unused' as const, label: 'Available', count: unusedTickets, color: 'green' as const },
    { key: 'used' as const, label: 'Used', count: usedTickets, color: 'red' as const }
  ];

  return (
    <div className="ticket-card mb-6">
      <h3 className="text-lg font-semibold neon-text mb-4 uppercase tracking-wider">Filter Events</h3>
      <div className="flex flex-wrap gap-4">
        {filterOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => onFilterChange(option.key)}
            className={`neon-button ${
              currentFilter === option.key ? 'active' : ''
            }`}
          >
            <span className="relative z-10">
              {option.label}
              <span className="ml-2 text-xs opacity-80">({option.count})</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}