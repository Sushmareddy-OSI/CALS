import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import {DropDownField} from 'components/common/dropDownField'
import CriminalFields from './criminalFields'
import YesNoRadioComponent from 'components/common/yesNoFields'

import CardLayout from 'components/common/cardLayout'
import Button from 'components/common/button'
import {Rfa01bCrimeBackGroundAgainstCohabCardText} from 'constants/rfaText'
import {disclosureDefaults} from 'constants/defaultFields'
import {addCardAsJS, removeCard} from 'helpers/cardsHelper.jsx'

export default class CrimeBackgroundAgainstCohabitant extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.clickClose = this.clickClose.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
  }

  addCard (event) {
    this.props.setParentState('arrested_for_crime_disclosures', addCardAsJS(this.props.disclosures, disclosureDefaults))
  }
  clickClose (cardIndex) {
    this.props.setParentState('arrested_for_crime_disclosures', removeCard(this.props.disclosures, cardIndex, disclosureDefaults))
  }

  onFieldChange (cardIndex, key, value) {
    let disclosures = Immutable.fromJS(this.props.disclosures)
    disclosures = disclosures.update(cardIndex, x => x.set(key, value))
    this.props.setParentState('arrested_for_crime_disclosures', disclosures.toJS())
  }

  render () {
    const arrestedForCrime = this.props.arrestedForCrime
    const disclosures = this.props.disclosures

    return (
      <CardLayout
        idClassName='crime_background_against_cohabitant_card'
        id='crimeBackgroundAgainstCohabitantCard'
        textAlignment='left'
        label='Disclosure of Criminal Background - Against Child / Spouse / Cohabitant'
        handleOnClick={() => this.props.setFocusState('crimeBackgroundAgainstCohabitantCard')}
        focusClassName={this.props.getFocusClassName('crimeBackgroundAgainstCohabitantCard') + ' ' + 'card phone-section double-gap-top'}>
        <div>
          <div>{Rfa01bCrimeBackGroundAgainstCohabCardText.abuse}</div>
          <div>
            <YesNoRadioComponent
              idPrefix='crimeBackgroundAgainstCohabitantRadio'
              value={arrestedForCrime}
              onFieldChange={(event) => this.props.setParentState('arrested_for_crime', !arrestedForCrime)} />
          </div>
        </div>
        { arrestedForCrime
          ? disclosures.map((crime, index) => {
            return (
              <div key={'crimeBackgroundAgainstCohabitant' + index} >
                <CriminalFields
                  index={index}
                  crime={crime}
                  idPrefix='crimeBackgroundAgainstCohabitant'
                  clickClose={this.clickClose}
                  onFieldChange={this.onFieldChange} />
              </div>
            )
          })
          : null
        }

        {arrestedForCrime
          ? <div>
            <Button
              id='CrimeAgainstCohabAdd'
              label='Add Another Offense - Against Child / Spouse / Cohabitant +'
              onClick={this.addCard} />
          </div>
          : null }

      </CardLayout>
    )
  }
}

CrimeBackgroundAgainstCohabitant.propTypes = {
  arrestedForCrime: PropTypes.bool,
  disclosures: PropTypes.array,
  getFocusClassName: PropTypes.func,
  setFocusState: PropTypes.func,
  setParentState: PropTypes.func,
  stateTypes: PropTypes.array,
  namePrefixTypes: PropTypes.array,
  nameSuffixTypes: PropTypes.array,
  errors: PropTypes.array
}
CrimeBackgroundAgainstCohabitant.defaultProps = {
  arrestedForCrime: false,
  disclosures: [disclosureDefaults],
  errors: []
}
