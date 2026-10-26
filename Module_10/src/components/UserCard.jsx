import React from 'react';

const UserCard = React.memo(({ user, onToggleFavorite }) => {
    if (!user) {
        return null;
    }

    console.log(`Рендер UserCard: ${user.name}`);

    return (
        <div style={styles.card}>
            <div>
                <h3 style={styles.name}>{user.name}</h3>
                <p style={styles.email}>{user.email}</p>
                <span style={styles.role}>{user.role}</span>
            </div>
            <button
                onClick={() => onToggleFavorite(user.id)}
                style={{
                    ...styles.button,
                    backgroundColor: user.isFavorite ? '#ff4d4f' : '#1890ff',
                }}
            >
                {user.isFavorite ? 'Убрать из избранного' : 'В избранное'}
            </button>
        </div>
    );
});

UserCard.displayName = 'UserCard';

const styles = {
    card: {
        border: '1px solid #e8e8e8',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    name: { margin: '0 0 4px 0', fontSize: '18px' },
    email: { margin: '0 0 8px 0', color: '#666', fontSize: '14px' },
    role: { fontSize: '12px', background: '#f0f0f0', padding: '2px 8px', borderRadius: '4px' },
    button: {
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        color: '#fff',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.2s',
    }
};

export default UserCard;