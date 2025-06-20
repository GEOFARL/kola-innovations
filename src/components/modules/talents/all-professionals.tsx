import { Professional } from '@/lib/types/talents/professional';
import PersonGrid from './person-grid';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { useTranslations } from 'next-intl';

type Props = {
  professionals: Professional[];
};

const AllProfessionals: React.FC<Props> = ({ professionals }) => {
  const t = useTranslations('talents.all');

  const people = professionals.map((pro) => ({
    ...pro,
    href: APP_ROUTES.PROFESSIONAL_DETAILS(pro.id),
  }));

  return <PersonGrid title={t('title')} people={people} />;
};

export default AllProfessionals;
