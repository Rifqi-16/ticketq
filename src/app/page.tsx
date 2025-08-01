'use client';

import { useState, useMemo } from 'react';
import { ticketsData, Ticket } from '@/data/tickets';
import TicketCard from '@/components/TicketCard';
import FilterBar from '@/components/FilterBar';

export default function Home() {
  const [tickets, setTickets] = useState<Ticket[]>(ticketsData);
  const [filter, setFilter] = useState<'all' | 'used' | 'unused'>('all');

  const filteredTickets = useMemo(() => {
    switch (filter) {
      case 'used':
        return tickets.filter(ticket => ticket.isUsed);
      case 'unused':
        return tickets.filter(ticket => !ticket.isUsed);
      default:
        return tickets;
    }
  }, [tickets, filter]);

  const usedTicketsCount = tickets.filter(ticket => ticket.isUsed).length;

  const handleToggleUsed = (id: number) => {
    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === id
          ? { ...ticket, isUsed: !ticket.isUsed }
          : ticket
      )
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="futuristic-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold neon-text glitch" data-text="TicketQ">TicketQ</h1>
              <p className="text-cyan-300 mt-1 uppercase tracking-wider">Event Ticket Management System</p>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-cyan-400 uppercase tracking-wider">Total Tickets</p>
                <p className="text-3xl font-bold neon-text">{tickets.length}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <div className="ticket-card mb-8">
          <h2 className="text-xl font-semibold neon-text mb-4 uppercase tracking-wider">System Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold neon-text">{tickets.length}</div>
              <p className="text-cyan-400 uppercase tracking-wider">Total Events</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">{tickets.length - usedTicketsCount}</div>
              <p className="text-green-400 uppercase tracking-wider">Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400">{usedTicketsCount}</div>
              <p className="text-red-400 uppercase tracking-wider">Used</p>
            </div>
          </div>
        </div>

        <FilterBar
          currentFilter={filter}
          onFilterChange={setFilter}
          totalTickets={tickets.length}
          usedTickets={usedTicketsCount}
        />

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onToggleUsed={handleToggleUsed}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredTickets.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))', border: '2px solid var(--neon-cyan)', boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}>
              <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold neon-text mb-2 uppercase tracking-wider">
              No Events Found
            </h3>
            <p className="text-cyan-400">
              {filter === 'used'
                ? 'No used tickets to display.'
                : filter === 'unused'
                  ? 'No available tickets to display.'
                  : 'No tickets available.'}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16" style={{ background: 'linear-gradient(90deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))', borderTop: '2px solid var(--neon-cyan)', boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-cyan-400">
            <p className="uppercase tracking-wider">&copy; 2025 TicketQ. Rifqi-16.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
