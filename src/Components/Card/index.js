import React, { useEffect, useState } from 'react';

const TicketCard = () => {
  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); // Replace with your API URL
      const data = await response.json();
      setTickets(data.tickets);
    } catch (error) {
      console.error('Error fetching ticket data:', error);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div className="container">
      {tickets.map((ticket) => (
        <div className="card_item" key={ticket.id}>
          <div className="card_inner">
            <h2>{ticket.id}</h2>
            <p>{ticket.title}</p>
            <p>{ticket.tag.join(', ')}</p>
            <p>{ticket.userId}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketCard;
