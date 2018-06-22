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
    let tableDocuments = this.props.personDocuments
    let newTableDocuments = tableDocuments.update(index, x => x.set(key, value))
    let itemsArray = Immutable.fromJS({'items': []})
    itemsArray = itemsArray.set('items', newTableDocuments)
    this.props.handleChange(this.props.tableName, itemsArray)
  }
  render () {
    const personDocuments = this.props.personDocuments
    console.log(personDocuments.toJS())
    return (
       <div className='rfa01a-list table-responsive'>
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
               personDocuments && personDocuments.map((docs, index) => {
                 return this.props.editMode
                   ? <TrackingListRowsEdit
                     key={index}
      				       tableType={this.props.tableType}
                     index={index}
                     handleChange={this.updateRowChanges}
                     docs={docs}
                   /> : <TrackingListRowsShow
                     key={index}
      				       tableType={this.props.tableType}
                     index={index}
                     docs={docs}
                   />
               })
             }
           </tbody>
         </table>
       	</div>
    )
  }
}

TrackingTableWithEditShow.defaultProps = {
	personDocuments: Immutable.fromJS([])
}