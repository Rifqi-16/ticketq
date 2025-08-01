import { Ticket } from '@/data/tickets';
import { format } from 'date-fns';

interface TicketCardProps {
  ticket: Ticket;
  onToggleUsed: (id: number) => void;
}

export default function TicketCard({ ticket, onToggleUsed }: TicketCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: format(date, 'MMM dd, yyyy'),
      time: format(date, 'HH:mm')
    };
  };

  const { date, time } = formatDate(ticket.time);

  return (
    <div className={`ticket-card ${
      ticket.isUsed ? 'used' : 'available'
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1 neon-text uppercase tracking-wider">
            {ticket.eventName}
          </h3>
        </div>
        <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded ${
          ticket.isUsed 
            ? 'bg-red-500/20 text-red-400 border border-red-500' 
            : 'bg-green-500/20 text-green-400 border border-green-500'
        }`} style={{
          boxShadow: ticket.isUsed 
            ? '0 0 10px rgba(239, 68, 68, 0.3)' 
            : '0 0 10px rgba(34, 197, 94, 0.3)'
        }}>
          {ticket.isUsed ? 'Used' : 'Available'}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" style={{boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'}}></div>
          <div>
            <span className="text-xs text-cyan-400 uppercase tracking-wider block">Location</span>
            <span className="text-sm font-medium">{ticket.location}</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" style={{boxShadow: '0 0 10px rgba(255, 0, 255, 0.5)'}}></div>
          <div>
            <span className="text-xs text-pink-400 uppercase tracking-wider block">Date & Time</span>
            <span className="text-sm font-medium">{date} at {time}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 flex items-center justify-between" style={{borderTop: '1px solid rgba(0, 255, 255, 0.3)'}}>
        <div className="text-xs text-cyan-400 uppercase tracking-wider">
          ID: #{ticket.id.toString().padStart(6, '0')}
        </div>
        <button
          onClick={() => onToggleUsed(ticket.id)}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-2 rounded transition-all duration-300 ${
            ticket.isUsed
              ? 'border-green-500 text-green-400 hover:bg-green-500 hover:text-black'
              : 'border-red-500 text-red-400 hover:bg-red-500 hover:text-black'
          }`}
          style={{
            boxShadow: ticket.isUsed
              ? '0 0 10px rgba(34, 197, 94, 0.3)'
              : '0 0 10px rgba(239, 68, 68, 0.3)'
          }}
        >
          {ticket.isUsed ? 'Reactivate' : 'Mark Used'}
        </button>
      </div>
    </div>
  );
}