import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '84c143d4f2msh3dc3a176c01524ep11d3c9jsnf1dacb849802',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};*/

/*fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '84c143d4f2msh3dc3a176c01524ep11d3c9jsnf1dacb849802');

        return headers;
      }
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world' }),
      getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
      getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
      getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
      getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    }),
  });

  export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
  } = shazamCoreApi;
