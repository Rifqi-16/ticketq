export interface Ticket {
  id: number;
  eventName: string;
  location: string;
  time: string;
  isUsed: boolean;
}

export const ticketsData: Ticket[] = [
  {
    id: 1,
    eventName: "Cigarettes After Sex - X's World Tour 2025",
    location: "Beach City International Stadium (BCIS), Ancol, Jakarta Utara",
    time: "2025-01-17T20:00:00Z",
    isUsed: true
  },
  {
    id: 2,
    eventName: "Maroon 5 - Maroon 5 in Asia 2025",
    location: "Jakarta International Stadium (JIS), Jakarta Utara",
    time: "2025-02-01T19:30:00Z",
    isUsed: true
  },
  {
    id: 3,
    eventName: "NIKI - Buzz World Tour 2024–2025 (Night 1)",
    location: "Beach City International Stadium (BCIS), Ancol, Jakarta Utara",
    time: "2025-02-14T20:00:00Z",
    isUsed: true
  },
  {
    id: 4,
    eventName: "Green Day - Green Day Live in Jakarta",
    location: "Carnaval Ancol, Jakarta Utara",
    time: "2025-02-15T19:30:00Z",
    isUsed: true
  },
  {
    id: 5,
    eventName: "NIKI - Buzz World Tour 2024–2025 (Night 2)",
    location: "Beach City International Stadium (BCIS), Ancol, Jakarta Utara",
    time: "2025-02-16T20:00:00Z",
    isUsed: true
  },
  {
    id: 6,
    eventName: "My Chemical Romance - The Black Parade World Tour",
    location: "Jakarta International Stadium",
    time: "2025-08-15T20:00:00Z",
    isUsed: false
  },
  {
    id: 7,
    eventName: "Linkin Park - From Zero World Tour",
    location: "Gelora Bung Karno Stadium, Jakarta",
    time: "2025-08-11T19:30:00Z",
    isUsed: false
  },
  {
    id: 8,
    eventName: "Imagine Dragons - Mercury World Tour",
    location: "Tennis Indoor Senayan, Jakarta",
    time: "2025-08-22T19:30:00Z",
    isUsed: false
  },
  {
    id: 9,
    eventName: "Bruno Mars - 24K Magic World Tour",
    location: "Indonesia Convention Exhibition (ICE), BSD",
    time: "2025-09-13T20:00:00Z",
    isUsed: false
  },
  {
    id: 10,
    eventName: "OneRepublic - Never Ending Summer Tour",
    location: "Tennis Indoor Senayan, Jakarta",
    time: "2025-08-14T20:00:00Z",
    isUsed: false
  },
  {
    id: 11,
    eventName: "Coldplay - Music of the Spheres World Tour",
    location: "Gelora Bung Karno Stadium, Jakarta",
    time: "2025-11-15T19:00:00Z",
    isUsed: false
  },
  {
    id: 12,
    eventName: "Dua Lipa - Radical Optimism Tour",
    location: "Jakarta International Stadium",
    time: "2025-12-07T20:00:00Z",
    isUsed: false
  }
];