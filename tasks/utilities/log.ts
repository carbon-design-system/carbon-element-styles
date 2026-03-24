/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const colors = {
  reset: '\x1b[0m',
  gray: '\x1b[90m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
};

export function info(...data: any[]) {
  console.info(colors.gray, '·', ...data, colors.reset);
}

export function success(...data: any[]) {
  console.info(colors.green, '✓', ...data, colors.reset);
}

export function warning(...data: any[]) {
  console.warn(colors.yellow, '⚠', ...data, colors.reset);
}

export function error(...data: any[]) {
  console.error(colors.red, '✗', ...data, colors.reset);
}
