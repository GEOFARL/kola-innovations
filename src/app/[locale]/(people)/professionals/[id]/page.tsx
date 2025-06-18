import ProfessionalDetails from '@/components/modules/talents/details/professional-details';

type Props = {
  params: Promise<{ id: string }>;
};

const ProfessionalDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  return <ProfessionalDetails id={id} />;
};

export default ProfessionalDetailsPage;
