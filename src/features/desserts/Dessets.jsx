import React from 'react'
import { useGetAllDessertsQuery } from '../../services/dessertApi'

function Dessets() {
    var {iseLoading,data:desserts}=useGetAllDessertsQuery();
  return (
    <div>Dessets</div>
  )
}

export default Dessets