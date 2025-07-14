import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement>;

const VouchCardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
      {children}
    </div>
  );
};

export default VouchCardLayout;
