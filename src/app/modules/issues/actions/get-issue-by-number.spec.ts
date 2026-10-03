import { environment } from 'environments/environment';
import { getIssueByNumber } from './get-issue-by-number';

const mockIssue = {
  id: 1,
  number: 123,
  title: 'Test issue',
  body: 'Test body',
} as any;

const _BASE_URL = environment.baseURL;
const _GITHUB_TOKEN = environment.token;

describe('getIssueByNumber', () => {
  const mockIssueNumber = '123'
  let originalFetch: typeof window.fetch;

  beforeEach(() => {
    originalFetch = window.fetch;
  });
  afterEach(() => {
    window.fetch = originalFetch;
  });


  it('should fetch and return an issue sucessfully', async () => {
    window.fetch = jasmine.createSpy('fetch').and.returnValue(
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockIssue),
      })
    );

    const result = await getIssueByNumber(mockIssueNumber);

    expect(window.fetch).toHaveBeenCalledWith(`${_BASE_URL}/issues/${mockIssueNumber}`,
      {
        headers: {
          Authorization: `Bearer ${_GITHUB_TOKEN}`,
        }
      }
    );

    expect(result).toEqual(mockIssue);
  });

  it('should throw an error when response is not ok', async () => {
    window.fetch = jasmine.createSpy('fetch').and.returnValue(
      Promise.reject({
        ok: false,
        status: 404,
        json: jasmine.createSpy('json'),
      })
    );

    try {
      await getIssueByNumber(mockIssueNumber);
    } catch (error) {
      await expect(error).toBe(`Can't load issue ${mockIssueNumber}`);
    }
  });
});
