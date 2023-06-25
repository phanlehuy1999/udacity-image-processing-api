import { ImageInfo } from '../interface';
import { AssetsRelativePath } from '../enums';
import path from 'path';
import fs from 'fs';

export const validateImageInfo = (imageInfo: ImageInfo): string | null => {
  if (imageInfo.filename === undefined || imageInfo.filename.length === 0) {
    return '[error] invalid file name';
  }
  if (
    imageInfo.width === undefined ||
    imageInfo.width.length === 0 ||
    isNaN(Number(imageInfo.width)) ||
    Number(imageInfo.width) === 0
  ) {
    return '[error] invalid width';
  }
  if (
    imageInfo.height === undefined ||
    imageInfo.height.length === 0 ||
    isNaN(Number(imageInfo.height)) ||
    Number(imageInfo.height) === 0
  ) {
    return '[error] invalid height';
  }
  return null;
};

export const getImagePath = (fileName: string): string | null => {
  try {
    const imagesAbsolutePath = path.resolve(
      __dirname,
      AssetsRelativePath.Images
    );
    const fullName: string | undefined = fs
      .readdirSync(imagesAbsolutePath)
      .find((file) => file.split('.')[0] === fileName);
    return fullName !== undefined
      ? path.resolve(imagesAbsolutePath, fullName)
      : null;
  } catch {
    return null;
  }
};

export const getImageThumbPath = (imageThumbPath: string): string | null => {
  try {
    return fs.existsSync(imageThumbPath) ? imageThumbPath : null;
  } catch {
    return null;
  }
};
