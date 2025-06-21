"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function LoginButton() {
  const { data: session } = useSession();
  const [userData, setUserdata] = useState([]);
  useEffect(() => {
    if (session) {
      console.log("Session data:", session.user.email);
      const userEmail = session.user.email;
      const fetchDetails = async () => {
        try {
          const response = await axios.get("https://portfolioback-kappa.vercel.app/getuser", {
  params: { email: userEmail },
  withCredentials: true, // ✅ fixed spelling and placement
});
          console.log("User data:", response.data.userDetails);
          setUserdata(response.data.userDetails);
          console.log("Userset data:", userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchDetails();
    }
  }, [session?.user?.email]); // Dependency array to avoid unnecessary API calls

  return (
    <div>
      {session ? (
        <div>
          <nav className="bg-white shadow-md py-2 px-8 flex justify-between items-center">
            <a href="/">
              <h1 className="text-3xl font-bold text-indigo-600">
                Portfolio Generator
              </h1>
            </a>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Sign Out
            </button>
          </nav>
          <p className="text-center">Welcome prod, {session.user.name}</p>
          {/* Templates Preview Section */}
          <section className="py-16  text-center">
            <h2 className="text-3xl font-semibold">Your websites</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {userData.map((user) => (
                <TemplateCard
                  key={user.id}
                  image="template1.png"
                  title="Modern"
                  editlink={`https://editportfolio.vercel.app/${user.id}`}
                  previewlink={`https://portfoliotemp1.vercel.app/${user.id}`}
                  visitors={user.visitors}
                />
              ))}
              {/* <TemplateCard image="template1.png" title="Modern" link = 'https://soumyajit.vercel.app/' />
          <TemplateCard image="template1.png" title="Modern" link = 'https://soumyajit.vercel.app/' /> */}
            </div>
          </section>
        </div>
      ) : (
        <>
          <nav className="bg-white shadow-md py-2 px-8 flex justify-between items-center">
            <a href="/">
              <h1 className="text-3xl font-bold text-indigo-600">
                Portfolio Generator
              </h1>
            </a>

            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Sign In
            </button>
          </nav>
          <h1 className="text-center text-gray-700">
            Please SignIn first to continue
          </h1>
        </>
      )}
    </div>
  );
}
function TemplateCard({ image, title, previewlink, editlink, visitors }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg mb-2 font-semibold">{title}</h3>
        <a
          target="_blank"
          href={previewlink}
          className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Preview
        </a>
        <br></br>
        <div className="mt-3 px-1 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <a target="_blank" className="px-3" href={editlink}>
            Edit Site
          </a>
        </div>
        <div className="mt-3 px-1 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <h1>Visitor Count:{visitors}</h1>
        </div>
      </div>
    </div>
  );
}
