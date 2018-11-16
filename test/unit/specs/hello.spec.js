import Hello from 'packages/hello'
import { createTest, createVue, destroyVM } from '../util'

describe('Hello.vue', () => {
  let vm

  afterEach(() => {
    destroyVM(vm)
  })
  /* eslint-disable */
  it('render default classList in hello', () => {
    vm = createTest(Hello)

    expect(vm.$el.classList.contains('suv-hello')).to.be.true
    const message = vm.$el.querySelector('.suv-hello__message')
    expect(message.textContent).to.equal('message')
  })

  it('create a hello for click with promise', (done) => {
    let result
    vm = createVue({
      template: `<suv-hello @click="handleClick"></suv-hello>`,
      methods: {
        handleClick(msg) {
          result = msg
        }
      }
    }, true)

    vm.$el.click()

    expect(result).to.not.exist
    setTimeout(() => {
      expect(result).to.exist
      expect(result).to.equal('this is click emit')
      done()
    }, 20)
  })
})
