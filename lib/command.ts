interface MoveToCommand {
  isRelative: boolean
}

export const MOVE_TO_COMMANDS: Record<'M' | 'm', MoveToCommand> = {
  'M': {
    isRelative: false,
  },
  'm': {
    isRelative: true,
  }
}

export const LINE_TO_COMMANDS: Record<'L' | 'l' | 'H' | 'h' | 'V' | 'v', MoveToCommand> = {
  'L': {
    isRelative: false,
  },
  'l': {
    isRelative: true,
  },
  'H': {
    isRelative: false,
  },
  'h': {
    isRelative: true,
  },
  'V': {
    isRelative: false,
  },
  'v': {
    isRelative: true,
  }
}

export const COMMAND_CHARS = [
  ...Object.keys(MOVE_TO_COMMANDS),
  ...Object.keys(LINE_TO_COMMANDS),
]
