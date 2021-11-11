/*
 * Copyright 2020 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export function utf8_to_b64(str: string) {
  return Buffer.from(unescape(encodeURIComponent(str))).toString('base64'); // TODO node vs browser
  // return window.btoa(unescape(encodeURIComponent(str)));
}

export function b64_to_utf8(str: string) {
  return decodeURIComponent(escape(Buffer.from(str, 'base64').toString())); // TODO node vs browser
  // return decodeURIComponent(escape(window.atob(str)));
}

export function validateNonEmptyString(key: string, value: string): void | never {
  if (!value || typeof value !== 'string') {
    throw new Error(`Expected ${key} to be a non-empty string, but got: "${value}"`);
  }
}

export function kebabToPascalCase(str: string) {
  return str
    .split('-')
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');
}
