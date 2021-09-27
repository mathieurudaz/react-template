import React from 'react'
import { shallow } from 'enzyme'
import { TypescriptComponent } from '../component'

it('should contain the content I add in, using typescript', function() {
  const wrapper = shallow(<TypescriptComponent content='fooBar' />)
  expect(wrapper.text()).toBe('fooBar')
})

it('should match the snapshot', function() {
  const wrapper = shallow(<TypescriptComponent content='fooBar' />)
  expect(wrapper).toMatchInlineSnapshot(`
<blockquote>
  fooBar
</blockquote>
`)
})
