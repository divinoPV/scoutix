const useSleep = (time: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, time));

export default useSleep;
