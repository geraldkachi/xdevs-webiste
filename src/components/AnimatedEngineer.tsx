// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// export default function AnimatedEngineer() {
//   const [animationStage, setAnimationStage] = useState(0);

//   useEffect(() => {
//     // Stage 0: Initial pose (facing away) - 0-2s
//     // Stage 1: Turn around - 2-3s
//     // Stage 2: Fold arms - 3-4s
//     // Stage 3: Face user - 4-5s
//     // Stage 4: Final pose - 5s+

//     const timer1 = setTimeout(() => setAnimationStage(1), 2000);
//     const timer2 = setTimeout(() => setAnimationStage(2), 3000);
//     const timer3 = setTimeout(() => setAnimationStage(3), 4000);
//     const timer4 = setTimeout(() => setAnimationStage(4), 5000);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//       clearTimeout(timer4);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-full flex items-center justify-center">
//       <motion.div
//         className="relative"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Engineer SVG Character */}
//         <motion.svg
//           width="400"
//           height="500"
//           viewBox="0 0 400 500"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           animate={{
//             rotateY: animationStage >= 1 ? 180 : 0,
//           }}
//           transition={{
//             duration: 1,
//             ease: 'easeInOut',
//           }}
//           style={{
//             transformStyle: 'preserve-3d',
//           }}
//         >
//           {/* Head */}
//           <motion.g
//             animate={{
//               rotate: animationStage >= 3 ? [0, -5, 5, -3, 0] : 0,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.2,
//             }}
//           >
//             {/* Face */}
//             <ellipse cx="200" cy="120" rx="45" ry="55" fill="#D4A574" />
            
//             {/* Hair */}
//             <path
//               d="M155 100 Q155 70 200 70 Q245 70 245 100 L245 120 Q245 90 200 90 Q155 90 155 120 Z"
//               fill="#2C1810"
//             />
            
//             {/* Ears */}
//             <ellipse cx="155" cy="120" rx="8" ry="15" fill="#D4A574" />
//             <ellipse cx="245" cy="120" rx="8" ry="15" fill="#D4A574" />
            
//             {/* Eyes */}
//             <motion.g
//               animate={{
//                 scaleY: animationStage >= 4 ? [1, 0.1, 1] : 1,
//               }}
//               transition={{
//                 duration: 0.3,
//                 delay: 0.5,
//               }}
//             >
//               <ellipse cx="185" cy="115" rx="5" ry="8" fill="#2C1810" />
//               <ellipse cx="215" cy="115" rx="5" ry="8" fill="#2C1810" />
//             </motion.g>
            
//             {/* Eyebrows */}
//             <path d="M178 105 Q185 103 192 105" stroke="#2C1810" strokeWidth="3" strokeLinecap="round" />
//             <path d="M208 105 Q215 103 222 105" stroke="#2C1810" strokeWidth="3" strokeLinecap="round" />
            
//             {/* Smile */}
//             <motion.path
//               d="M185 135 Q200 145 215 135"
//               stroke="#2C1810"
//               strokeWidth="2"
//               strokeLinecap="round"
//               fill="none"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: animationStage >= 4 ? 1 : 0 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//             />
            
//             {/* Nose */}
//             <path d="M200 120 L195 130 L200 132" stroke="#B88A5C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
//           </motion.g>

//           {/* Neck */}
//           <rect x="185" y="165" width="30" height="25" fill="#D4A574" rx="5" />

//           {/* Body - Black Shirt */}
//           <motion.g>
//             {/* Torso */}
//             <path
//               d="M140 190 L260 190 L270 350 Q200 360 130 350 Z"
//               fill="#1a1a1a"
//               stroke="#000"
//               strokeWidth="2"
//             />
            
//             {/* Shirt collar */}
//             <path
//               d="M185 185 L170 200 L180 210"
//               fill="#1a1a1a"
//               stroke="#000"
//               strokeWidth="2"
//             />
//             <path
//               d="M215 185 L230 200 L220 210"
//               fill="#1a1a1a"
//               stroke="#000"
//               strokeWidth="2"
//             />

//             {/* XDEVS Text on Shirt */}
//             <motion.text
//               x="200"
//               y="260"
//               textAnchor="middle"
//               fontSize="28"
//               fontWeight="bold"
//               fill="#fff"
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: animationStage >= 4 ? 1 : 0, scale: animationStage >= 4 ? 1 : 0.5 }}
//               transition={{ duration: 0.5, delay: 1 }}
//             >
//               XDEVS
//             </motion.text>
//           </motion.g>

//           {/* Arms - Folded */}
//           <motion.g
//             animate={{
//               rotate: animationStage >= 2 ? 0 : -20,
//             }}
//             transition={{
//               duration: 0.6,
//               ease: 'easeOut',
//             }}
//             style={{ transformOrigin: '140px 200px' }}
//           >
//             {/* Left Arm (folded) */}
//             <motion.g
//               animate={{
//                 x: animationStage >= 2 ? 0 : -20,
//                 rotate: animationStage >= 2 ? 0 : -15,
//               }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Upper arm */}
//               <path
//                 d="M140 200 L110 220 L120 280 L145 270 Z"
//                 fill="#1a1a1a"
//                 stroke="#000"
//                 strokeWidth="2"
//               />
//               {/* Forearm (across body) */}
//               <path
//                 d="M145 270 L180 265 L185 250 L150 255 Z"
//                 fill="#D4A574"
//                 stroke="#B88A5C"
//                 strokeWidth="2"
//               />
//               {/* Hand */}
//               <ellipse cx="188" cy="255" rx="12" ry="15" fill="#D4A574" stroke="#B88A5C" strokeWidth="1.5" />
//             </motion.g>
//           </motion.g>

//           <motion.g
//             animate={{
//               rotate: animationStage >= 2 ? 0 : 20,
//             }}
//             transition={{
//               duration: 0.6,
//               ease: 'easeOut',
//             }}
//             style={{ transformOrigin: '260px 200px' }}
//           >
//             {/* Right Arm (folded) */}
//             <motion.g
//               animate={{
//                 x: animationStage >= 2 ? 0 : 20,
//                 rotate: animationStage >= 2 ? 0 : 15,
//               }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Upper arm */}
//               <path
//                 d="M260 200 L290 220 L280 280 L255 270 Z"
//                 fill="#1a1a1a"
//                 stroke="#000"
//                 strokeWidth="2"
//               />
//               {/* Forearm (across body) */}
//               <path
//                 d="M255 270 L220 265 L215 250 L250 255 Z"
//                 fill="#D4A574"
//                 stroke="#B88A5C"
//                 strokeWidth="2"
//               />
//               {/* Hand */}
//               <ellipse cx="212" cy="255" rx="12" ry="15" fill="#D4A574" stroke="#B88A5C" strokeWidth="1.5" />
//             </motion.g>
//           </motion.g>

//           {/* Legs */}
//           <g>
//             {/* Left leg */}
//             <path
//               d="M160 350 L150 450 L180 455 L175 350 Z"
//               fill="#2C5F8D"
//               stroke="#1a3d5c"
//               strokeWidth="2"
//             />
//             {/* Right leg */}
//             <path
//               d="M240 350 L250 450 L220 455 L225 350 Z"
//               fill="#2C5F8D"
//               stroke="#1a3d5c"
//               strokeWidth="2"
//             />
            
//             {/* Shoes */}
//             <ellipse cx="165" cy="460" rx="20" ry="10" fill="#2C1810" />
//             <ellipse cx="235" cy="460" rx="20" ry="10" fill="#2C1810" />
//           </g>

//           {/* Hard Hat */}
//           <motion.g
//             animate={{
//               y: animationStage >= 4 ? [0, -5, 0] : 0,
//             }}
//             transition={{
//               duration: 0.4,
//               delay: 1.2,
//             }}
//           >
//             <ellipse cx="200" cy="75" rx="55" ry="15" fill="#FFA500" />
//             <path
//               d="M145 75 Q145 55 200 50 Q255 55 255 75 L255 80 Q255 60 200 55 Q145 60 145 80 Z"
//               fill="#FF8C00"
//             />
//             {/* Hat brim */}
//             <ellipse cx="200" cy="80" rx="60" ry="8" fill="#CC7000" />
//           </motion.g>

//           {/* Laptop/Tablet in hand (optional detail) */}
//           <motion.rect
//             x="170"
//             y="290"
//             width="60"
//             height="45"
//             rx="3"
//             fill="#333"
//             stroke="#555"
//             strokeWidth="2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: animationStage >= 4 ? 0.3 : 0, y: animationStage >= 4 ? 0 : 20 }}
//             transition={{ duration: 0.5, delay: 1.5 }}
//           />
//         </motion.svg>

//         {/* Animated particles/sparkles around character */}
//         {animationStage >= 4 && (
//           <>
//             {[...Array(8)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-2 h-2 bg-orange-400 rounded-full"
//                 initial={{
//                   x: 200,
//                   y: 250,
//                   opacity: 0,
//                   scale: 0,
//                 }}
//                 animate={{
//                   x: 200 + Math.cos((i * Math.PI) / 4) * 80,
//                   y: 250 + Math.sin((i * Math.PI) / 4) * 80,
//                   opacity: [0, 1, 0],
//                   scale: [0, 1, 0],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   delay: 1.5 + i * 0.1,
//                   repeat: Infinity,
//                   repeatDelay: 2,
//                 }}
//               />
//             ))}
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }


'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export default function AnimatedEngineer() {
  const bodyControls = useAnimationControls();
  const headControls = useAnimationControls();
  const armsControls = useAnimationControls();
  const eyesControls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      // Initial pause
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Stage 1: Turn body smoothly
      await bodyControls.start({
        rotateY: 180,
        transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
      });

      // Stage 2: Settle
      await new Promise(resolve => setTimeout(resolve, 200));

      // Stage 3: Fold arms
      await armsControls.start({
        rotate: 0,
        x: 0,
        transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
      });

      // Stage 4: Head nod
      await headControls.start({
        rotate: [0, -3, 2, -1, 0],
        transition: { duration: 0.6 },
      });

      // Stage 5: Blink and smile
      await eyesControls.start({
        scaleY: [1, 0.1, 1],
        transition: { duration: 0.3 },
      });

      // Idle breathing
      bodyControls.start({
        y: [0, -3, 0],
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
      });
    };

    sequence();
  }, [bodyControls, headControls, armsControls, eyesControls]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.svg
          width="450"
          height="600"
          viewBox="0 0 450 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={bodyControls}
          style={{
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
          }}
        >
          <defs>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E8B89A" />
              <stop offset="100%" stopColor="#D4A078" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </linearGradient>
            <linearGradient id="jeansGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3d5a7a" />
              <stop offset="100%" stopColor="#2a4157" />
            </linearGradient>
            <radialGradient id="hatGrad">
              <stop offset="0%" stopColor="#FFB84D" />
              <stop offset="100%" stopColor="#FF8C00" />
            </radialGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3"/>
            </filter>
          </defs>

          <g>
            {/* Legs */}
            <g>
              <path d="M190 380 L185 520 Q185 530 195 530 L210 530 Q215 530 215 520 L205 380 Z" fill="url(#jeansGrad)" stroke="#1a3d5c" strokeWidth="1.5"/>
              <path d="M235 380 L240 520 Q240 530 250 530 L265 530 Q270 530 270 520 L260 380 Z" fill="url(#jeansGrad)" stroke="#1a3d5c" strokeWidth="1.5"/>
              <ellipse cx="202" cy="535" rx="22" ry="12" fill="#1a1a1a"/>
              <ellipse cx="257" cy="535" rx="22" ry="12" fill="#1a1a1a"/>
              <ellipse cx="202" cy="533" rx="18" ry="8" fill="#2a2a2a"/>
              <ellipse cx="257" cy="533" rx="18" ry="8" fill="#2a2a2a"/>
            </g>

            {/* Torso */}
            <g>
              <path d="M165 200 Q160 210 160 230 L160 370 Q160 380 170 380 L280 380 Q290 380 290 370 L290 230 Q290 210 285 200 L275 190 Q225 185 175 190 Z" fill="url(#shirtGrad)" stroke="#000" strokeWidth="1" filter="url(#shadow)"/>
              <path d="M210 190 L205 205 L215 215" fill="#1a1a1a" stroke="#000" strokeWidth="1"/>
              <path d="M240 190 L245 205 L235 215" fill="#1a1a1a" stroke="#000" strokeWidth="1"/>
              <line x1="225" y1="200" x2="225" y2="370" stroke="#000" strokeWidth="0.5" opacity="0.3"/>
              <rect x="170" y="260" width="35" height="30" rx="2" fill="#000" opacity="0.2"/>
              <line x1="170" y1="270" x2="205" y2="270" stroke="#000" strokeWidth="0.5" opacity="0.3"/>

              <motion.text
                x="225" y="310" textAnchor="middle" fontSize="36" fontWeight="900" 
                fontFamily="'Inter', sans-serif" letterSpacing="-1" fill="#ffffff"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                XDEVS
              </motion.text>
            </g>

            {/* Left Arm */}
            <motion.g initial={{ rotate: -25, x: -15 }} animate={armsControls} style={{ transformOrigin: '165px 220px' }}>
              <path d="M165 210 L140 240 L145 300 L168 285 Z" fill="url(#shirtGrad)" stroke="#000" strokeWidth="1"/>
              <path d="M168 285 L210 275 L215 260 L173 270 Z" fill="url(#skinGrad)" stroke="#C89968" strokeWidth="1"/>
              <ellipse cx="218" cy="265" rx="14" ry="18" fill="url(#skinGrad)" stroke="#C89968" strokeWidth="1"/>
              <ellipse cx="225" cy="262" rx="6" ry="8" fill="#D4A078" opacity="0.8"/>
              <ellipse cx="218" cy="259" rx="5" ry="7" fill="#D4A078" opacity="0.8"/>
            </motion.g>

            {/* Right Arm */}
            <motion.g initial={{ rotate: 25, x: 15 }} animate={armsControls} style={{ transformOrigin: '285px 220px' }}>
              <path d="M285 210 L310 240 L305 300 L282 285 Z" fill="url(#shirtGrad)" stroke="#000" strokeWidth="1"/>
              <path d="M282 285 L240 275 L235 260 L277 270 Z" fill="url(#skinGrad)" stroke="#C89968" strokeWidth="1"/>
              <ellipse cx="232" cy="265" rx="14" ry="18" fill="url(#skinGrad)" stroke="#C89968" strokeWidth="1"/>
              <ellipse cx="225" cy="262" rx="6" ry="8" fill="#D4A078" opacity="0.8"/>
              <ellipse cx="232" cy="259" rx="5" ry="7" fill="#D4A078" opacity="0.8"/>
            </motion.g>

            {/* Neck */}
            <rect x="210" y="175" width="30" height="30" fill="url(#skinGrad)" rx="8"/>
            <ellipse cx="225" cy="200" rx="12" ry="5" fill="#C89968" opacity="0.3"/>

            {/* Head */}
            <motion.g animate={headControls} style={{ transformOrigin: '225px 135px' }}>
              <ellipse cx="225" cy="135" rx="52" ry="62" fill="url(#skinGrad)" filter="url(#shadow)"/>
              
              {/* Ears */}
              <ellipse cx="173" cy="135" rx="10" ry="18" fill="#D4A078"/>
              <ellipse cx="277" cy="135" rx="10" ry="18" fill="#D4A078"/>
              <ellipse cx="175" cy="138" rx="5" ry="10" fill="#C89968" opacity="0.6"/>
              <ellipse cx="275" cy="138" rx="5" ry="10" fill="#C89968" opacity="0.6"/>

              {/* Hair */}
              <path d="M173 110 Q173 75 225 70 Q277 75 277 110 L277 125 Q277 90 225 85 Q173 90 173 125 Z" fill="#1a1a1a"/>
              <path d="M190 95 Q200 88 210 95" stroke="#3a3a3a" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M240 95 Q250 88 260 95" stroke="#3a3a3a" strokeWidth="3" strokeLinecap="round" fill="none"/>

              {/* Eyebrows */}
              <motion.path d="M195 115 Q205 112 215 114" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" fill="none" animate={{ y: [0, -1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}/>
              <motion.path d="M235 114 Q245 112 255 115" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" fill="none" animate={{ y: [0, -1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}/>

              {/* Eyes */}
              <motion.g animate={eyesControls}>
                <ellipse cx="202" cy="130" rx="8" ry="11" fill="#ffffff"/>
                <ellipse cx="203" cy="132" rx="5" ry="7" fill="#3a3a3a"/>
                <ellipse cx="204" cy="131" rx="3" ry="4" fill="#000"/>
                <circle cx="205" cy="129" r="1.5" fill="#ffffff"/>

                <ellipse cx="248" cy="130" rx="8" ry="11" fill="#ffffff"/>
                <ellipse cx="247" cy="132" rx="5" ry="7" fill="#3a3a3a"/>
                <ellipse cx="246" cy="131" rx="3" ry="4" fill="#000"/>
                <circle cx="245" cy="129" r="1.5" fill="#ffffff"/>
              </motion.g>

              {/* Nose */}
              <path d="M225 140 L222 152 Q223 154 227 154 Q228 154 229 152 Z" fill="#C89968" opacity="0.6"/>
              <ellipse cx="221" cy="153" rx="2" ry="3" fill="#B88A5C" opacity="0.5"/>
              <ellipse cx="229" cy="153" rx="2" ry="3" fill="#B88A5C" opacity="0.5"/>

              {/* Smile */}
              <motion.path d="M200 160 Q225 172 250 160" stroke="#B88A5C" strokeWidth="2.5" strokeLinecap="round" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 3.8, duration: 0.4 }}/>
              <motion.path d="M205 162 Q225 170 245 162" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }} transition={{ delay: 4, duration: 0.3 }}/>

              {/* Cheek blush */}
              <motion.ellipse cx="190" cy="148" rx="12" ry="8" fill="#ff8a80" opacity="0" animate={{ opacity: [0, 0.15, 0.15] }} transition={{ delay: 4, duration: 0.5 }}/>
              <motion.ellipse cx="260" cy="148" rx="12" ry="8" fill="#ff8a80" opacity="0" animate={{ opacity: [0, 0.15, 0.15] }} transition={{ delay: 4, duration: 0.5 }}/>
            </motion.g>

            {/* Hard Hat */}
            <motion.g animate={{ y: [0, -4, 0] }} transition={{ delay: 4.2, duration: 0.5 }}>
              <ellipse cx="225" cy="75" rx="60" ry="18" fill="url(#hatGrad)" filter="url(#shadow)"/>
              <path d="M165 75 Q165 50 225 45 Q285 50 285 75 L285 82 Q285 55 225 50 Q165 55 165 82 Z" fill="#FFB84D"/>
              <ellipse cx="225" cy="82" rx="65" ry="10" fill="#CC7000"/>
              <ellipse cx="225" cy="80" rx="63" ry="8" fill="#FF9500"/>
              <rect x="220" y="50" width="10" height="8" rx="2" fill="#CC7000"/>
              <ellipse cx="225" cy="70" rx="40" ry="3" fill="#ffffff" opacity="0.3"/>
            </motion.g>
          </g>

          {/* Laptop */}
          <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.6, scale: 1 }} transition={{ delay: 4.5, duration: 0.6 }}>
            <g transform="translate(155, 320)">
              <rect width="55" height="40" rx="3" fill="#333" stroke="#555" strokeWidth="1.5"/>
              <rect x="5" y="5" width="45" height="25" rx="1" fill="#1a1a1a"/>
              <rect x="8" y="8" width="39" height="19" fill="#4a9eff" opacity="0.3"/>
              <line x1="10" y1="12" x2="30" y2="12" stroke="#4a9eff" strokeWidth="1" opacity="0.6"/>
              <line x1="10" y1="16" x2="25" y2="16" stroke="#4a9eff" strokeWidth="1" opacity="0.6"/>
            </g>
          </motion.g>
        </motion.svg>

        {/* Particles */}
        <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ background: `hsl(${30 + i * 10}, 80%, ${50 + i * 2}%)`, left: '50%', top: '50%' }}
              animate={{
                x: [0, Math.cos((i * Math.PI) / 6) * 100],
                y: [0, Math.sin((i * Math.PI) / 6) * 100],
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2, delay: 4.5 + i * 0.08, repeat: Infinity, repeatDelay: 3 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
