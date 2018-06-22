import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackingListRowsEdit from './trackingListRowsEdit'	
import TrackingListRowsShow from './trackingListRowsShow'

export default class TrackingTableWithEditShow extends React.Component {
  constructor(props) {
    super(props)
    this.updateRowChanges = this.updateRowChanges.bind(this)
  }
  updateRowChanges (key, value, index) {
    let tableDocuments = this.props.trackingDocuments
    let newTableDocuments = tableDocuments.update(index, x => x.set(key, value))
    let itemsArray = Immutable.fromJS({'items': []})
    itemsArray = itemsArray.set('items', newTableDocuments)
    this.props.handleChange(this.props.tableName, itemsArray)
  }
  render () {
    const trackingDocuments = this.props.trackingDocuments
    //console.log(trackingDocuments.toJS())
    return (
      <div className='container'>
       <div className='rfa01a-list table-responsive'>
         <h3>{this.props.cardHeader}</h3>
         <table className='table table-hover'>
           <thead>
             <tr>
               {
                 this.props.colHeaders.map((header, index) => {
                   return (
                     <th key={index} scope='col'>{header}</th>
                   )
                 })
               }
             </tr>
           </thead>
           <tbody>
             {
               trackingDocuments && trackingDocuments.map((docs, index) => {
                 return this.props.editMode
                   ? <TrackingListRowsEdit
                     key={index}
                     index={index}
                     handleChange={this.updateRowChanges}
                     docs={docs}
                   /> : <TrackingListRowsShow
                     key={index}
                     index={index}
                     docs={docs}
                   />
               })
             }
           </tbody>
         </table>
       </div>
     </div>
    )
  }
}