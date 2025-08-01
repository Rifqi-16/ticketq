# TicketQ - Futuristic Event Ticket Management System

🎫 A cyberpunk-themed, futuristic frontend application for managing and viewing concert tickets with stunning neon aesthetics and sci-fi design elements.

## 🚀 Features

- **Cyberpunk UI/UX**: Futuristic design with neon glows, gradient borders, and sci-fi aesthetics
- **Concert Ticket Management**: View, filter, and toggle ticket status for major concert events
- **Smart Filtering**: Filter tickets by status (All Tickets, Available, Used) with real-time counts
- **Neon Interactive Cards**: Beautiful ticket cards with animated gradient borders and neon effects
- **System Status Dashboard**: Real-time statistics with cyberpunk-styled metrics display
- **Glitch Effects**: Text glitch animations and neon text shadows for authentic cyberpunk feel
- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Well-structured, reusable React components with futuristic styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5 with App Router and Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom cyberpunk theme
- **Date Handling**: date-fns 4.1.0
- **State Management**: React 19.1.0 Hooks (useState, useMemo)
- **UI Effects**: Custom CSS animations, neon glows, and gradient effects
- **Font**: Orbitron and Courier New for futuristic typography

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with ticket management logic
├── components/
│   ├── FilterBar.tsx        # Filter controls and statistics
│   └── TicketCard.tsx       # Individual ticket card component
└── data/
    └── tickets.ts           # Hardcoded ticket data and TypeScript interfaces
```

## 🎯 Data Structure

Each concert ticket follows this structure:

```typescript
interface Ticket {
  id: number;
  eventName: string;    // Concert name and tour
  location: string;     // Venue name and city
  time: string;         // ISO 8601 format
  isUsed: boolean;      // Ticket usage status
}
```

### Sample Concert Data
The app includes real concert data featuring major artists like:
- Cigarettes After Sex - X's World Tour 2025
- Maroon 5 - Maroon 5 in Asia 2025
- NIKI - Buzz World Tour 2024–2025
- My Chemical Romance - The Black Parade World Tour
- Linkin Park - From Zero World Tour
- And many more exciting concerts!

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ticketq
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Cyberpunk Design Features

### Visual Elements
- **Neon Aesthetics**: Cyan, pink, and green neon color scheme with glowing effects
- **Animated Gradient Borders**: Dynamic gradient borders on ticket cards with mask effects
- **Glitch Text Effects**: Cyberpunk-style text glitch animations on the main title
- **Backdrop Blur**: Futuristic glass morphism effects throughout the interface
- **Animated Background**: Pulsing radial gradients creating depth and atmosphere
- **Custom Scrollbar**: Neon-themed scrollbar with gradient colors

### Interactive Elements
- **Neon Buttons**: Glowing buttons with hover effects and active states
- **Card Hover Effects**: 3D transforms with neon shadow projections
- **Status Indicators**: Color-coded badges with neon glow effects
- **Real-time Updates**: Instant visual feedback with smooth transitions

### User Experience
- **Futuristic Typography**: Orbitron font family for sci-fi aesthetics
- **Smart Filtering**: Intuitive neon-styled filter buttons with live counts
- **Empty States**: Cyberpunk-themed empty state messages
- **Responsive Layout**: Optimized for all devices while maintaining the futuristic theme
- **Focus States**: Neon glow focus indicators for accessibility

## 🔧 Customization

### Adding New Concert Tickets

Edit `src/data/tickets.ts` to add more concert tickets:

```typescript
export const ticketsData: Ticket[] = [
  // Add your concert tickets here
  {
    id: 13,
    eventName: "Your Artist - Tour Name",
    location: "Venue Name, City",
    time: "2025-12-31T20:00:00Z",
    isUsed: false
  }
];
```

### Styling Modifications

The app uses Tailwind CSS 4 with extensive custom cyberpunk styling:

- **Neon Colors**: Modify CSS variables in `src/app/globals.css` (--neon-cyan, --neon-pink, etc.)
- **Animations**: Customize glitch effects, background pulses, and hover animations
- **Components**: Update neon button styles, ticket card effects, and gradient borders
- **Typography**: Adjust Orbitron font settings and neon text shadows

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

## 🎯 Key Components

### TicketCard
- Displays concert ticket information with neon styling
- Interactive status toggling with glowing buttons
- Animated gradient borders and hover effects
- Date/time formatting with date-fns
- Color-coded status indicators (Available/Used)

### FilterBar
- Cyberpunk-styled filter controls (All Tickets, Available, Used)
- Real-time ticket count display
- Neon button effects with active states
- Responsive layout with futuristic design

### Main Page (Home)
- React state management for tickets and filters
- System Status dashboard with neon metrics
- Responsive grid layout for ticket cards
- Futuristic header with glitch text effects
- Cyberpunk-themed empty states
- Animated background and footer

## 🚀 Deployment

This Next.js application can be deployed on various platforms:

- **Vercel** (Recommended): `vercel --prod`
- **Netlify**: Connect your Git repository


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with Next.js, TypeScript, and Tailwind CSS**  
**Designed by Rifqi-16 with cyberpunk aesthetics**
