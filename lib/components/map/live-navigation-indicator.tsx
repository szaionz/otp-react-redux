import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import styled from 'styled-components'

const IndicatorContainer = styled.div`
  background: rgba(0, 120, 215, 0.95);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 12px;
  padding: 6px 12px;
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 60px;
  z-index: 1;

  &::before {
    animation: pulse 2s infinite;
    background: white;
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 8px;
    margin-right: 8px;
    vertical-align: middle;
    width: 8px;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
`

interface Props {
  liveNavigationEnabled: boolean
}

/**
 * Visual indicator showing when live navigation is active.
 */
const LiveNavigationIndicator = ({
  liveNavigationEnabled
}: Props): JSX.Element | null => {
  if (!liveNavigationEnabled) return null

  return (
    <IndicatorContainer>
      <FormattedMessage id="actions.location.liveNavigationActive" />
    </IndicatorContainer>
  )
}

const mapStateToProps = (state: {
  otp: { location: { liveNavigationEnabled: boolean } }
}) => ({
  liveNavigationEnabled: state.otp?.location?.liveNavigationEnabled || false
})

export default connect(mapStateToProps)(LiveNavigationIndicator)
