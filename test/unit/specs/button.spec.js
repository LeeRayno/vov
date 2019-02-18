import Button from 'packages/button'
import { createTest, destroyVM } from '../util'

describe('button.vue', () => {
  let vm

  afterEach(() => {
    destroyVM(vm)
  })
  /* eslint-disable */
  it('create a default button', () => {
    vm = createTest(Button)
    expect(vm.$el.classList.contains('vov-button--default')).to.be.true
  })

  it('create a primary button', () => {
    vm = createTest(Button, {
      type: 'primary'
    })
    expect (vm.$el.classList.contains('vov-button--primary')).to.be.true
  })
})
