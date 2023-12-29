import type { URLResult } from 'npm-package-arg';
import { BaseSpecifier } from './base';

/** @example "http://x.com/foo.tgz" */
export class UrlSpecifier extends BaseSpecifier<URLResult> {
  _tag = 'Url' as const;

  // @TODO: If file name is semver, return that in getSemver()
}
