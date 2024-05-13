
export type CountryType = {
  id: number;
  name: string;
  emoji: string;
  code: string;
};

export function CountryCard(props: CountryType): React.ReactNode {
  return (
    <div className="ad-card-container">
        <div className="ad-card-text">
          <div className="ad-card-name">{props.name}</div>
          <div className="ad-card-emoji">{props.emoji}</div>
          <div className="ad-card-code">{props.code}</div>
        </div>
    </div>
  );
}
