/*
 * LiveHealthillie Icon System
 *
 * Style: thin-stroke outline icons (stroke-width 1.5)
 * matching the clean, minimal aesthetic of the live site.
 * Icons use currentColor so they inherit text colour.
 *
 * --color-icon: #000000
 * --color-icon-hover: #551a8b
 */

const defaultProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Icon({ children, size, ...props }) {
  return (
    <svg
      {...defaultProps}
      width={size || defaultProps.width}
      height={size || defaultProps.height}
      {...props}
    >
      {children}
    </svg>
  )
}

/* ==========================================
   Navigation Icons
   ========================================== */

export function IconSearch(props) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </Icon>
  )
}

export function IconUser(props) {
  return (
    <Icon {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </Icon>
  )
}

export function IconShoppingBag(props) {
  return (
    <Icon {...props}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </Icon>
  )
}

export function IconMenu(props) {
  return (
    <Icon {...props}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </Icon>
  )
}

export function IconX(props) {
  return (
    <Icon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Icon>
  )
}

/* ==========================================
   Product / Commerce Icons
   ========================================== */

export function IconHeart(props) {
  return (
    <Icon {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </Icon>
  )
}

export function IconPlus(props) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </Icon>
  )
}

export function IconMinus(props) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
    </Icon>
  )
}

export function IconTrash(props) {
  return (
    <Icon {...props}>
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </Icon>
  )
}

/* ==========================================
   Trust / Feature Icons
   ========================================== */

export function IconTruck(props) {
  return (
    <Icon {...props}>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </Icon>
  )
}

export function IconShield(props) {
  return (
    <Icon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  )
}

export function IconRefresh(props) {
  return (
    <Icon {...props}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </Icon>
  )
}

export function IconLeaf(props) {
  return (
    <Icon {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </Icon>
  )
}

export function IconLock(props) {
  return (
    <Icon {...props}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </Icon>
  )
}

/* ==========================================
   Navigation / UI Icons
   ========================================== */

export function IconChevronLeft(props) {
  return (
    <Icon {...props}>
      <path d="m15 18-6-6 6-6" />
    </Icon>
  )
}

export function IconChevronRight(props) {
  return (
    <Icon {...props}>
      <path d="m9 18 6-6-6-6" />
    </Icon>
  )
}

export function IconChevronDown(props) {
  return (
    <Icon {...props}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  )
}

export function IconArrowRight(props) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Icon>
  )
}

/* ==========================================
   Social Icons
   ========================================== */

export function IconInstagram(props) {
  return (
    <Icon {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </Icon>
  )
}

export function IconPinterest(props) {
  return (
    <Icon {...props}>
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </Icon>
  )
}

export function IconFacebook(props) {
  return (
    <Icon {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Icon>
  )
}

export function IconMail(props) {
  return (
    <Icon {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </Icon>
  )
}

/* ==========================================
   Star Rating
   Colors from live site: filled #FDBE40, empty #e0e0e0
   ========================================== */

export function IconStarFilled({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#FDBE40" stroke="none" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function IconStarEmpty({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#d1d1d1" strokeWidth={1.5} {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function IconStarHalf({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="none" {...props}>
      <defs>
        <clipPath id="half-clip">
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#d1d1d1" />
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FDBE40" clipPath="url(#half-clip)" />
    </svg>
  )
}

/* ==========================================
   Payment Icons (simplified outlines)
   ========================================== */

export function IconVisa(props) {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none" {...props}>
      <rect x="0.5" y="0.5" width="37" height="23" rx="3.5" fill="white" stroke="#e7e7e7" />
      <path d="M15.26 16.23h-2.42l1.52-9.47h2.42l-1.52 9.47Z" fill="#2E2E2E" />
      <path d="M24.47 6.95c-.48-.19-1.23-.39-2.17-.39-2.39 0-4.07 1.28-4.09 3.12-.01 1.36 1.21 2.12 2.13 2.57.95.47 1.27.77 1.26 1.18-.01.64-.75.93-1.45.93-.97 0-1.49-.14-2.28-.5l-.31-.15-.34 2.12c.57.26 1.62.49 2.71.5 2.54 0 4.19-1.26 4.21-3.24.01-1.08-.64-1.9-2.04-2.58-.85-.44-1.37-.73-1.37-1.17.01-.4.44-.82 1.39-.82.8-.01 1.37.17 1.82.36l.22.11.33-2.04Z" fill="#2E2E2E" />
      <path d="M28.07 6.77h-1.87c-.58 0-1.01.17-1.27.78l-3.58 8.68h2.53l.51-1.42h3.09l.29 1.42h2.24l-1.94-9.46Zm-2.97 6.11c.2-.54 .96-2.63.96-2.63l.58 2.63h-1.54Z" fill="#2E2E2E" />
      <path d="M12.21 6.77 9.84 13.3l-.26-1.32C9.13 10.52 7.75 9 6.22 8.15l2.16 8.07h2.55l3.82-9.45h-2.54Z" fill="#2E2E2E" />
    </svg>
  )
}

export function IconMastercard(props) {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none" {...props}>
      <rect x="0.5" y="0.5" width="37" height="23" rx="3.5" fill="white" stroke="#e7e7e7" />
      <circle cx="15" cy="12" r="6" fill="#EB001B" opacity="0.8" />
      <circle cx="23" cy="12" r="6" fill="#F79E1B" opacity="0.8" />
    </svg>
  )
}

export function IconAmex(props) {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none" {...props}>
      <rect x="0.5" y="0.5" width="37" height="23" rx="3.5" fill="#2E77BC" stroke="#e7e7e7" />
      <text x="19" y="14" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="sans-serif">AMEX</text>
    </svg>
  )
}
