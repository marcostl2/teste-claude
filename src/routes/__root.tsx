import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '10px 24px',
        background: 'rgba(15, 12, 41, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        gap: '20px',
        zIndex: 100,
        borderBottom: '1px solid rgba(255, 215, 0, 0.15)',
      }}>
        <Link to="/" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>Home</Link>
        <Link to="/p1" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P1</Link>
        <Link to="/p2" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P2</Link>
        <Link to="/p3" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P3</Link>
        <Link to="/p4" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P4</Link>
        <Link to="/p5" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P5</Link>
        <Link to="/p6" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P6</Link>
        <Link to="/p7" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P7</Link>
        <Link to="/p8" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P8</Link>
        <Link to="/p9" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P9</Link>
        <Link to="/p10" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P10</Link>
        <Link to="/p11" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P11</Link>
        <Link to="/p12" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P12</Link>
        <Link to="/p13" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P13</Link>
        <Link to="/p14" style={navLinkStyle} activeProps={{ style: activeLinkStyle }}>P14</Link>
      </nav>
      <Outlet />
    </>
  ),
})

const navLinkStyle: React.CSSProperties = {
  color: 'rgba(255, 215, 0, 0.6)',
  textDecoration: 'none',
  fontWeight: 700,
  fontFamily: 'system-ui, sans-serif',
  fontSize: '14px',
  letterSpacing: '0.05em',
  transition: 'color 0.2s',
}

const activeLinkStyle: React.CSSProperties = {
  ...navLinkStyle,
  color: '#ffd700',
}
