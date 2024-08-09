/// <reference path="./.sst/platform/config.d.ts" />
import { Test } from 'test'

export default $config({
  app(input) {
    return {
      name: 'test',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
      providers: {
        aws: { region: 'us-east-1' },
      },
    }
  },
  async run() {
    new Test("YOLO")
  }
})
