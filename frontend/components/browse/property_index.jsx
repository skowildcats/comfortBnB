import React from 'react'
import PropertyIndexItem from './property_index_item'


class PropertyIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {properties} = this.props

    return (
      <div className="browse-index">
        <h1 className="browse-header">Stays in ...</h1>
        {properties.map(property => (
          <PropertyIndexItem property={property} key={property.id}/>
        ))}
      </div>
    )
  }
}

export default PropertyIndex  