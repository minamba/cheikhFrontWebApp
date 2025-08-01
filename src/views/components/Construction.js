import React from "react";
import '../../App.css'; // Conserve ceci si tu as des styles globaux

export const Construction = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>🚧 Site en construction...</h1>
                <p style={styles.subtitle}>
                    Nous travaillons activement pour vous offrir une meilleure expérience.<br />
                    Revenez très bientôt !
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#e67e22',
    },
    subtitle: {
        fontSize: '1.1rem',
        color: '#555',
    },
};
