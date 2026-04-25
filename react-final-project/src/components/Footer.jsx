import React from 'react'

const Footer = () => (
<footer className="magic__footer">
    <div className="footer__divider"></div>
    <div className="footer__grid">
        <div className="footer__section">
            <h3 className="footer__logo">THE PENSIEVE</h3>
            <p className="footer__tagline">Preserving cinematic magic since 2001.</p>
            <div className="social__icons">
                <span className="rune">&#x1F5F2;</span>
                <span className="rune">&#x26AF;</span>
                <span className="rune">&#129668;</span>
                <span className="rune">&#129417;</span>
            </div>
        </div>
        <div className="footer__section">
            <h4>Maurader's Map</h4>
            <ul>
                <li><a href="/">Great Hall</a></li>
                <li><a href="/library">The Library</a></li>
                <li><a href="/houses">Common Rooms</a></li>
            </ul>
        </div>
        <div className="footer__section">
            <h4>Owl Post</h4>
            <p>Get the latest magical updates.</p>
            <div className="owl__post--input">
                <input type="email" placeholder='Enter your email...' />
                <button>Send</button>
            </div>
        </div>
    </div>
        <div className="footer__bottom">
            <p>&copy; 2026 The Pensieve Fan Site. All spells and magic reserved.</p>
        </div>
</footer>

);

export default Footer
