import {createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myapis = createApi({
    reducerPath:"myapis",
    baseQuery:fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    endpoints:(builder) =>({
        getPeople: builder.query({
            query: () => `people`
        }),
        getPlanet: builder.query({
            query: () => `planet`
        }),
        getStarShip: builder.query({
            query: () => `starship`
        })
    }),
    
})
     
export const { useGetPeopleQuery , useGetPlanetQuery, useGetStarShipQuery } = myapis;