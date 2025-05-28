type Props = {
  value: string;
  title: string;
  description: string;
};

const StatItem: React.FC<Props> = ({ value, title, description }) => {
  return (
    <div className="max-w-[300px]">
      <p className="h2 text-primary mb-2">
        {value}
        <span className="text-primary text-[28px] font-semibold">+</span>
      </p>
      <h6 className="h6 text-dark-900 mb-4">{title}</h6>
      <p className="small-1-md text-dark-700">{description}</p>
    </div>
  );
};

export default StatItem;
