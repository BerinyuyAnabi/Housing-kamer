import React from "react";
import { useParams } from 'react-router-dom';
import { detailedList } from "../../data/Data"
import DetailCard from './DetailCard'

function ListDetails() {
  const { propertyId } = useParams()
  const filtersingle = () => { 
    return detailedList.find(filter=>filter.id === Number(propertyId))
   }
  
  return (
    <>
      <DetailCard filtersingle={filtersingle} />
    </>
  )
    
}

export default ListDetails;
