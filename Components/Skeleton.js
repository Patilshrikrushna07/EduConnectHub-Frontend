import React from "react";

export const WidgetSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-2 ">
      <div className="aspect-video bg-gray-400 animate-pulse rounded-lg"></div>
      <div className=" grid gap-2 content-center">
        <div className="h-5 bg-gray-400 animate-pulse"></div>
        <div className="h-5 bg-gray-400 animate-pulse w-2/5"></div>
      </div>
    </div>
  );
};

export const CoverImage = () => {
  return (
    <div className="relative">
    <div className="w-auto h-auto md:rounded-t-lg ">
      <div className="aspect-video bg-gray-400 animate-pulse rounded-t-lg"></div>
    </div>
    </div>
  );
};

export const ProfileWidgetSkeleton = () => {
  return (
    <div className="grid grid-cols-[20%,1fr] gap-2 ">
      <div className="aspect-video bg-gray-400 animate-pulse rounded-lg"></div>
      <div className=" grid gap-2 content-center">
        <div className="h-5 bg-gray-400 animate-pulse"></div>
        <div className="h-5 bg-gray-400 animate-pulse w-2/5"></div>
      </div>
    </div>
  );
};
export const PostSkeleton = () => {
  return (
    <div className="grid gap-2 bg-white p-3 rounded-none md:rounded-lg mb-3 ">
      <div className="grid grid-cols-[48px,1fr] items-center gap-2">
        <div className="aspect-square rounded-full bg-gray-400 animate-pulse"></div>
        <div>
          <div className="h-3 bg-gray-400 animate-pulse w-2/3 mb-2"></div>
          <div className="h-3 bg-gray-400 animate-pulse w-2/5"></div>
        </div>
      </div>
      <div className=" grid gap-2 content-center">
        <div className="h-5 bg-gray-400 animate-pulse"></div>
        <div className="h-5 bg-gray-400 animate-pulse w-2/5"></div>
      </div>
      <div className="aspect-video bg-gray-400 animate-pulse rounded-lg"></div>
    </div>
  );
};

export const CommentsSkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-[48px,1fr] gap-2 ">
        <div className="aspect-square bg-gray-400 animate-pulse rounded-lg"></div>
        <div className=" grid gap-2 content-center">
          <div className="h-5 bg-gray-400 animate-pulse w-1/4"></div>
          <div className="h-5 bg-gray-400 animate-pulse w-1/2"></div>
        </div>
      </div>
      <div className="h-5 bg-gray-400 animate-pulse mt-3"></div>
      <div className="h-5 bg-gray-400 animate-pulse mt-3 w-3/4"></div>
    </div>
  );
};

export const RelatedSkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-[40%,60%] gap-2 mt-3 bg-white p-4 rounded-lg">
        <div className="aspect-video bg-gray-400 animate-pulse rounded-lg"></div>
        <div className="grid gap-2 content-center">
          <div className="h-5 bg-gray-400 animate-pulse "></div>
          <div className="h-5 bg-gray-400 animate-pulse w-1/2"></div>
          <div className="h-5 bg-gray-400 animate-pulse mt-3"></div>
          <div className="h-5 bg-gray-400 animate-pulse  w-3/4"></div>
        </div>
      </div>
    </div>
  );
};
export const RelatedCategorySkeleton = () => {
  return (
    <div className="grid grid-cols-8 gap-2 p-1 ">
      <div className="bg-gray-400 animate-pulse rounded-lg"></div>
      <div className="h-7 bg-gray-400 animate-pulse rounded-lg"></div>
      <div className="h-7 bg-gray-400 animate-pulse rounded-lg"></div>
      <div className="h-7 bg-gray-400 animate-pulse rounded-lg"></div>
    </div>
  );
};

export const SurveyQuestionsSkeleton = () => {
  return (
    <div>
      <div className="grid gap-2 mt-8 bg-white p-4 rounded-lg">
        {/* <div className="aspect-video bg-gray-400 animate-pulse rounded-lg"></div> */}
        <div className="grid gap-2 content-center">
          <div className="h-5 bg-gray-400 animate-pulse w-1/2"></div>
          <hr />
          <div className="h-5 bg-gray-400 animate-pulse "></div>
          <div className="h-5 bg-gray-400 animate-pulse mt-3"></div>
          <div className="h-10 bg-gray-400 animate-pulse rounded-lg mt-3  w-3/4"></div>
          <div className="h-10 bg-gray-400 animate-pulse rounded-lg mt-3 w-3/4"></div>
          <div className="h-10 bg-gray-400 animate-pulse  rounded-lg mt-3 w-3/4"></div>
          <div className="h-10 bg-gray-400 animate-pulse  rounded-lg mt-3 w-3/4"></div>
          <div className="h-10 bg-gray-400 animate-pulse  rounded-lg mt-3 w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export const ForumContributorSkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 bg-white p-4 pt-14">
        <div className="grid gap-2">
          <div className="h-12 bg-gray-400 animate-pulse rounded-lg "></div>
          <div className="h-12 bg-gray-400 animate-pulse rounded-lg "></div>
          <div className="h-12 bg-gray-400 animate-pulse rounded-lg "></div>
        </div>{" "}
        <div className="grid gap-2">
          <div className="h-12 bg-gray-400 animate-pulse rounded-lg "></div>
          <div className="h-12 bg-gray-400 animate-pulse rounded-lg "></div>
          <div className="h-12 bg-gray-400 animate-pulse rounded-lg "></div>
        </div>{" "}
        <div className="grid gap-2">
          <div className="h-12 bg-gray-400 animate-pulse rounded-lg "></div>
          <div className="h-12 bg-gray-400 animate-pulse rounded-lg "></div>
          <div className="h-12 bg-gray-400 animate-pulse rounded-lg "></div>
        </div>
      </div>
    </div>
  );
};

export const ForumSubcribersSkeleton = () => {
  return (
    <div>
      <div className="grid bg-white p-4 ">
        <div className="grid gap-2 md:grid-cols-2">
          <div className="h-16 w-full bg-gray-400 animate-pulse rounded-lg"></div>
          <div className="h-16 w-full bg-gray-400 animate-pulse rounded-lg"></div>
          <div className="h-16 w-full bg-gray-400 animate-pulse rounded-lg"></div>
          <div className="h-16 w-full bg-gray-400 animate-pulse rounded-lg"></div>
          <div className="h-16 w-full bg-gray-400 animate-pulse rounded-lg"></div>
          <div className="h-16 w-full bg-gray-400 animate-pulse rounded-lg"></div>
        </div>{" "}
      </div>
    </div>
  );
};

export const SuggestionsSkeleton = ({ isWhat }) => {
  return (
    <div>
      <div
        className={`grid ${
          isWhat == "viewer" ? "grid-cols-0" : "grid-cols-4"
        } gap-2 bg-white p-4 pt-14`}
      >
        <div className="h-64 bg-gray-400 animate-pulse rounded-lg "></div>
        <div className="h-64 bg-gray-400 animate-pulse rounded-lg "></div>
        <div className="h-64 bg-gray-400 animate-pulse rounded-lg "></div>
        <div className="h-64 bg-gray-400 animate-pulse rounded-lg "></div>
      </div>
    </div>
  );
};

export const ForumFollowingSkeleton = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 p-4 pt-14 bg-white">
        <div className="h-12 md:h-72 bg-gray-400 animate-pulse rounded-lg"></div>
        <div className="h-12 md:h-72 bg-gray-400 animate-pulse rounded-lg"></div>
        <div className="h-12 md:h-72 bg-gray-400 animate-pulse rounded-lg"></div>
        <div className="h-12 md:h-72 bg-gray-400 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export const TextSkeleton = () => {
  return (
    <div>
      <div className="h-4 w-36 bg-gray-400 animate-pulse rounded-lg my-2"></div>
    </div>
  );
};
export const InterestSkeleton = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="h-10 w-36 bg-gray-400 animate-pulse rounded-lg"></div>
        <div className="h-10 w-36 bg-gray-400 animate-pulse rounded-lg"></div>
        <div className="h-10 w-36 bg-gray-400 animate-pulse rounded-lg"></div>
        <div className="h-10 w-36 bg-gray-400 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export const BarSkeleton = () => {
  return (
    <div>
      <div className="h-2 w-full bg-gray-400 animate-pulse rounded-lg"></div>
    </div>
  );
};

export const NumberSkeleton = () => {
  return (
    <div>
      <div className="h-4 w-10 bg-gray-400 animate-pulse rounded-lg my-2"></div>
    </div>
  );
};

export const ProfileSkelton = () => {
  return (
    <>
      <div className="  bg-white rounded-t-lg">
        <div className="rounded-t-lg rounded-b-none h-48 bg-gray-300 animate-pulse relative">
          <div className="rounded-full h-28 w-28 bg-slate-400 animate-pulse absolute left-4 -bottom-8"></div>
        </div>
        <div className="mt-5 p-4">
          <div className="h-4 w-36 bg-gray-400 animate-pulse rounded-lg my-2"></div>
          <div className="h-4 w-36 bg-gray-400 animate-pulse rounded-lg my-2"></div>
          <div className="h-4 w-44 bg-gray-400 animate-pulse rounded-lg my-2"></div>
        </div>
        <div className="flex  p-4 gap-3">
          <div className="h-10 w-36 bg-gray-400 animate-pulse rounded-full  my-2"></div>
          <div className="h-10 w-36 bg-gray-400 animate-pulse rounded-full  my-2"></div>
        </div>
      </div>
    </>
  );
};

export const NewsSkeleton = () => {
  return (
    <div className="grid p-1 rounded-lg  relative h-[calc(100vh-122px)]">
      <div className="flex flex-col gap-2">
        <div className="aspect-video bg-gray-400 animate-pulse "></div>
        <div className="h-10 bg-gray-400 animate-pulse"></div>
        <div className="h-5 bg-gray-400 animate-pulse"></div>
        <div className="h-5 bg-gray-400 animate-pulse"></div>
        <div className="h-5 bg-gray-400 animate-pulse"></div>
        <div className="h-5 bg-gray-400 animate-pulse w-3/5"></div>
        <div className="h-5 bg-gray-400 animate-pulse w-2/5"></div>
      </div>
      <div className="absolute bottom-0 w-full h-12 bg-gray-400 animate-pulse"></div>
    </div>
  );
};
