import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useGeneralStore = create((set) => (
  // persist(
    {
  isLoginOpen: false,
  general_count: 0,
  username: "1",
  email: "2",
  accessToken : "3",
  refreshToken : "4",
  
  setLoginIsOpen: (isLoginOpen) => {
    set({ isLoginOpen })
  },
  setUser: (user) => set(user),
  // generalLogin: (data) => set((state) => (
  //   {
  //     general_count: 10,
  //     accessToken: data.accessToken,
  //     refreshToken : data.refreshToken,
  //     username : data.username,
  //     email : data.email
  // }
  // )),
  logout: () => {
    set({ accessToken: "", refreshToken: "", email: "", username: "", general_count: 111 })
  },
  clear: () => set({}, true),
  // generalLogOut: (data) => set((state)=> ({
  //   general_count: 12,
  //   accessToken:"",
  //   refreshToken:"",
  //   email: "",
  //   username: ""
  // })),
  increasePopulation: () => set((state) => ({
      general_count: state.general_count + 1 ,
      isLoginOpen : !(state.isLoginOpen),
     accessToken:"ace"+ state.general_count,
     refreshToken:"ref",
     email: "test@co.co",
     username: "test"
    })),
  removeAllBears: () => set({ general_count: 0 }),

  //inc: () => set((state) => ({ general_count: state.general_count + 1 })),
}),
// {
//     name: 'general-store', // 저장소 key값
//     // storage: createJSONStorage(() => localStorage), // 저장소
//     version: 1.0, // version 정보
//})
)
export default useGeneralStore