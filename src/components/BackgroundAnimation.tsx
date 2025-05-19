
import React, { useEffect, useRef, useState } from 'react';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer } from 'recharts';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [opacity, setOpacity] = useState(1);
  
  // Sample data for the graphs
  const lineData = [
    { value: 10 },
    { value: 30 },
    { value: 15 },
    { value: 25 },
    { value: 40 },
    { value: 20 },
    { value: 35 },
  ];
  
  const areaData = [
    { value: 40 },
    { value: 30 },
    { value: 60 },
    { value: 25 },
    { value: 50 },
    { value: 35 },
    { value: 45 },
  ];

  // Handle scroll events to fade animations when over content
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate opacity based on scroll position
      // Start fading when user scrolls beyond 20% of first viewport
      const fadeStart = viewportHeight * 0.2;
      const fadeEnd = viewportHeight * 0.8;
      
      if (scrollY <= fadeStart) {
        setOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setOpacity(0.1);
      } else {
        setOpacity(1 - ((scrollY - fadeStart) / (fadeEnd - fadeStart)) * 0.9);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create an array of floating elements
    const floatingElements: {
      x: number;
      y: number;
      speed: number;
      value: string;
      opacity: number;
      size: number;
      type: 'number' | 'percentage' | 'decimal';
    }[] = [];
    
    // Create network nodes for visualization
    const networkNodes: {
      x: number;
      y: number;
      radius: number;
      connections: number[];
    }[] = [];
    
    // Generate floating numbers and statistics
    for (let i = 0; i < 30; i++) {
      const isPercentage = Math.random() > 0.7;
      const isDecimal = Math.random() > 0.8;
      
      let value;
      let type: 'number' | 'percentage' | 'decimal' = 'number';
      
      if (isPercentage) {
        value = `${Math.floor(Math.random() * 100)}%`;
        type = 'percentage';
      } else if (isDecimal) {
        value = `0.${Math.floor(Math.random() * 100)}`;
        type = 'decimal';
      } else {
        value = `${Math.floor(Math.random() * 10000)}`;
        type = 'number';
      }
      
      floatingElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.5,
        value,
        opacity: 0.05 + Math.random() * 0.08,
        size: 8 + Math.floor(Math.random() * 14),
        type
      });
    }
    
    // Generate network visualization nodes
    const numNodes = 12;
    for (let i = 0; i < numNodes; i++) {
      networkNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 1 + Math.random() * 2,
        connections: []
      });
    }
    
    // Determine connections between nodes (avoiding center area)
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const avoidRadius = Math.min(canvas.width, canvas.height) * 0.3; // Avoid center area
    
    for (let i = 0; i < networkNodes.length; i++) {
      const node = networkNodes[i];
      // Check if node is away from center to avoid overlapping with content
      const distFromCenter = Math.sqrt(Math.pow(node.x - centerX, 2) + Math.pow(node.y - centerY, 2));
      
      if (distFromCenter > avoidRadius) {
        // Connect to 1-3 other nodes
        const numConnections = 1 + Math.floor(Math.random() * 3);
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(Math.random() * networkNodes.length);
          if (i !== targetIndex && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply global opacity based on scroll position
      ctx.globalAlpha = opacity;
      
      // Draw network visualization (thin lines connecting points)
      ctx.strokeStyle = 'rgba(65, 105, 225, 0.1)'; // Royal blue with low opacity
      ctx.lineWidth = 0.5;
      
      networkNodes.forEach((node, index) => {
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(65, 105, 225, 0.15)'; // Royal blue with low opacity
        ctx.fill();
        
        // Draw connections to other nodes
        node.connections.forEach(targetIndex => {
          const targetNode = networkNodes[targetIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        });
      });
      
      floatingElements.forEach(element => {
        // Move element upward
        element.y -= element.speed;
        
        // Reset position when element moves off screen
        if (element.y < -50) {
          element.y = canvas.height + 50;
          element.x = Math.random() * canvas.width;
        }
        
        // Change color based on type
        let color: string;
        if (element.type === 'percentage') {
          color = `rgba(65, 105, 225, ${element.opacity * 1.2})`; // Royal blue for percentages
        } else if (element.type === 'decimal') {
          color = `rgba(255, 255, 255, ${element.opacity * 1.3})`; // White for decimals
        } else {
          color = `rgba(65, 105, 225, ${element.opacity})`; // Royal blue for numbers
        }
        
        // Avoid center area to prevent overlapping with main content
        const distFromCenter = Math.sqrt(
          Math.pow(element.x - canvas.width / 2, 2) + 
          Math.pow(element.y - canvas.height / 2, 2)
        );
        
        const avoidRadius = Math.min(canvas.width, canvas.height) * 0.25;
        if (distFromCenter > avoidRadius) {
          // Draw the number/statistic
          ctx.font = `${element.size}px 'Roboto Mono', monospace`;
          ctx.fillStyle = color;
          ctx.fillText(element.value, element.x, element.y);
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [opacity]);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />
      
      {/* Graph in bottom left corner, away from content */}
      <div className="absolute bottom-10 left-10 opacity-10 w-64 h-32" style={{ opacity: opacity * 0.1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#4169E1" // Royal blue
              strokeWidth={1}
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Graph in top right corner, away from content */}
      <div className="absolute top-20 right-10 opacity-10 w-64 h-32" style={{ opacity: opacity * 0.1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={areaData}>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#4169E1" // Royal blue
              fill="#4169E1" // Royal blue
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
