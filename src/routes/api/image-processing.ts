import express from 'express';
import { ImageInfo } from '../../interface';
import {
  validateImageInfo,
  getImagePath,
  getImageThumbPath,
} from '../../validation';
import { processResizeImage, createTargetThumbPath } from '../../util';

const imageProcessingRoute = express.Router();

imageProcessingRoute.get(
  '/resize',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const imageInfo: ImageInfo = {
      filename: req.query.filename as string,
      width: req.query.width as string,
      height: req.query.height as string,
    };

    // Validate query params
    const errorValidateMessage = validateImageInfo(imageInfo);
    if (errorValidateMessage !== null) {
      res.send(errorValidateMessage);
      return;
    }
    // Check exist for image
    const imagePath = getImagePath(imageInfo.filename);
    if (imagePath === null) {
      res.send('[error] image does not exist');
      return;
    }
    // Check exist image thumb
    const targetImageThumbPath = createTargetThumbPath(imagePath, imageInfo);
    const imageThumbPath = getImageThumbPath(targetImageThumbPath);
    if (imageThumbPath !== null) {
      res.sendFile(imageThumbPath);
    } else {
      const newResizeImage = await processResizeImage(
        imagePath,
        Number(imageInfo.width),
        Number(imageInfo.height),
        targetImageThumbPath
      );
      if (newResizeImage !== null) {
        res.sendFile(newResizeImage);
      } else {
        res.send('[error] fail to process resize image');
      }
    }
  }
);

export default imageProcessingRoute;
