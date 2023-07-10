import {
  validateImageInfo,
  getImagePath,
  getImageThumbPath,
} from '../../validation/index';

describe('validate image info', () => {
  it('should return error string: [error] invalid file name', () => {
    expect(
      validateImageInfo({ filename: '', width: '300', height: '170' })
    ).toEqual('[error] invalid file name');
  });

  it('should return error string: [error] invalid width', () => {
    expect(
      validateImageInfo({ filename: 'encenadaport', width: '', height: '170' })
    ).toEqual('[error] invalid width');
  });

  it('should return error string: [error] invalid height', () => {
    expect(
      validateImageInfo({ filename: 'encenadaport', width: '300', height: '' })
    ).toEqual('[error] invalid height');
  });

  it('should return null', () => {
    expect(
      validateImageInfo({
        filename: 'encenadaport',
        width: '300',
        height: '170',
      })
    ).toEqual(null);
  });
});

describe('get image path', () => {
  it('should return full image path', () => {
    expect(getImagePath('encenadaport')).toContain(
      '/udacity-image-processing-api/assets/images/encenadaport.jpg'
    );
  });
});

describe('get image thumb path', () => {
  it('should return null if not exist', () => {
    expect(getImageThumbPath('wrong path')).toEqual(null);
  });
});
