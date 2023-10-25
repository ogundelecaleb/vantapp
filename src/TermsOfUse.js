import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";

const TermsOfUse = () => {
  return (
    <div>
      <Navbar />
      <section className=" px-[16px] md:px-[90px] md:gap-4 lg:px-[200px] mt-[80px] relative mb-[60px] md:mb-[100px] lg:mb-[120px] ">
        <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold  text-[#000] tracking-wide mb-3 pb-3 md:pb-5 border-b border-gray-200">
          Terms of Service
        </h2>
        <h3 className="mb-[24px]">
          IT IS IMPORTANT THAT YOU READ THROUGH THESE TERMS OF USE CAREFULLY,
          BEFORE USING THE WEBSITE/APPLICATION (the “SITE”). IF YOU DO NOT
          ACCEPT THESE TERMS, YOU SHOULD NOT CLICK ON “I AGREE”. PLUMTER
          RECOMMENDS THAT YOU PRINT OUT THE TERMS OF USE BEFORE AGREEING TO
          THEM, TO MAKE SURE YOU ACCEPT THEM WITHOUT RESERVATION. IF YOU USE
          THIS SITE IN ANY WAY WHATSOEVER, YOU ARE AGREEING TO ADHERE TO THESE
          TERMS OF USE, WHICH CONSTITUTE A CONTRACT BETWEEN PLUMTER AND
          YOURSELF.
        </h3>

        <p>
          These Terms and Conditions (the “Terms”) set forth the rights and
          responsibilities of visitors and customers that use the website,
          services, application programming interfaces (APIs), products, and
          platform relating to services (collectively, the “Services”) made
          available by Plumter Limited and its affiliates (“Company,” “We,”
          “Our” or “Us”). Please read these Terms carefully. If you do not agree
          to these Terms, please do not use the Services. If you are using our
          Services, you are agreeing to be bound to these Terms as a customer
          and you represent and warrant that you have the authority to agree to
          these Terms. In that case, “you” or “User” or “your” will refer to
          your business organization in these Terms.
        </p>
        <p className="py-2 ">DEFINITIONS</p>
        <p className="mb-2">
          “Third Party” shall mean any individual, association, partnership,
          firm, company, corporation, consultant, Subcontractor, or a
          combination thereof, including joint ventures, that is not a party to
          this Agreement.
        </p>
        <p className="mb-2">
          “User” shall mean any registered and accredited business or
          organization by Plumter to operate and use the Plumter Account.
        </p>

        <p className="mb-2">
          “User Data“ shall mean any data, information, documents, or materials
          submitted by the User to the Company prior to or during the use of the
          Site
        </p>
        <p className="mb-2">
          Virtual Account” shall mean the wallet account which shall be created
          by Plumter, domiciled with Plumter’s banking partner for the benefit
          of the User upon Plumter’s approval of the User’s request to create a
          profile on its platform.
        </p>
        <ol className="list-decimal" type="1">
          <li className="py-2"> SCOPE</li>

          <li>
            The Terms define the conditions under which the User will access and
            utilize the Services. Any use of the Site by the User entails the
            latter’s full and unreserved acceptance of this Terms. The User
            accepts these Terms, acknowledges having reviewed them in their
            entirety, and therefore waives any ability to invoke contradictory
            documentation.
          </li>
          <li>
            Plumter may modify the Terms at any time. The relationship between
            the Parties will always be governed by the most recent version of
            the Terms on the date of the User’s access and use of the Site. In
            the event that these Terms are modified, the User will be asked to
            agree to the new terms and conditions, which will be applicable as
            from the date of that acceptance.
          </li>
       
        <li className="py-2"> ACCOUNT CREATION</li>
       
          <li>
            Before using the Services, you must: (a) accept and agree to these
            Terms and our Privacy Policy; (b) register with us on the Site and
            create an account (“Account”); (c) be duly registered under the
            relevant and applicable laws in your jurisdiction. When you register
            for an Account, you will be required to provide information that
            will allow us to verify your business and the identity and/or the
            information of its promoters (“User Information”), including but not
            limited to:
            <ol className="list-decimal pl-3">
              <li>Registration documents </li>
              <li>a valid physical address, phone number of the</li>
              <li>bank account information</li>
              <li>a copy of the photo identification promoters</li>
              <li> tax identification information. </li>
              <li>email address</li>
            </ol>
          </li>
          <li>
            You may also be required to provide additional information or
            documentation to allow us to verify your business and/or your
            Account information. We reserve the right to verify the information
            you provide against third-party databases or other sources and you
            authorize us to make such inquiries.
          </li>
          <li>
            The Services will provide metadata and other context for the
            reporting of payments initiated via Services API or web platform,
            available via API, web, or CSV download. You are granted a limited,
            non-exclusive, non-transferable, non-sublicensable, revocable right
            to use such reporting for your internal business analysis purposes
            only, and for no other purpose.
          </li>
          <li>
            Upon your registration on the Site, you will obtain your login
            details as provided by you to enable you to access the services. The
            Site is accessible by you by entering the Username and Password
            (“Login Details”). In order to ensure optimal security of your
            account, we may request that you set up additional security
            verification protocol which include a Two Factor Authentication. We
            may also request access to track your login location or track your
            device in order to enhance the safety of your account.
          </li>
          <li>
            Upon successful registration and provision of required documents,
            Plumter shall review your application and notify you whether your
            application is successful or rejected. Your application may be
            rejected in the event where you are unable to submit the required
            KYC verification details or for any other reason which may or may
            not be communicated to you.
          </li>
          <li>
            Where your application is successful, we will create a Virtual
            Account for you which might be domiciled with our partner bank. You
            hereby grant us the authority to share your User Information with
            our partner bank. Upon creation of your Virtual Account, you will be
            required to fund the Virtual Account from time to time for the
            purpose of your transaction on our Platform. You will be able to add
            more than one user from your organization and access levels for each
            user will depend on your preference.
          </li>
          <li>
            You understand and agree that Plumter is not a bank and monies
            deposited into the Virtual Account will not be deemed as saving and
            as such will not in any circumstance attract interest. You also
            understand that the funds held in your Virtual Account are not
            insured with FDIC, NDIC or any other Insurance institution. Where
            you decide to withdraw from your Virtual Account in a currency
            different from the currency in which the fund is being held, you
            agree that such disbursement will be made at the prevailing parallel
            market rate.
          </li>
        
        <li className="py-2"> PAYMENT NOTIFICATION</li>
       
          <li>
            Plumter will update the User on the status of its payment made via
            the platform; once a transaction is completed, Plumter will send out
            an email to notify you of such completion. Plumter will also provide
            receipts (either via email or the Virtual Account dashboard in a
            format that you can download). The payment’s status of your
            transaction will also be updated to “Failed” if for some reason the
            payment wasn’t completed successfully. Please note that because
            Plumter successfully acknowledges a payment process doesn’t mean it
            has been successfully received by the recipient. Plumter will not be
            responsible for any errors by you in respect of the accuracy of
            recipient account details and charges from recipient banks nor will
            Plumter be responsible for the failures or mistakes that may occur
            as a result of the activities third party processors, partners
            banks, intermediary banks or recipient banks. Plumter will also not
            be responsible for the transaction charges if monies are refunded.
          </li>
     
        <li className="py-2"> ACCOUNT SECURITY</li>
       
          <li>
            The User is given dedicated, secure access to their account using
            their Login Details. The User is responsible for the password,
            chosen by them at the time of registration, and undertake
          </li>
        </ol>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[80px] lg:mb-[120px]">
        <div className="flex py-[40px] md:py-[78px] bg-[#f9f9f9] px-[30px] md:px-[50px] lg:px-[80px] gap-[60px] flex-row items-center rounded-[16px]">
          <div className="hidden md:flex w-[40%]">
            <img src="./image/appwallet.png" alt="" className="mx-auto" />
          </div>
          <div className="w-full md:w-[60%]">
            <h3 className="  text-[24px] md:text-[28px] lg:text-[40px] mb-[16px] md:mb-[36px] lg:mb-[56px] font-medium">
              Download Vant app today and start your journey towards financial
              freedom.
            </h3>
            <div className="flex justify-center items-center gap-6 mt-[40px]">
              <a
                href="https://www.google.com/url?q=https://play.google.com/store/apps/details%3Fid%3Dcom.vant.app%26hl%3Den_US%26referrer%3Dutm_source%253Dgoogle%2526utm_medium%253Dorganic%2526utm_term%253Dvant%2Bapp&sa=U&ved=2ahUKEwixkrSIwpqBAxVgU0EAHVPRDAMQFnoECAUQAg&usg=AOvVaw3iL8zaaBsLYYudFsvEMTLY "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./image/googleplay.png"
                  alt="google play logo"
                  className="w-[135px] h-[40px] lg:w-[189px] lg:h-[56px]"
                />
              </a>
              <a
                href="https://apps.apple.com/ng/app/vant-app/id6464392721"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./image/appstore.png"
                  alt="app store logo"
                  className="w-[120px] h-[40px] lg:w-[168px] lg:h-[56px]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
