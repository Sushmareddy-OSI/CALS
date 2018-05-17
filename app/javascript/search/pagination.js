import React from 'react'
import PropTypes from 'prop-types'
import {resultsPerPage} from './common/commonUtils'
import {dictionaryNilSelectValue, floatToNextInt, getFromValue} from 'helpers/commonHelper.jsx'

const Pagination = ({
  paginationClassName,
  searchApiCall,
  sizeValue,
  pageNumber,
  totalNoOfFacilities,
  handleDropDownAndPageNumberChange,
  handlePageNumberChange
}) => (
  <span className={paginationClassName}>
    <select
      className='search_dropdown'
      id={'dropdownFacilities_' + paginationClassName}
      value={sizeValue}
      onChange={(event) => { handleDropDownAndPageNumberChange(1, parseInt(dictionaryNilSelectValue(event.target.options))); searchApiCall(getFromValue(sizeValue, 1), parseInt(dictionaryNilSelectValue(event.target.options))) }}>
      {resultsPerPage.map((noOfResults) =>
        <option key={noOfResults} value={noOfResults}>{noOfResults}</option>
      )}
    </select>
    <button
      id={'previous_button_' + paginationClassName}
      disabled={getFromValue(sizeValue, pageNumber) - sizeValue < 0}
      onClick={() => { handlePageNumberChange(pageNumber - 1); searchApiCall(getFromValue(sizeValue, pageNumber - 1), sizeValue); window.scrollTo(0, 0) }}
      className='previous btn btn-default'>
      <p>&#8249;</p>
    </button>
    <span className='page_number'>{pageNumber}</span>
    <span>of</span>
    <span className='noOfPages'>{floatToNextInt(totalNoOfFacilities, sizeValue)}</span>
    <button
      id={'next_button_' + paginationClassName}
      disabled={getFromValue(sizeValue, pageNumber) + sizeValue >= totalNoOfFacilities}
      onClick={() => { handlePageNumberChange(pageNumber + 1); searchApiCall(getFromValue(sizeValue, pageNumber + 1), sizeValue); window.scrollTo(0, 0) }}
      className='next btn btn-default'>
      <p>&#8250;</p>
    </button>
  </span>
)

Pagination.propTypes = {
  paginationClassName: PropTypes.string,
  totalNoOfFacilities: PropTypes.number,
  sizeValue: PropTypes.number,
  pageNumber: PropTypes.number,
  searchApiCall: PropTypes.func,
  handleDropDownAndPageNumberChange: PropTypes.func,
  handlePageNumberChange: PropTypes.func
}
Pagination.defaultProps = {
  paginationClassName: '',
  totalNoOfFacilities: 0,
  pageNumber: 1,
  sizeValue: 10
}

export default Pagination
