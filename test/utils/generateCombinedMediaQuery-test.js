import generateCombinedMediaQuery from '../../modules/utils/generateCombinedMediaQuery'

describe('Combining media queries', () => {
  it('should return the combined query', () => {
    expect(generateCombinedMediaQuery('', '(min-height: 300px)')).to.eql('(min-height: 300px)')
    expect(generateCombinedMediaQuery('(min-width: 400px)', '(min-height: 300px)')).to.eql('(min-width: 400px) and (min-height: 300px)')
  })
})
