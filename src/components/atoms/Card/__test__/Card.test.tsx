/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from '@storybook/testing-react'
import * as Stories from '../Card.stories'
import { render } from '@testing-library/react'

const { BaseCard } = composeStories(Stories)

describe('Card', () => {
    test('renders Card correctly', () => {
        const view = render(<BaseCard />)
        expect(view).toMatchSnapshot()
    })
})
