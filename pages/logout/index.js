import React from 'react'

const index = () => {
  return (
    <div>
      
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
    const { req } = context;
    const cookies = req.headers.cookie || ''; // Handle the case where no cookies are present
    const cookieArray = cookies.split(';').map(cookie => cookie.trim());
    
    const authTokenCookie = cookieArray.find(cookie => cookie.startsWith('authToken='));
  
    if (authTokenCookie) {
      return {
        redirect: {
          destination: `/`,
          permanent: false,
        },
      };
    }
    return { props: {} };
  }