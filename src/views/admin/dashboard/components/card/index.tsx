import React, { CSSProperties } from 'react';
import './card.css'

interface DashboardCardProps {
  title: string;
  content: string;
  cardStyle?: CSSProperties;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, content, cardStyle }) => {
  return (
    <div className="dashboard-card" style={cardStyle}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default DashboardCard;
