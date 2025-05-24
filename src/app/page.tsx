'use client';

export default function Home () {

  const containerStyle = {
    height: '100vh',
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: '1fr 1fr 1fr 0.4fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 0.8fr 1fr 1fr 1fr',
    gridTemplateAreas: `
      "Framework voiceTone voiceTone voiceTone Logo Logo Typo"
      "Framework voiceTone voiceTone voiceTone Logo Logo Typo"
      "Framework voiceTone voiceTone voiceTone Logo Logo Typo"
      "Framework dropColor dropColor icon Logo  Logo Motion"
      "Graphy dropColor dropColor Imagery Imagery Imagery Motion"
      "Graphy dropColor dropColor Imagery Imagery Imagery Motion"
      "Graphy dropColor dropColor Imagery Imagery Imagery Motion"
    `,
  };

  return (
    <>
      <div style={containerStyle} className="p-4">
        <div style={{ gridArea: 'voiceTone', backgroundColor: '#FAD24B', padding: '20px',  color: 'white', fontWeight: 'bold' }}>Voice & Tone</div>
        <div style={{ gridArea: 'dropColor', backgroundColor: '#F08A2E', padding: '20px',  color: 'white', fontWeight: 'bold' }}>Color</div>
        <div style={{ gridArea: 'icon', backgroundColor: '#4000FF', padding: '20px',  color: 'white', fontWeight: 'bold' }}>Icon</div>
        <div style={{ gridArea: 'Imagery', backgroundColor: '#8A2F55', padding: '20px',  color: 'white', fontWeight: 'bold' }}>Imagery</div>
        <div style={{ gridArea: 'Logo', backgroundColor: '#5ED3EE', padding: '20px',  color: 'white', fontWeight: 'bold' }}>Logo</div>
        <div style={{ gridArea: 'Framework', backgroundColor: '#283351', padding: '20px',  color: 'white', fontWeight: 'bold' }} className="rounded-tl-[8px]">Framework</div>
        <div style={{ gridArea: 'Graphy', backgroundColor: '#B4DC19', padding: '20px',  color: 'white', fontWeight: 'bold' }} className="rounded-bl-[8px]">Graphy</div>
        <div style={{ gridArea: 'Typo', backgroundColor: '#FF3300', padding: '20px',  color: 'white', fontWeight: 'bold' }} className="rounded-tr-[8px]">Typography</div>
        <div style={{ gridArea: 'Motion', backgroundColor: '#C8AFF0', padding: '20px',  color: 'white', fontWeight: 'bold' }} className="rounded-br-[8px]">Motion</div>
      </div>
    </>
  );
}
