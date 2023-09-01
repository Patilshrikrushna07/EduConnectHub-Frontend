import { create } from "zustand";
import { getRequest, getRequestDGMR } from "@/config/axiosInterceptor";
import { isEmpty } from "lodash";
import { setCookie } from "cookies-next";

export const userDetailsStore = create((set) => ({
  hasError: false,
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
  isLoadingWorkplace: true,
  academicDetails: [],
  singleAcademicData: [],
  isLoadingAcademicDetails: true,
  publicationDetails: [],
  singlePublicationData: [],
  isWow: false,
  isLoadingPublicationDetails: true,
  setSpecialityId: (data) => set(() => ({ specialityId: data })),
  setCity: (data) => set(() => ({ city: data })),
  setSpecialityDisplayName: (data) =>
    set(() => ({ specialityDisplayName: data })),
  setMemberId: (data) => set(() => ({ memberId: data })),
  setUserDetails: (data) => set(() => ({ userDetails: data })),
  setSingleWorkplaceData: (data) => set(() => ({ singleWorkplaceData: data })),
  setSingleAcademicData: (data) => set(() => ({ singleAcademicData: data })),
  setSinglePublicationData: (data) =>
    set(() => ({ singlePublicationData: data })),
  updatedInterestArea: {},
  setUpdatedInterestArea: (data) => set(() => ({ updatedInterestArea: data })),
  memberId: "",
  isEmpty: false,
  isLoading: true,
  primePoints: 0,
  doctorEngagementDetails: {},
  profileImage: "",
  getUserDetails: async (member_id) => {
    try {
      const response = await getRequest({
        url: getUserDetails + (member_id ? `?member_id=${member_id}` : ""),
        auth: false,
        params: ``,
        withoutLogin: true,
      });
      const data = await response.data;
      if (data.status) {
        if (isEmpty(data.response)) {
          return set(() => ({ isEmpty: true }));
        } else {
          setCookie("memberId", data.response.id);
          return set(() => ({
            userDetails: data.response,
            editedUserDetails: data.response,
            memberId: data.response.id,
            profileImage: data.response.profile_image,
            isLoading: false,
            specialityId: data.response.speciality_id,
            city: data.response.city,
            specialityDisplayName: data.response.speciality_display_name,
            isWow: data.response.eligible_whatsapp_clinic,
          }));
        }
      } else {
        // if (error?.response?.status === 401) {
        //   window.location.replace(`/${login_url}?${redirect_url}=/`);
        // }
        // else
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
