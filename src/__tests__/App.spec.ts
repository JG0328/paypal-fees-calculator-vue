import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('calculates correct send amount and fees for 831.33 to receive', async () => {
    const wrapper = mount(App)

    const input = wrapper.find('input[placeholder="0.00"]')
    await input.setValue(831.33)

    expect(wrapper.text()).toContain('$879.10')
    expect(wrapper.text()).toContain('-$47.77')
  })

  it('calculates correct send amount and fees for 1000 to receive', async () => {
    const wrapper = mount(App)

    const input = wrapper.find('input[placeholder="0.00"]')
    await input.setValue(1000)

    expect(wrapper.text()).toContain('$1057.40')
    expect(wrapper.text()).toContain('-$57.40')
  })
})
