import * as aws from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';

export class Test extends pulumi.ComponentResource {
  constructor(name: string) {
    super("test", name)

    new aws.s3.Bucket(
      `${name}Bucket`,
      {
        forceDestroy: true,
        website: { indexDocument: 'index.html' },
      },
      { parent: this },
    );
  } 
}
