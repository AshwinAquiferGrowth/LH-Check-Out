import { useState } from 'react'
import './GorgiasChat.css'

function GorgiasChat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="gorgias-chat">
      {/* Expanded chat panel */}
      {open && (
        <div className="gorgias-chat__panel">
          <div className="gorgias-chat__panel-header">
            <div className="gorgias-chat__panel-brand">
              <span className="gorgias-chat__panel-avatar">LH</span>
              <div>
                <p className="gorgias-chat__panel-name">Live Healthillie</p>
                <p className="gorgias-chat__panel-status">
                  <span className="gorgias-chat__status-dot" />
                  We typically reply in a few minutes
                </p>
              </div>
            </div>
            <button
              className="gorgias-chat__panel-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="gorgias-chat__panel-body">
            <div className="gorgias-chat__message">
              <span className="gorgias-chat__message-avatar">LH</span>
              <div className="gorgias-chat__message-bubble">
                <p>Hi there! Need help with your order? We're here for you.</p>
              </div>
            </div>
          </div>
          <div className="gorgias-chat__panel-footer">
            <input
              type="text"
              className="gorgias-chat__input"
              placeholder="Type your message..."
            />
            <button className="gorgias-chat__send" aria-label="Send message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Chat bubble trigger */}
      <button
        className="gorgias-chat__trigger"
        onClick={() => setOpen(!open)}
        aria-label="Chat with us"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default GorgiasChat
