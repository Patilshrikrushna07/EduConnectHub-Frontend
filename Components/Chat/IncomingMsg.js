import React from "react";

const IncomingMsg = () => {
  return (
    <div className="p-4  justify-start">
        <div className="bg-gray-400 border border-b-300 max-w-sm rounded-s-xl rounded-tr-xl p-3 mt-2 mr-auto">
          <span className="text-white  break-words">
          Hello! If you're having trouble logging into your account, here are a few solutions to common problems:

If you are receiving a "too many attempts" error, this means you have attempted to log in too many times recently. Please wait 24 hours and try again, and if the problem persists, message us.

If you are receiving a "limit exceeded" error, this generally means you have deleted your account too often recently. Please wait a few weeks until you can sign up again.

These issues are described in more detail here: http://telegra.ph/Common-Login-Problems-03-12

If you don't see your issue listed here, go ahead and send us a message with your phone number and any screenshots that will help us troubleshoot your issue.
          </span>
        </div>
        <div className="flex justify-start hover:underline cursor-pointer">
          <span className="text-sm text-gray-500">
          Yesterday, 12:59 PM
          </span>
        </div>
    </div>
  );
};

export default IncomingMsg;
