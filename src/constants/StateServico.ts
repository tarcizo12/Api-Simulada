export enum StateServico {
    NORMAL = 1,
    DELAY = 2,
    undefined = 3
}

export const getStateByValue = (value: number): StateServico =>{
  switch (value) {
    case StateServico.NORMAL: return StateServico.NORMAL
    case StateServico.DELAY: return StateServico.DELAY
    default:  return StateServico.undefined
  }
}

export const getEnumNameByValue = (value: number): string | undefined => {
  const name = StateServico[value as unknown as keyof typeof StateServico];
  return typeof name === "string" ? name : undefined;
};