
import React, { useEffect, useRef } from 'react';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer } from 'recharts';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
    }[] = [];
    
    // Generate floating numbers and statistics
    for (let i = 0; i < 30; i++) {
      const isPercentage = Math.random() > 0.7;
      const isAccuracy = Math.random() > 0.8;
      
      let value;
      if (isPercentage) {
        value = `${Math.floor(Math.random() * 100)}%`;
      } else if (isAccuracy) {
        value = `0.${Math.floor(Math.random() * 100)}`;
      } else {
        value = `${Math.floor(Math.random() * 10000)}`;
      }
      
      floatingElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.5,
        value,
        opacity: 0.05 + Math.random() * 0.08,
        size: 8 + Math.floor(Math.random() * 14)
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      floatingElements.forEach(element => {
        // Move element upward
        element.y -= element.speed;
        
        // Reset position when element moves off screen
        if (element.y < -50) {
          element.y = canvas.height + 50;
          element.x = Math.random() * canvas.width;
        }
        
        // Draw the number/statistic
        ctx.font = `${element.size}px 'Roboto Mono', monospace`;
        ctx.fillStyle = `rgba(100, 255, 218, ${element.opacity})`;
        ctx.fillText(element.value, element.x, element.y);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />
      
      {/* Graph in bottom left */}
      <div className="absolute bottom-10 left-10 opacity-10 w-64 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#64FFDA" 
              strokeWidth={2}
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Graph in top right */}
      <div className="absolute top-20 right-10 opacity-10 w-64 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={areaData}>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#64FFDA"
              fill="#64FFDA"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
