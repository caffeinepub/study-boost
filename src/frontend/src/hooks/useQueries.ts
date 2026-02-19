import { useActor } from './useActor';

// Placeholder for future React Query hooks
// This file will contain custom hooks for backend operations
// Example structure:
// export function useGetData() {
//   const { actor, isFetching } = useActor();
//   return useQuery({
//     queryKey: ['data'],
//     queryFn: async () => {
//       if (!actor) return [];
//       return actor.getData();
//     },
//     enabled: !!actor && !isFetching,
//   });
// }

export function useBackendReady() {
  const { actor, isFetching } = useActor();
  return { isReady: !!actor && !isFetching };
}
