
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
      direction: number; // 1 for right, -1 for left
      value: string;
      opacity: number;
      size: number;
      type: 'number' | 'percentage' | 'decimal';
      pulsing: boolean;
      pulseSpeed: number;
      pulseDirection: 1 | -1;
    }[] = [];
    
    // Generate floating numbers and statistics
    const dataScienceValues = [
      "3.14", "42", "100%", "0.95", "1337", "64GB", "99.9%", 
      "2.718", "8080", "0.001", "256", "10TB", "404", "1.618", 
      "127.0.0.1"
    ];
    
    for (let i = 0; i < 25; i++) {
      const isPercentage = Math.random() > 0.7;
      const isDecimal = Math.random() > 0.6;
      
      let value;
      let type: 'number' | 'percentage' | 'decimal' = 'number';
      
      // Use data science related values
      if (Math.random() > 0.5) {
        value = dataScienceValues[Math.floor(Math.random() * dataScienceValues.length)];
        
        if (value.includes('%')) type = 'percentage';
        else if (value.includes('.')) type = 'decimal';
        else type = 'number';
      } else {
        if (isPercentage) {
          value = `${Math.floor(Math.random() * 100)}%`;
          type = 'percentage';
        } else if (isDecimal) {
          value = `${Math.random().toFixed(2)}`;
          type = 'decimal';
        } else {
          value = `${Math.floor(Math.random() * 10000)}`;
          type = 'number';
        }
      }
      
      // Position elements more at the edges (top, bottom, sides)
      let x, y;
      
      if (Math.random() > 0.5) {
        // Position horizontally at edges
        x = Math.random() > 0.5 ? 
          Math.random() * canvas.width * 0.2 : // left edge
          canvas.width * 0.8 + Math.random() * canvas.width * 0.2; // right edge
        y = Math.random() * canvas.height;
      } else {
        // Position vertically at edges
        x = Math.random() * canvas.width;
        y = Math.random() > 0.5 ? 
          Math.random() * canvas.height * 0.2 : // top edge
          canvas.height * 0.8 + Math.random() * canvas.height * 0.2; // bottom edge
      }
      
      floatingElements.push({
        x: x,
        y: y,
        speed: 0.3 + Math.random() * 0.5,
        direction: Math.random() > 0.5 ? 1 : -1,
        value,
        opacity: 0.15 + Math.random() * 0.25, // Higher base opacity
        size: 14 + Math.floor(Math.random() * 20), // Larger size
        type,
        pulsing: Math.random() > 0.7, // Some elements will pulse
        pulseSpeed: 0.005 + Math.random() * 0.01,
        pulseDirection: 1
      });
    }
    
    // Create network nodes for visualization
    const networkNodes: {
      x: number;
      y: number;
      radius: number;
      connections: number[];
      vx: number;
      vy: number;
      pulsing: boolean;
      pulseValue: number;
      pulseDirection: number;
    }[] = [];
    
    // Generate network visualization nodes
    const numNodes = 15;
    for (let i = 0; i < numNodes; i++) {
      // Position nodes more towards the edges
      let x, y;
      
      if (Math.random() > 0.5) {
        // Position horizontally near edges
        x = Math.random() > 0.5 ? 
          Math.random() * canvas.width * 0.3 : // left side
          canvas.width * 0.7 + Math.random() * canvas.width * 0.3; // right side
        y = Math.random() * canvas.height;
      } else {
        // Position vertically near edges
        x = Math.random() * canvas.width;
        y = Math.random() > 0.5 ? 
          Math.random() * canvas.height * 0.3 : // top 
          canvas.height * 0.7 + Math.random() * canvas.height * 0.3; // bottom
      }
      
      networkNodes.push({
        x,
        y,
        radius: 1 + Math.random() * 2,
        connections: [],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        pulsing: Math.random() > 0.5,
        pulseValue: Math.random(),
        pulseDirection: Math.random() > 0.5 ? 1 : -1
      });
    }
    
    // Determine connections between nodes (avoiding center area)
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const avoidRadius = Math.min(canvas.width, canvas.height) * 0.25; // Avoid center area
    
    for (let i = 0; i < networkNodes.length; i++) {
      const node = networkNodes[i];
      // Check if node is away from center to avoid overlapping with content
      const distFromCenter = Math.sqrt(Math.pow(node.x - centerX, 2) + Math.pow(node.y - centerY, 2));
      
      if (distFromCenter > avoidRadius) {
        // Connect to 1-3 other nodes
        const numConnections = 1 + Math.floor(Math.random() * 3);
        for (let j = 0; j < numConnections; j++) {
          let targetIndex;
          let attempts = 0;
          let validConnection = false;
          
          // Try to find a valid connection
          while (!validConnection && attempts < 5) {
            targetIndex = Math.floor(Math.random() * networkNodes.length);
            const targetNode = networkNodes[targetIndex];
            const targetDistFromCenter = Math.sqrt(
              Math.pow(targetNode.x - centerX, 2) + 
              Math.pow(targetNode.y - centerY, 2)
            );
            
            // Check if connection doesn't cross central area
            if (i !== targetIndex && 
                targetDistFromCenter > avoidRadius && 
                !node.connections.includes(targetIndex)) {
              validConnection = true;
              node.connections.push(targetIndex);
            }
            
            attempts++;
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
      ctx.strokeStyle = 'rgba(65, 105, 225, 0.2)'; // Royal blue with low opacity
      ctx.lineWidth = 0.8;
      
      // Update and draw network nodes
      networkNodes.forEach((node, index) => {
        // Move node slightly
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Update pulse
        if (node.pulsing) {
          node.pulseValue += 0.01 * node.pulseDirection;
          if (node.pulseValue > 1 || node.pulseValue < 0.3) {
            node.pulseDirection *= -1;
          }
        }
        
        // Draw node with pulsing effect
        const nodeOpacity = node.pulsing ? 0.1 + node.pulseValue * 0.2 : 0.2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(65, 105, 225, ${nodeOpacity})`; // Royal blue with pulsing opacity
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
      
      // Update and draw floating elements
      floatingElements.forEach(element => {
        // Move element horizontally
        element.x += element.speed * element.direction;
        
        // Reset position when element moves off screen
        if ((element.direction > 0 && element.x > canvas.width + 100) || 
            (element.direction < 0 && element.x < -100)) {
          element.x = element.direction > 0 ? -100 : canvas.width + 100;
          element.y = Math.random() * canvas.height;
        }
        
        // Update pulsing effect
        if (element.pulsing) {
          element.opacity += element.pulseSpeed * element.pulseDirection;
          if (element.opacity > 0.4 || element.opacity < 0.15) {
            element.pulseDirection *= -1;
          }
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
  
  // Create 3D scatter plot effect using layered dots
  const Scatterplot = () => {
    const [dots, setDots] = useState<{x: number, y: number, size: number, opacity: number}[]>([]);
    
    useEffect(() => {
      const newDots = [];
      for (let i = 0; i < 40; i++) {
        newDots.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 2 + Math.random() * 4,
          opacity: 0.2 + Math.random() * 0.6
        });
      }
      setDots(newDots);
    }, []);
    
    return (
      <div className="w-full h-full relative" style={{ opacity: opacity * 0.4 }}>
        {dots.map((dot, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-royalBlue animate-pulse"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: dot.opacity,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />
      
      {/* Graph in bottom left corner, away from content */}
      <div className="absolute bottom-10 left-10 opacity-10 w-64 h-32" style={{ opacity: opacity * 0.2 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#4169E1" // Royal blue
              strokeWidth={1.5}
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Graph in top right corner, away from content */}
      <div className="absolute top-20 right-10 opacity-10 w-64 h-32" style={{ opacity: opacity * 0.2 }}>
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
      
      {/* 3D Scatter plot in bottom right */}
      <div className="absolute bottom-20 right-20 w-80 h-80">
        <Scatterplot />
      </div>
    </div>
  );
};

export default BackgroundAnimation;
