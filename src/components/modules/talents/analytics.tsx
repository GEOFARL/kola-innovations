'use client';

type AnalyticsItem = {
  label: string;
  value: number | string;
};

type Props = {
  title: string;
  items: AnalyticsItem[];
};

const Analytics: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="lg:p-6 py-6 px-3">
      <h2 className="font-semibold hidden lg:block text-lg text-dark-900 mb-6">
        {title}
      </h2>

      <div className="space-y-4 lg:space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-sm font-medium text-dark-900">
              {item.label}
            </span>
            <span className="text-base font-semibold text-dark-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
