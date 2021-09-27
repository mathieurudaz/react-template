/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { cosmiconfig } from 'cosmiconfig'
import { CosmiconfigResult } from 'cosmiconfig/dist/types'

let gitlabConfig: CosmiconfigResult

beforeAll(async () => {
  const explorer = cosmiconfig('gitlab-ci')
  gitlabConfig = await explorer.load('./.gitlab-ci.yml')
})

it('should have a GitLab CI configuration', () => {
  expect(gitlabConfig!.isEmpty).toBeFalsy()
})

it('should have a slug variable', () => {
  expect(gitlabConfig!.config.variables.SLUG).toBeTruthy()
})

it('should not have the default slug', () => {
  expect(gitlabConfig!.config.variables.SLUG).not.toBe('2019/react-base')
})
