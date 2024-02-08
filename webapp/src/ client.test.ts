import {getSiteUrl, setSiteUrl} from './client';

describe('basePath', () => {
    it('should be a valid URL', () => {
        setSiteUrl('http://localhost:8065');

        expect(getSiteUrl()).toBe('http://localhost:8065');
    });
});
