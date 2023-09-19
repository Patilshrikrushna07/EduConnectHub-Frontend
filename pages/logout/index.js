import React from "react";
import { removeCookies } from "cookies-next";

const Index = () => {
  return <div></div>;
};

export default Index;

export async function getServerSideProps(context) {
  // Clear the cookies
  removeCookies(context.req, "authToken");
  removeCookies(context.req, "memberId");

  const cookies = context.req.headers.cookie || "";
  const cookieArray = cookies.split(";").map((cookie) => cookie.trim());
  const authTokenCookie = cookieArray.find((cookie) =>
    cookie.startsWith("authToken=")
  );
  if (!authTokenCookie) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
