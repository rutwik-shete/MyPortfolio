type Props = { features: { body: string; header: string }[] };
export const Features = ({ features }: Props) => {
  return features.map((feature, i) => {
    return (
      <div key={`feature-${i}`}>
        <h3>{feature.header}</h3>
        <p>{feature.body}</p>
      </div>
    );
  });
};
