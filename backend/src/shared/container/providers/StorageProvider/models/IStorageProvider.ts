export default interface IStorageProvider {
  saveFile(files: { path: string }[]): Promise<{ path: string }[]>;
  deleteFile(file: string): Promise<void>;
}
