import { create } from "zustand";
import { getRequest, getRequestDGMR } from "@/config/axiosInterceptor";
import { isEmpty } from "lodash";
import { setCookie } from "cookies-next";

export const userDetailsStore = create((set) => ({
  hasError: false,
  profileImage: "",
  userDetails: [],
  forumFollowed: [],
  isLoadingForumFollowed: true,
  bookmarked: [],
  isLoadingBookmarked: true,
  mostViewed: [],
  isLoadingMostViewed: true,
  specialityList: [],
  specialityId: "",
  city: "",
  specialityDisplayName: "",
  workplaceList: [],
  workplace: [],
  singleWorkplaceData: [],
  isEmpty: false,
  isLoading: true,
  primePoints: 0,
  doctorEngagementDetails: {},
  getUserDetails: async (member_id) => {
    try {
      const response = await getRequest({
        url: `get-user-basic-details`,
        params: `/21?member_id=23`,
      });
      const data = await response.data;
      console.log("dj",data.data.image_name);
      if (data.status) {
        if (isEmpty(data.data)) {
          return set(() => ({ isEmpty: true }));
        } else {
          setCookie("memberId", data.data.id);
          return set(() => ({
            userDetails: data.data,
            editedUserDetails: data.data,
            memberId: data.data.id,
            profileImage: data.data.image_name,
            isLoading: false,
          }));
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      if (error?.response?.status === 401) {
        window.location.replace(
          `/${login_url}?${redirect_url}=${window?.location?.pathname ?? "/"}`
        );
      } else console.log("error");
    }
    // }
  },
  
  clearUserDetails: () => set(() => ({ userDetails: [] })),
}));
