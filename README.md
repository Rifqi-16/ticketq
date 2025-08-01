# TicketQ - Event Ticket Viewer UI

🎫 A modern, responsive frontend application for managing and viewing event tickets with an elegant, out-of-the-box design.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations and hover effects
- **Ticket Management**: View, filter, and toggle ticket status (used/unused)
- **Smart Filtering**: Filter tickets by status (All, Available, Used) with real-time counts
- **Interactive Cards**: Beautiful ticket cards with gradient backgrounds and visual indicators
- **Statistics Dashboard**: Usage statistics with progress bars and visual metrics
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Well-structured, reusable React components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Date Handling**: date-fns
- **State Management**: React Hooks (useState, useMemo)
- **Icons**: Heroicons (via SVG)

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

Each ticket follows this structure:

```typescript
interface Ticket {
  id: number;
  eventName: string;
  location: string;
  time: string; // ISO 8601 format
  isUsed: boolean;
}
```

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

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Beautiful gradient overlays on ticket cards
- **Hover Effects**: Smooth transitions and elevation changes
- **Status Indicators**: Color-coded status badges and visual cues
- **Perforated Edges**: Ticket-like design with decorative circular elements
- **Glass Effects**: Subtle backdrop blur effects for modern aesthetics

### User Experience
- **Instant Feedback**: Real-time updates when toggling ticket status
- **Smart Filtering**: Intuitive filter buttons with count indicators
- **Empty States**: Helpful messages when no tickets match the filter
- **Responsive Layout**: Adapts seamlessly to different screen sizes
- **Accessibility**: Focus states and keyboard navigation support

## 🔧 Customization

### Adding New Tickets

Edit `src/data/tickets.ts` to add more sample tickets:

```typescript
export const ticketsData: Ticket[] = [
  // Add your tickets here
  {
    id: 7,
    eventName: "Your Event Name",
    location: "Your Location",
    time: "2025-12-31T23:59:00Z",
    isUsed: false
  }
];
```

### Styling Modifications

The app uses Tailwind CSS for styling. Key customization points:

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Components**: Update component styles in individual component files
- **Global Styles**: Customize global styles in `src/app/globals.css`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

## 🎯 Key Components

### TicketCard
- Displays individual ticket information
- Handles status toggling
- Responsive design with hover effects
- Date formatting with date-fns

### FilterBar
- Filter controls (All, Available, Used)
- Statistics display with progress bar
- Real-time count updates
- Responsive button layout

### Main Page
- State management for tickets and filters
- Grid layout for ticket cards
- Empty state handling
- Header and footer sections

## 🚀 Deployment

This Next.js application can be deployed on various platforms:

- **Vercel** (Recommended): `vercel --prod`
- **Netlify**: Connect your Git repository
- **Railway**: Deploy with Git integration
- **Docker**: Use the included Dockerfile

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using Next.js and Tailwind CSS**
