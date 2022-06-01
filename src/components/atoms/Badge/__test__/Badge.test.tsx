/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from '@storybook/testing-react'
import * as Stories from '../Badge.stories'
import { render } from '@testing-library/react'

const { BaseBadge } = composeStories(Stories)

describe('Badge', () => {
    test('renders BaseBadge correctly', () => {
        const view = render(<BaseBadge />)
        expect(view).toMatchSnapshot()
    })
})
