import './Dashboard.css'

const INFO_ROWS = (user) => [
  ['Auth Method', 'Google OAuth 2.0'],
  ['Account ID', user.sub ? user.sub.slice(0, 12) + '…' : '—'],
  ['Email Verified', user.email_verified ? '✓ Verified' : 'Unverified'],
  ['Locale', user.locale?.toUpperCase() || 'EN'],
]

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="page">
      <div className="topbar">
        <button className="logout-btn" onClick={onLogout}>Sign out</button>
      </div>

      <main className="main">
        <div className="card">
          <h1 className="greeting">Welcome, {user.given_name || user.name}!</h1>
          <p className="email">{user.email}</p>

          <div className="info-table">
            {INFO_ROWS(user).map(([k, v]) => (
              <div className="info-row" key={k}>
                <span className="info-key">{k}</span>
                <span className="info-val">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}