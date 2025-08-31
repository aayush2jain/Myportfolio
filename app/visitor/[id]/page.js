"use client"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function VisitorPage({ params }) {
    const [data, setData] = useState(null);
    useEffect(()=>{
       const fetchData = async () => {
           const response = await axios.get('https://portfolioback-kappa.vercel.app/getvisitor',{params:{id:params.id},withCredentials:true});
           setData(response.data);
       };
       fetchData();
    }, []);
   console.log(data);

    return (
        <div>
            <h1>Visitor ID: {data}</h1>
            {/* Render visitor details here */}
        </div>
    );
}