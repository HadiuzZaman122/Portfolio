import React, { useEffect, useRef } from 'react';

/**
 * Interactive Neural Network & Computational Geometry Canvas
 * Simulates interconnected neural layers, synaptic pulse activations,
 * and mouse-gravity electromagnetic response.
 */
const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 180,
      active: false
    };

    // Responsive node count based on screen size
    const isMobile = width < 768;
    const nodeCount = isMobile ? 38 : 72;
    const maxDistance = isMobile ? 110 : 150;

    class Node {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2.2 + 1.2;
        this.baseRadius = this.radius;
        // Nodes vary between cyan, violet, and electric blue
        this.type = Math.random() > 0.5 ? 'cyan' : (Math.random() > 0.5 ? 'violet' : 'emerald');
        this.alpha = Math.random() * 0.5 + 0.3;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        // Subtle drift
        this.x += this.vx;
        this.y += this.vy;

        // Bounce from edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse attraction/repulsion
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.04;
            this.vx += (dx / dist) * force;
            this.vy += (dy / dist) * force;
            this.radius = this.baseRadius * 1.6;
          } else {
            this.radius = this.baseRadius;
          }
        }

        // Pulse phase
        this.pulse += 0.03;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        const glow = Math.sin(this.pulse) * 0.2 + 0.8;
        if (this.type === 'cyan') {
          ctx.fillStyle = `rgba(0, 240, 255, ${this.alpha * glow})`;
          ctx.shadowColor = 'rgba(0, 240, 255, 0.6)';
        } else if (this.type === 'violet') {
          ctx.fillStyle = `rgba(168, 85, 247, ${this.alpha * glow})`;
          ctx.shadowColor = 'rgba(168, 85, 247, 0.6)';
        } else {
          ctx.fillStyle = `rgba(16, 185, 129, ${this.alpha * glow})`;
          ctx.shadowColor = 'rgba(16, 185, 129, 0.6)';
        }
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const nodes = Array.from({ length: nodeCount }, () => new Node());

    // Synaptic connection renderer
    const drawSynapses = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const proximity = 1 - dist / maxDistance;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            // Dynamic gradient between nodes
            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );
            
            const alpha = proximity * 0.32;
            gradient.addColorStop(0, `rgba(0, 240, 255, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(168, 85, 247, ${alpha * 0.7})`);
            gradient.addColorStop(1, `rgba(59, 130, 246, ${alpha})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = proximity * 1.3;
            ctx.stroke();

            // Occasional synaptic signal firing pulse along wire
            if (proximity > 0.65 && (i + j) % 11 === 0) {
              const progress = (Date.now() % 2000) / 2000;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * progress;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * progress;
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = '#00f0ff';
              ctx.shadowColor = '#00f0ff';
              ctx.shadowBlur = 6;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      drawSynapses();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Event Listeners
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      nodes.forEach((node) => {
        if (node.x > width) node.x = width - 10;
        if (node.y > height) node.y = height - 10;
      });
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-80">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
};

export default NeuralCanvas;
