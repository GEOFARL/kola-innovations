import MoreIcon from '@/assets/icons/talents/more.svg';
import Button from '@/components/ui/button/button';
import Card from '@/components/ui/card';
import { VouchRequest } from '@/lib/types/profile/vouch';
import Image from 'next/image';

type Props = {
  data: VouchRequest;
  invite?: boolean;
};

const VouchCard: React.FC<Props> = ({ data, invite }) => {
  const { image, name, relationship } = data;
  return (
    <Card className="p-4 relative flex flex-col">
      <Image
        src={image}
        alt={name}
        height={48}
        width={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {!invite && (
        <Button
          iconCircle
          iconOnly
          size="sm"
          className="absolute top-4 right-4 bg-transparent border-dark-200"
        >
          <MoreIcon />
        </Button>
      )}

      <div className="mt-3">
        <h6 className="h6 text-dark-900">{name}</h6>
        <p className="small-1 text-dark-600 mt-1">{relationship}</p>
      </div>

      {invite && (
        <div className="mt-4 flex-1 flex flex-col-reverse lg:flex-row items-end gap-[10px]">
          <Button
            responsiveSize={{ base: 'sm', lg: 'xs' }}
            className="lg:flex-1 w-full"
            color="black"
            variant="link"
          >
            Reject
          </Button>
          <Button
            responsiveSize={{ base: 'sm', lg: 'xs' }}
            className="lg:flex-1 w-full"
            variant="secondary"
          >
            Accept
          </Button>
        </div>
      )}
    </Card>
  );
};

export default VouchCard;
