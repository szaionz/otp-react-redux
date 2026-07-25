import * as locationFieldUtils from '@opentripplanner/location-field/lib/utils'

const patchFlag = '__otpReactReduxSubLabelPatchApplied'
const utils = locationFieldUtils

if (!utils[patchFlag]) {
  const originalGenerateLabel = utils.generateLabel

  utils.generateLabel = (properties = {}) => {
    const label = originalGenerateLabel(properties)
    let subLabel = ''
    if (typeof properties.sub_label === 'string') {
      subLabel = properties.sub_label.trim()
    }

    if (!subLabel) return label

    return {
      ...label,
      secondary: subLabel
    }
  }

  utils.getCombinedLabel = (properties = {}) => {
    const { main, secondary } = utils.generateLabel(properties)
    if (main && secondary) return `${main}, ${secondary}`
    return properties?.label || ''
  }

  utils[patchFlag] = true
}
