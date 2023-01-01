interface IJsonReader {
  readFileSync: (path: string) => string;
}

export default IJsonReader;
