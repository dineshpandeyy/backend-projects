import React from 'react'

const Card = ({ player, title = "Card Title", description = "This is a placeholder description for the card. Add your own content here." }) => {
    return (
        <div className="card shadow-sm mb-4 border-0" style={{ width: "18rem", transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)'; }}
        >
            <img className="card-img-top" src={player} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default Card

