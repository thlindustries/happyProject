import fs from 'fs';
import path from 'path';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import uploadConfig from '@config/upload';

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(
    files: { path: string }[],
  ): Promise<{ path: string }[]> {
    files.forEach(async file => {
      await fs.promises.rename(
        path.resolve(uploadConfig.pastaTmp, file.path),
        path.resolve(uploadConfig.pastaUpload, file.path),
      );
    });

    return files;
  }

  public async deleteFile(file: string): Promise<void> {
    const caminhoDoArquivo = path.resolve(uploadConfig.pastaUpload, file);

    try {
      await fs.promises.stat(caminhoDoArquivo);
    } catch {
      return;
    }

    await fs.promises.unlink(caminhoDoArquivo);
  }
}

export default DiskStorageProvider;
