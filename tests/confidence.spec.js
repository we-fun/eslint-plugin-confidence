const eslint = require('eslint')
const { disable, enable } = require('../src/confidence') // apply patch

describe('eslint-plugin-confidence', () => {
  const linter = new eslint.Linter()
  const config = {
    rules: {
      semi: 2, // error on missing `;`
      quotes: [1, 'single'], // warn on using `"`
    },
  }
  const sourceCode = 'var foo = "people"'

  it('should suppress warnings', () => {
    let timesTry = 10
    for (let i = 0; i < timesTry; i++) {
      let messages = linter.verify(sourceCode, config)
      messages = messages.filter((message) => message.severity === 1)
      expect(messages.length).toBe(0)
    }
  })

  it('should report errors with some probability', () => {
    let mask = 0b00
    let maxTimesTry = 20
    let i = 0
    while (mask !== 0b11 && i < maxTimesTry) {
      let messages = linter.verify(sourceCode, config)
      messages = messages.filter((message) => message.severity === 2)
      if (messages.length === 1) {
        mask |= 0b01
      } else if (messages.length === 0) {
        mask |= 0b10
      }
    }
    expect(mask).toBe(0b11)
  })

  it('can be temporarly disabled', () => {
    disable()
    let messages1 = linter.verify(sourceCode, config)
    messages1 = messages1.filter((message) => message.severity === 1)
    expect(messages1.length).toBe(1)
    enable()
    let messages2 = linter.verify(sourceCode, config)
    messages2 = messages2.filter((message) => message.severity === 1)
    expect(messages2.length).toBe(0)
  })
})
