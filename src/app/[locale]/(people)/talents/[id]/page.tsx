import TalentDetails from '@/components/modules/talents/details/talent-details';

type Props = {
  params: Promise<{ id: string }>;
};

const TalentsDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  return <TalentDetails id={id} />;
};

export default TalentsDetailsPage;
