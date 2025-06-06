import { Skeleton } from '@/components/ui/skeleton';

const PersonalInfoSkeleton: React.FC = () => (
  <div className="space-y-6 mt-10">
    <div>
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-10 w-2/3 mt-2" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-14" />
      ))}
      <div className="col-span-2">
        <Skeleton className="h-22" />
      </div>
    </div>

    <Skeleton className="h-14 w-full md:w-1/2" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
      <Skeleton className="h-14" />
      <Skeleton className="h-14" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
      <Skeleton className="h-14" />
      <Skeleton className="h-14" />
    </div>

    <Skeleton className="h-40" />
  </div>
);

export default PersonalInfoSkeleton;
