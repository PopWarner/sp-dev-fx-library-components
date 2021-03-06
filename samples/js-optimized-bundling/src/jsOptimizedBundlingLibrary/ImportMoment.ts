/*
This file demonstrates how we can separate functionality that might not need to be loaded with the SPFx Web Part or Extension immediately, but be bundled into a separate .js file within the library and loaded dynamically.
We will be bundling Moment in the imported .ts file.
This demonstrates how if we have the need to bundle a third party library, such as Moment, we can delay the loading of it as well as any additional functionality until aboslutely needed.
*/

import * as moment from 'moment';

export default class ImportMoment {
    public static moment(): any {
      return moment;
    }
  }