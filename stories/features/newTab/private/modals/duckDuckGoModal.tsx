/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  Modal,
  Paragraph,
  LimitedBounds,
  PurpleButton,
  HeadingText,
  Footer
} from '../../../../../src/features/newTab'

import locale from '../fakeLocale'

interface Props {
  onClose: () => void
}

export default class DuckDuckGoModal extends React.PureComponent<Props, {}> {
  render () {
    const { onClose } = this.props
    return (
      <Modal onClose={onClose} size='small'>
        <LimitedBounds>
          <HeadingText>{locale.modalDuckduckGoTitle}</HeadingText>
          <Paragraph>{locale.modalDuckduckGoDisclaimer1}</Paragraph>
          <Paragraph>{locale.modalDuckduckGoDisclaimer2}</Paragraph>
        </LimitedBounds>
        <Footer>
          <PurpleButton onClick={onClose} text={locale.done} />
        </Footer>
      </Modal>
    )
  }
}
