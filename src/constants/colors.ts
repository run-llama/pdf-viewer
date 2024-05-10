export enum DocumentColorEnum {
  purple = 'llama-purple',
  magenta = 'llama-magenta',
  red = 'llama-red',
  orange = 'llama-orange',
  yellow = 'llama-yellow',
  lime = 'llama-lime',
  teal = 'llama-teal',
  cyan = 'llama-cyan',
  blue = 'llama-blue',
  indigo = 'llama-indigo',
}

export const highlightColors: { [key in DocumentColorEnum]: string } = {
  [DocumentColorEnum.purple]: 'bg-llama-purple-light',
  [DocumentColorEnum.magenta]: 'bg-llama-magenta-light',
  [DocumentColorEnum.red]: 'bg-llama-red-light',
  [DocumentColorEnum.indigo]: 'bg-llama-indigo-light',
  [DocumentColorEnum.lime]: 'bg-llama-lime-light',
  [DocumentColorEnum.orange]: 'bg-llama-orange-light',
  [DocumentColorEnum.blue]: 'bg-llama-blue-light',
  [DocumentColorEnum.yellow]: 'bg-llama-yellow-light',
  [DocumentColorEnum.teal]: 'bg-llama-teal-light',
  [DocumentColorEnum.cyan]: 'bg-llama-cyan-light',
};
