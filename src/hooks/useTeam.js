import create from 'zustand';

const useTeam = create((set) => ({
  team: [],
  add: (index) => set((state) => ({ team: [...state.team, index] })),
  remove: (index) => set((state) => ({ team: state.team.filter((i) => i !== index) })),
  reset: () => set({ team: [] }),
}));

export default useTeam;
