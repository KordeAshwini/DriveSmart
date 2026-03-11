// import React, { useState } from "react";
// import SignIn from "./SignIn";
// import ForgotPasswordModal from "./ForgotPasswordModal";
// import OTPModal from "./OTPModal";
// import ResetPasswordModal from "./ResetPasswordModal";

// const AuthContainer = ({ isSignInOpen, setIsSignInOpen }) => {
//     const [activeModal, setActiveModal] = useState(null); // 'forgot', 'otp-reset', 'reset-password'
//     const [userEmail, setUserEmail] = useState("");

//     const closeAll = () => {
//         setIsSignInOpen(false);
//         setActiveModal(null);
//     };

//     return (
//         <>
//             {/* 1. Main Sign In */}
//             <SignIn
//                 isOpen={isSignInOpen}
//                 onClose={closeAll}
//                 onSwitchToForgot={() => {
//                     setIsSignInOpen(false);
//                     setActiveModal('forgot');
//                 }}
//             />

//             {/* 2. Forgot Password (Enter Email) */}
//             <ForgotPasswordModal
//                 isOpen={activeModal === 'forgot'}
//                 onClose={closeAll}
//                 onSendOTP={(email) => {
//                     setUserEmail(email);
//                     setActiveModal('otp-reset');
//                 }}
//             />

//             {/* 3. Reusable OTP Modal (Used here for Password Reset) */}
//             <OTPModal
//                 isOpen={activeModal === 'otp-reset'}
//                 onClose={closeAll}
//                 email={userEmail}
//                 title="Reset Authorization"
//                 description="Enter the code to prove ownership of your account."
//                 onVerify={() => setActiveModal('reset-password')}
//             />

//             {/* 4. Final Reset Password */}
//             <ResetPasswordModal
//                 isOpen={activeModal === 'reset-password'}
//                 onClose={closeAll}
//             />
//         </>
//     );
// };

// export default AuthContainer;

// import React, { useState } from "react";
// import SignIn from "./SignIn";
// import ForgotPasswordModal from "./ForgotPasswordModal";
// import OTPModal from "./OTPModal";
// import ResetPasswordModal from "./ResetPasswordModal";

// const AuthContainer = ({ isSignInOpen, setIsSignInOpen, setIsLoggedIn }) => {

//     const [activeModal, setActiveModal] = useState(null);
//     // 'forgot', 'otp-reset', 'reset-password'

//     const [userEmail, setUserEmail] = useState("");

//     const closeAll = () => {
//         setIsSignInOpen(false);
//         setActiveModal(null);
//     };

//     return (
//         <>

//             {/* 1️⃣ Sign In Modal */}
//             <SignIn
//                 isOpen={isSignInOpen}
//                 onClose={closeAll}
//                 setIsLoggedIn={setIsLoggedIn}
//                 onSwitchToForgot={() => {
//                     setIsSignInOpen(false);
//                     setActiveModal("forgot");
//                 }}
//             />

//             {/* 2️⃣ Forgot Password (Enter Email) */}
//             <ForgotPasswordModal
//                 isOpen={activeModal === "forgot"}
//                 onClose={closeAll}
//                 onSendOTP={(email) => {
//                     setUserEmail(email);
//                     setActiveModal("otp-reset");
//                 }}
//             />

//             {/* 3️⃣ OTP Verification for Reset Password */}
//             <OTPModal
//                 isOpen={activeModal === "otp-reset"}
//                 onClose={closeAll}
//                 email={userEmail}
//                 title="Reset Authorization"
//                 description="Enter the code to prove ownership of your account."
//                 onVerify={() => setActiveModal("reset-password")}
//             />

//             {/* 4️⃣ Reset Password Modal */}
//             <ResetPasswordModal
//                 isOpen={activeModal === "reset-password"}
//                 onClose={closeAll}
//             />

//         </>
//     );
// };

// export default AuthContainer;


import React, { useState } from "react";
import SignIn from "./SignIn";
import ForgotPasswordModal from "./ForgotPasswordModal";
import ResetOTP from "./ResetOTP";
import ResetPasswordModal from "./ResetPasswordModal";

const AuthContainer = ({ isSignInOpen, setIsSignInOpen, setIsLoggedIn, setFirstName }) => {

    const [activeModal, setActiveModal] = useState(null);
    // 'forgot', 'otp-reset', 'reset-password'

    const [userEmail, setUserEmail] = useState("");

    const closeAll = () => {
        setIsSignInOpen(false);
        setActiveModal(null);
    };

    return (
        <>
            {/* Sign In */}
            <SignIn
                isOpen={isSignInOpen}
                onClose={closeAll}
                onSwitchToForgot={() => {
                    setIsSignInOpen(false);
                    setActiveModal("forgot");
                }}
                setIsLoggedIn={setIsLoggedIn}
                setFirstName={setFirstName}
            />

            {/* Forgot Password */}
            <ForgotPasswordModal
                isOpen={activeModal === "forgot"}
                onClose={closeAll}
                onSendOTP={(email) => {
                    setUserEmail(email);
                    setActiveModal("otp-reset");
                }}
            />

            {/* Reset OTP */}
            <ResetOTP
                isOpen={activeModal === "otp-reset"}
                email={userEmail}
                onClose={closeAll}
                onVerified={() => setActiveModal("reset-password")}
            />

            {/* Reset Password */}
            <ResetPasswordModal
                isOpen={activeModal === "reset-password"}
                email={userEmail}
                onClose={closeAll}
            />
        </>
    );
};

export default AuthContainer;