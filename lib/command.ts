interface CommandBase {
  isRelative: boolean
}

export const MOVE_TO_COMMANDS: Record<'M' | 'm', CommandBase> = {
  M: {
    isRelative: false,
  },
  m: {
    isRelative: true,
  },
}

export const LINE_TO_COMMANDS: Record<
  'L' | 'l' | 'H' | 'h' | 'V' | 'v',
  CommandBase
> = {
  L: {
    isRelative: false,
  },
  l: {
    isRelative: true,
  },
  H: {
    isRelative: false,
  },
  h: {
    isRelative: true,
  },
  V: {
    isRelative: false,
  },
  v: {
    isRelative: true,
  },
}

export const CUBIC_BEZIER_CURVE_COMMANDS: Record<
  'C' | 'c' | 'S' | 's',
  CommandBase
> = {
  C: {
    isRelative: false,
  },
  c: {
    isRelative: true,
  },
  S: {
    isRelative: false,
  },
  s: {
    isRelative: true,
  },
}

export const QUADRATIC_BEZIER_CURVE_COMMANDS: Record<
  'Q' | 'q' | 'T' | 't',
  CommandBase
> = {
  Q: {
    isRelative: false,
  },
  q: {
    isRelative: true,
  },
  T: {
    isRelative: false,
  },
  t: {
    isRelative: true,
  },
}

export const ELLIPTICAL_ARC_CURVE_COMMANDS: Record<'A' | 'a', CommandBase> = {
  A: {
    isRelative: false,
  },
  a: {
    isRelative: true,
  },
}

export const CROSS_COMMANDS: Record<'Z' | 'z', CommandBase> = {
  Z: {
    isRelative: false,
  },
  z: {
    isRelative: true,
  },
}

export const COMMAND_CHARS = [
  ...Object.keys(MOVE_TO_COMMANDS),
  ...Object.keys(LINE_TO_COMMANDS),
  ...Object.keys(CUBIC_BEZIER_CURVE_COMMANDS),
  ...Object.keys(QUADRATIC_BEZIER_CURVE_COMMANDS),
  ...Object.keys(ELLIPTICAL_ARC_CURVE_COMMANDS),
  ...Object.keys(CROSS_COMMANDS),
]
