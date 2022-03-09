import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from "../components/InfoCard"
import { format } from "date-fns";

function Search({searchResults}) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>

    <main className='flex'>
      <section className='flex-grow pt-14 px-6'>
        <p className='text-xs'>300+ Stays - {range} - for {numberOfGuests} number of guests</p>
        <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

        <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
          <p className='button'>Cancellation Flexibility</p>
          <p className='button'>Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More</p>
        </div>

        <div className='flex flex-col'>
        {
          searchResults?.map(({description, img, lat, location, long, price, star, title, total}) => (
            <InfoCard 
              key={img}
              description={description}
              img={img}
              lat={lat}
              location={location}
              long={long}
              price={price}
              star={star}
              title={title}
              total={total}
            />
          ))
        }
        </div>
      </section>
    </main>

      <Footer />
    </div>
  )
}

export default Search 

export async function getServerSideProps(/* Context */) {
  const searchResults = await fetch(`https://links.papareact.com/isz`)
    .then(res => res.json());

  return {
    props: {
      searchResults
    }
  }
}