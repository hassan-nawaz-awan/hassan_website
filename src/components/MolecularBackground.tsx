'use client';

export default function MolecularBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 800"
        className="absolute -right-[10%] top-0 h-full w-[80%] opacity-[0.55] dark:opacity-[0.35]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="fade-mask" cx="55%" cy="45%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="75%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="contour-mask">
            <rect width="1200" height="800" fill="url(#fade-mask)" />
          </mask>
        </defs>

        <g
          className="animate-drift"
          mask="url(#contour-mask)"
          stroke="currentColor"
          fill="none"
          style={{ color: 'var(--tw-text-opacity,1)' }}
        >
          {/* Basin 1 contours (left minimum) */}
          <g className="text-accent dark:text-accent-dark" strokeWidth="1.1">
            <path d="M260,180 C160,210 120,300 150,380 C180,460 280,500 380,470 C480,440 520,340 480,260 C440,180 360,150 260,180 Z" opacity="0.9" />
            <path d="M270,210 C190,235 160,310 185,375 C210,440 290,470 370,445 C450,420 480,335 450,270 C420,205 350,185 270,210 Z" opacity="0.7" />
            <path d="M280,240 C220,260 200,320 220,370 C240,420 300,440 360,420 C420,400 440,335 415,285 C390,235 340,220 280,240 Z" opacity="0.55" />
            <path d="M295,265 C255,278 240,318 255,352 C270,386 312,400 352,386 C392,372 405,328 388,295 C371,262 335,252 295,265 Z" opacity="0.4" />
            <circle cx="320" cy="325" r="3.5" fill="currentColor" stroke="none" opacity="0.9" />
          </g>

          {/* Basin 2 contours (right, deeper minimum — global) */}
          <g className="text-ember dark:text-ember-dark" strokeWidth="1.1">
            <path d="M780,420 C660,440 600,540 640,630 C680,720 800,750 900,710 C1000,670 1030,560 980,470 C930,380 900,400 780,420 Z" opacity="0.85" />
            <path d="M790,450 C690,468 645,550 675,625 C705,700 800,725 880,695 C960,665 985,575 945,500 C905,425 890,432 790,450 Z" opacity="0.65" />
            <path d="M800,480 C725,494 690,555 712,610 C734,665 805,685 865,662 C925,639 945,570 915,515 C885,460 875,466 800,480 Z" opacity="0.5" />
            <path d="M812,505 C760,514 736,556 750,592 C764,628 812,642 852,627 C892,612 906,565 886,530 C866,495 864,496 812,505 Z" opacity="0.38" />
            <circle cx="800" cy="565" r="4.5" fill="currentColor" stroke="none" opacity="0.95" />
          </g>

          {/* Saddle / transition path linking the two minima */}
          <path
            d="M340,330 C440,350 560,420 620,470 C680,520 740,545 790,560"
            stroke="currentColor"
            className="text-ink-muted dark:text-ink-muted-dark"
            strokeWidth="1"
            strokeDasharray="2 6"
            opacity="0.6"
            fill="none"
          />

          {/* Faint outer contour field */}
          <g className="text-ink-muted dark:text-ink-muted-dark" strokeWidth="0.6" opacity="0.35">
            <path d="M160,120 C40,180 -20,320 40,440 C100,560 240,620 380,580 C520,540 600,420 560,300 C520,180 420,120 280,120 C240,120 200,110 160,120 Z" />
            <path d="M740,340 C600,380 540,520 600,640 C660,760 820,800 940,750 C1060,700 1110,560 1050,440 C990,320 880,300 740,340 Z" />
          </g>
        </g>
      </svg>
    </div>
  );
}
