
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to LawMate
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your AI-powered legal assistant for understanding complex legal matters, 
          analyzing documents, and connecting with qualified lawyers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/chatbot"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Try AI Chatbot
          </Link>
          <Link
            to="/about"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
