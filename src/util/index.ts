import sharp from 'sharp';
import path from 'path';
import { ImageInfo } from '../interface';
import { AssetsRelativePath } from '../enums';

export const createTargetThumbPath = (
  imagePath: string,
  imageThumbInfo: ImageInfo
): string => {
  const fileExt = path.extname(imagePath);
  const imageThumbPath = path.resolve(
    __dirname,
    `${AssetsRelativePath.Thumbs}/${imageThumbInfo.filename}${imageThumbInfo.width}x${imageThumbInfo.height}${fileExt}`
  );
  return imageThumbPath;
};

export const processResizeImage = async (
  filePath: string,
  width: number,
  height: number,
  targetSavePath: string
): Promise<string | null> => {
  try {
    await sharp(filePath).resize(width, height).toFile(targetSavePath);

    return targetSavePath;
  } catch {
    return null;
  }
};
